// import "./script2";
document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll('.question');
    const progressBar = document.querySelector('.progress');
    const textInputs = document.querySelectorAll('.text-input');
    const selectBoxes = document.querySelectorAll('.select-box');
    const radioButtons = document.querySelectorAll('.radio-button');
  

    const updateProgressBar = () => {
      let filledInputs = 0;
      textInputs.forEach(input => {
        if (input.value.length >= 3) {
          filledInputs++;
        }
      });
      selectBoxes.forEach(select => {
        if (select.value !== '') {
          filledInputs++;
        }
      });
      radioButtons.forEach(radio => {
        if (radio.checked) {
          filledInputs++;
        }
      });
        
      const progressPercentage = 50+((filledInputs / (2*(textInputs.length + selectBoxes.length + radioButtons.length/2))) * 100);
      document.getElementById("percent").innerHTML = Math.round(progressPercentage) ;
     
    //   console.log( )
    
      progressBar.style.width = Math.round(progressPercentage)+"%";
  
      // Show next screen if all inputs are filled
    //   if (progressPercentage == 50) {
    //     showNextScreen();
    //   }
    };
    // const showNextScreen = () => {
    //   const currentScreen = document.querySelector('.current-screen');
    //   const nextScreen = currentScreen.nextElementSibling;
    //   if (nextScreen) {
    //     currentScreen.classList.remove('current-screen');
    //     nextScreen.classList.add('current-screen');
    //   }
    // };
  
    // Add event listeners for input events
    textInputs.forEach(input => {
      input.addEventListener("input", updateProgressBar);
    });
  
    selectBoxes.forEach(select => {
      select.addEventListener("change", updateProgressBar);
    });
  
    radioButtons.forEach(radio => {
      radio.addEventListener("change", updateProgressBar);
    });
  });

  