// TODO
document.addEventListener("DOMContentLoaded", function() {
    const firstName = document.getElementById("first-name")
    const lastName = document.getElementById("last-name")
    const email = document.getElementById("email")
    const form = document.querySelector("form")
    const input = document.getElementsByTagName('input');
    const messageEl = document.getElementById('message-box');
    const selectEl = document.getElementById('contact-kind')
    let allValid = false;

    function checkEmail(inputVal) {
        const emailRegex = new RegExp(/\w+@\w+\.\w+/)
        if(!emailRegex.test(inputVal)) {
            email.validity.valid = false;
            email.setCustomValidity('email format is wrong!')
            email.reportValidity()
            allValid = false
        } else {
            email.validity.valid = true;
            allValid = true;
        }
        if(!allValid) {
            console.log('Bad input')            
        }
    }

    function checkFirstNameValidation(inputVal) {
        // console.log(inputVal)
        if(inputVal.length < 3) {
            firstName.validity.valid = false;
            firstName.setCustomValidity('Your name is too short')
            firstName.reportValidity()
            allValid = false
        } else {
            firstName.validity.valid = true;
            allValid = true
        }
        if(!allValid) {
            console.log('Bad input')
        }
        
    }

    function checkLastNameValidation(inputVal) {
        // console.log(inputVal)
        if(inputVal.length < 3) {
            lastName.validity.valid = false;
            lastName.setCustomValidity('Your name is too short')
            lastName.reportValidity()
            allValid = false
        } else {
            lastName.validity.valid = true;
            allValid = true
        }
        if(!allValid) {
            console.log('Bad input')
        }
        
    }

    function checkMessageValidation() {
        // console.log(inputVal)
        if(messageEl.value.length < 10) {
            messageEl.validity.valid = false;
            messageEl.setCustomValidity('Your message is too short')
            messageEl.reportValidity()
            allValid = false
        } else {
            messageEl.validity.valid = true;
            allValid = true
        }
        if(!allValid) {
            console.log('Bad input')
        }
        
    }

    const setSelectValidity = function() {
        // console.log(selectEl.value)
        if (selectEl.value === 'choose') {
            selectEl.setCustomValidity('Must select an option')
            allValid = false
            return;
        }
        selectEl.setCustomValidity('')
        const jobEl = document.querySelector('.job')
        const talkEl = document.querySelector('.talk')

        if(selectEl.value === 'job') {
            jobEl.classList.remove('hide')
            talkEl.classList.add('hide')
            jobEl.querySelector('input').required = true;
            talkEl.querySelector('input').required = false;
            allValid = true
        } else {
            jobEl.classList.add('hide')
            talkEl.classList.remove('hide')
            jobEl.querySelector('input').required = false;
            talkEl.querySelector('input').required = true;
            allValid = true
        }
    }

    selectEl.addEventListener('change', function(){
        setSelectValidity();
    })

    input[0].addEventListener("change", (e)=> {
        // console.log(e.target.value)
        let input2 = e.target.value
        checkFirstNameValidation(input2)
    })

    input[1].addEventListener("change", (e)=> {
        let input3 = e.target.value
        checkLastNameValidation(input3)
    })

    input[2].addEventListener("change", (e)=> {
        let input4 = e.target.value
        checkEmail(input4)
    })

    messageEl.addEventListener("change", ()=> {
        // let input4 = e.target.value
        checkMessageValidation()
    })

    form.addEventListener('submit', (e)=> {
        checkFirstNameValidation(e.target.value)
        checkLastNameValidation(e.target.value)
        checkEmail(e.target.value)
        setSelectValidity();
        checkMessageValidation();
        if(!allValid) {
            e.preventDefault();
        }
        
    })
})