class RecorderManager {
	constructor(processorPath) {
		this.audioBuffers = [];
		this.processorPath = processorPath;
		this.audioContext = null;
		this.audioTracks = null;
		this.audioWorklet = null;
		this.onStop = null;
		this.onFrameRecorded = null;
		this.onStart = null;
	}

	async start({
		sampleRate = 16000,
		frameSize = 1280,
		arrayBufferType = "short16"
	} = {}) {
		try {
			if (!this.audioContext) {
				this.audioContext = new(window.AudioContext || window.webkitAudioContext)();
			}

			if (!this.audioWorklet) {
				await this.audioContext.audioWorklet.addModule(this.processorPath);
				this.audioWorklet = new AudioWorkletNode(this.audioContext, "audio-processor");
				this.audioWorklet.port.onmessage = (event) => {
					if (event.data.type === "audioBuffer") {
						const audioBuffer = new ArrayBuffer(event.data.data.length);
						const audioView = new DataView(audioBuffer);
						event.data.data.forEach((value, index) => {
							if (arrayBufferType === "short16") {
								audioView.setInt16(index * 2, value, true);
							} else {
								audioView.setFloat32(index * 4, value, true);
							}
						});
						this.audioBuffers.push(audioBuffer);
						if (this.onFrameRecorded) {
							this.onFrameRecorded({
								isLastFrame: false,
								frameBuffer: audioBuffer,
							});
						}
					}
				};

				this.audioWorklet.port.start();
			}

			if (this.onStart) {
				this.onStart();
			}

			const stream = await navigator.mediaDevices.getUserMedia({
				audio: true
			});
			this.audioTracks = stream.getAudioTracks();
			const mediaStreamSource = this.audioContext.createMediaStreamSource(stream);
			mediaStreamSource.connect(this.audioWorklet);
		} catch (error) {
			console.error("Error starting recorder:", error);
			this.stop();
		}
	}

	stop() {
		if (this.audioTracks) {
			this.audioTracks.forEach((track) => track.stop());
		}

		if (this.audioContext) {
			this.audioContext.close().then(() => {
				this.audioContext = null;
			});
		}

		if (this.audioWorklet) {
			this.audioWorklet.port.postMessage({
				type: "stop"
			});
		}

		if (this.onStop) {
			this.onStop(this.audioBuffers);
		}

		this.audioBuffers = [];
	}
}

export default RecorderManager;