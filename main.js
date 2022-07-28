 var msg1 = document.getElementById("message1")  
 var msg2 = document.getElementById("message2")  
 var msg3 = document.getElementById("message3")  
 var msgHeader = document.getElementById("mainHeader")
 var subHeadermsg = document.getElementById("subHeader")
 var answer = Math.floor(Math.random()*100) + 1;  
 var numberOfGuesses = 0;  
 var guessHistory = [];  




 
 function checkNumber(){  
   var userInput = document.getElementById("guess").value;  
   //User Validation
   if(userInput < 1 || userInput > 100 ){  
     alert("Please Enter a number Between 1 to 100");  
   } else {  
        guessHistory.push(userInput);  
        numberOfGuesses += 1;  
        if(userInput < answer) {  
            msg1.textContent = "Your Guess is Too low"  
            msg2.textContent = "Number of tries :" +  
            numberOfGuesses;  
            msg3.textContent = "Guessed Number Are: " +  
            guessHistory;  
     } else if(userInput > answer) {  
            msg1.textContent = "Your Guess is Too High"  
            msg2.textContent = "Number of tries : " +  
            numberOfGuesses;  
            msg3.textContent = "Guessed Number Are: " +  
            guessHistory;  
     }  
     else if(userInput == answer){  

            msgHeader.textContent = "YOU DID IT!";
            subHeadermsg.textContent = " ";
            msg1.textContent = " "  
            msg2.textContent = "The Number was " + answer  
            msg3.textContent = "You guessd it in " +  numberOfGuesses  +"Guesses";   
     }  
   }  
 }  

//Reset Function
 function reset(){  
    msg1.textContent = " ";
    msg2.textContent = "No. Of Guesses : ";
    msg3.textContent = "Guessed Numbers: ";
    answer = Math.floor(Math.random()*100) + 1; 
    msgHeader.textContent = "Guess My Number!";
 }
