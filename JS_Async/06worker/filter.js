document.addEventListener('DOMContentLoaded', function () {
  const worker = new Worker('scripts/filter-worker.js');
  worker.postMessage('Hello Worker !');
  console.log('Message Sent to Worker');
  console.log(worker);
});
