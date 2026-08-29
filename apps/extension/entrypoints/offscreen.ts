let mediaRecorder: MediaRecorder | undefined;
let chunks: Blob[] = [];

async function startRecording() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

  chunks = [];
  mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.ondataavailable = (event) => {
    chunks.push(event.data);
  };

  mediaRecorder.start();
}

function stopRecording() {
  if (!mediaRecorder) return;

  mediaRecorder.onstop = () => {
    const blob = new Blob(chunks, { type: mediaRecorder!.mimeType });
    console.log('recording stopped, blob size:', blob.size);
    chunks = [];
  };

  mediaRecorder.stop();
}

browser.runtime.onMessage.addListener((message) => {
  switch (message.type) {
    case 'start-recording':
      startRecording();
      break;
    case 'stop-recording':
      stopRecording();
      break;
  }
});
