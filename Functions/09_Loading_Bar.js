function drawLoadingBar(percentage) {
    const percent = percentage + '%';
    const completed = percentage / 10;
    const remaining = 10 - completed;
    const progressBar = '%'.repeat(completed) + '.'.repeat(remaining);
    const message = percentage === 100 ? 'Complete!' : 'Still loading...';
    
    console.log(`${percent} [${progressBar}]${message}`);
  }
  
  // Example usage:
  //drawLoadingBar(30);
  //drawLoadingBar(50);
  //drawLoadingBar(100);
  