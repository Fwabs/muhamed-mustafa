var questForm = document.getElementById('questForm')

questForm.addEventListener('submit', function(ev){
    ev.preventDefault()
    for(var i = 0; i < 3; i++){
        if(ev.target[i].value == ""){
            showMessage(ev.target[i] ,'This Field is Required')
        }
    }
})


questForm.addEventListener('input', function(ev){
    switch(ev.target.id){
        case 'name' :
            nameCheck(ev.target)
        break
    }
    switch(ev.target.id){
        case 'email' :
            emailCheck(ev.target)
            break
    }
    switch(ev.target.id){
        case 'password' :
            passwordCheck(ev.target)
            break
    }
})


function nameCheck(input){
    var inputValue = input.value.trim()
    if (inputValue.length == 0 || inputValue.length > 3 ) {
        hideMessage(input)
    } 
    else if(inputValue.length <= 3 ){
        showMessage(input ,'invalid name')
    }
}

function emailCheck(input){
    var inputValue = input.value.trim()
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var looping = emailPattern.test(inputValue) // test() returns true or false  true = matches the critria false = doesn't match
    if (looping == true || inputValue == '') {
        hideMessage(input)
    } else {
        showMessage(input ,'invalid Email')
    }
}

function passwordCheck(input) {
    var inputValue = input.value.trim()
    var strPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var looping = strPass.test(inputValue)
    if (looping == true || inputValue == '') {
        hideMessage(input)
    } else {
        showMessage(input ,"Password Critria doesn't match")
    }
}




function showMessage(input, msg){
    // p = document.createElement('p')
    // p.classList.add('text-danger', 'mt-2')
    // input.parentElement.append(p)
    var x = input.nextElementSibling
    var y = x.nextElementSibling
    y.innerText = msg
}

function hideMessage(input){
    var a = input.nextElementSibling
    var b = a.nextElementSibling
    b.innerText = ''
}