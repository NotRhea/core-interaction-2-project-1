function stopScrolling() {
    var scrollingText = document.getElementById("scrolling-text");
    scrollingText.style.animationPlayState = "paused";
    
   
    scrollingText.style.top = window.getComputedStyle(scrollingText).getPropertyValue('top');
    
    
    var replacementText = document.getElementById("replacement-text");
    replacementText.style.display = "block";
    replacementText.style.animation = "fadeIn 1s forwards";
  }