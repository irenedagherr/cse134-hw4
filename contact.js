
var form_errors = [];

var form = document.getElementById('ContactForm'); 



form.addEventListener('submit', function (event) {
    // Reset the form_errors 
    form_errors = [];

  
    myFunction();
    


    console.log(form_errors);
    
    if (form_errors.length > 0) {
        
        var errorsJson = JSON.stringify(form_errors);

        
        var hiddenInput = document.getElementById('form-errors');
        hiddenInput.value = errorsJson;
       
    }
});




function myFunction() {
    
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');
  
    // Reset custom validity messages
    name.setCustomValidity('');
    email.setCustomValidity('');
    message.setCustomValidity('');

   

    if (!/^[a-zA-Z]+$/.test(name.value) && name.value.trim() !== '') {
            flashField(name,'solveMessage1');
        
            var errorObject = {
                field: 'name',
                message: 'Using only letters in the name '
            };

            form_errors.push(errorObject);
            
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value) && email.value.trim()!=='')  {
        flashField(email,'solveMessage2');
        

        var errorObject = {
            field: 'email',
            message: 'Incorrect syntax for mail'
        };

        form_errors.push(errorObject);
       
    }


    //CHECKIN NAME VALIDITY 

if (!name.checkValidity()) {
    if (name.validity.valueMissing) {
        // The input is empty, you can handle this case as needed
        hideErrorMessage('errorMessage1', 'infoMessage1');
        hideErrorMessage('errorMessage2', 'infoMessage2');
        hideMessage('approvemessage1');

    } else if (name.validity.tooShort) {
        showErrorMessage('errorMessage1', 'infoMessage1');
        hideMessage('approvemessage1');
        var errorObject = {
            field: 'name',
            message: 'Name is too short '
        };
        form_errors.push(errorObject);
    } else if (name.validity.tooLong) {
        showErrorMessage('errorMessage2', 'infoMessage2');
        hideMessage('approvemessage1');
        var errorObject = {
            field: 'name',
            message: 'Name is too long'
        };
        form_errors.push(errorObject);
    }
} else {
    hideErrorMessage('errorMessage1', 'infoMessage1');
    hideErrorMessage('errorMessage2', 'infoMessage2');
    showMessage('approvemessage1');
}
    
///////////////////////////////////////////////////////

    // Validate email
    if (!email.checkValidity()) {
        email.setCustomValidity('Please enter a valid email address.');
    }


    
    // Validate message
    if (!message.checkValidity()) {
        message.setCustomValidity('Please enter a message.');
    }
}




/////////////////Flash the field & the message that comes with it 

function flashField(input,errorMessage) {
    input.classList.add('flash');
    showMessage(errorMessage);
    setTimeout(() => {
        input.classList.remove('flash');
        hideMessage(errorMessage);
    }, 2000);


}





//////////////////SHOWING ERROR MESSAGES AND HIDING ERROR MESSAGES 

function showErrorMessage(errorId, infoId) {
    
    document.getElementById(errorId).style.display = 'block';
    document.getElementById(infoId).style.display = 'block';
}

function hideErrorMessage(errorId, infoId) {
    document.getElementById(errorId).style.display = 'none';
    document.getElementById(infoId).style.display = 'none';
}
/////////////////////SHOWING AND HIDING THE "THIS IS GOOD MESSAGES "

function showMessage(Id) {
    
    document.getElementById(Id).style.display = 'block';
   
}

function hideMessage(Id) {
    document.getElementById(Id).style.display = 'none';
    
}








function characterCount(){
  
        var textarea = document.getElementById('message');
        var messageInfo = document.getElementById('messageInfo');
        var messageInfo2 = document.getElementById('messageInfo2');
        var currentLength = textarea.value.length;
        var maxLength = textarea.maxLength;

        messageInfo.textContent = (150 - currentLength)+" characters left";

        if (currentLength > 100) {
            messageInfo2.className = "warn";
            messageInfo2.textContent = "Warning!";
            
        } else if (currentLength == maxLength) {
            messageInfo2.className = "error";
            messageInfo2.textContent= "ERROR";
        } else {
            messageInfo2.className = "perfect";
            messageInfo2.textContent = "Perfect message!";  
        }

       
        messageInfo.style.display = 'inline';
        messageInfo2.style.display = 'inline';
    
}