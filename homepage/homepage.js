document.addEventListener("DOMContentLoaded", function() {
    var punctuationElement = document.querySelector('.one');
  
    var punctuationOptions = ['?', ',', ';', '!'];
    var punctuationIndex = 0;
  
    function changePunctuation() {
      punctuationElement.innerHTML = "On Punctuation" + punctuationOptions[punctuationIndex];
      punctuationIndex = (punctuationIndex + 1) % punctuationOptions.length;
    }
  

    changePunctuation();
  
   
    setInterval(changePunctuation, 1000);
  });