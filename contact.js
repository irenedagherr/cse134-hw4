//accessing elements of the form

function myFunction() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');
  
    // Reset custom validity messages
    name.setCustomValidity('');
    email.setCustomValidity('');
    message.setCustomValidity('');

    if(name.value.trim() !== ''){

    if (!/^[a-zA-Z]+$/.test(name.value)) {
            flashField(name,"Please use only letters.");
            return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
        flashField(email,"Please enter a valid mail");
        return;
    }

    if ( !name.checkValidity()) {
        if (name.validity.tooShort) {
            showErrorMessage('errorMessage1', 'infoMessage1');
            
        } else if (name.validity.tooLong) {
            showErrorMessage('errorMessage2', 'infoMessage2');
        }
    } else {
        hideErrorMessage('errorMessage1', 'infoMessage1');
        hideErrorMessage('errorMessage2', 'infoMessage2');

        var scv1 = document.getElementById('scv1');
        scv1.className = 'perfect';
        scv1.textContent = 'This is perfect!';
        scv1.style.display = 'block';
    }
    }


    // Validate email
    if (!email.checkValidity()) {
        email.setCustomValidity('Please enter a valid email address.');
    }


    
    // Validate message
    if (!message.checkValidity()) {
        message.setCustomValidity('Please enter a message.');
    }
}

function flashField(input,errorMessage,number) {
    input.classList.add('flash');
    showErrorInErrorMessageArea(errorMessage,number);
    setTimeout(() => {
        input.classList.remove('flash');
        hideErrorMessageInErrorMessageArea();
    }, 3000);


}

function showErrorInErrorMessageArea(errorMessage,number) {
    var errorMessageArea = document.getElementById('errorMessagenumber');
    errorMessageArea.textContent = errorMessage;
    errorMessageArea.style.display = 'block';
}

function hideErrorMessageInErrorMessageArea() {
    var errorMessageArea = document.getElementById('errorMessageArea');
    errorMessageArea.textContent = '';
    errorMessageArea.style.display = 'none';
}



function showErrorMessage(errorId, infoId) {
    
    document.getElementById(errorId).style.display = 'block';
    document.getElementById(infoId).style.display = 'block';
}

function hideErrorMessage(errorId, infoId) {
    document.getElementById(errorId).style.display = 'none';
    document.getElementById(infoId).style.display = 'none';
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