// TODO
document.addEventListener("DOMContentLoaded", function() {
    const firstName = document.getElementById("first-name")
    const lastName = document.getElementById("last-name")
    const email = document.getElementById("email")
    const input = document.getElementsByTagName('input');
    

    const form = document.querySelector("form")

    let allValid = false
    const selectEl = document.getElementById('contact-kind')

    const setSelectValidity = function() {
        // console.log(selectEl.value)
        if (selectEl.value === 'choose') {
            selectEl.setCustomValidity('Must select an option')
            allValid = false
            return;
        }
        selectEl.setCustomValidity('')
        const businessEl = document.querySelector('.business')
        const techEl = document.querySelector('.technical')

        if(selectEl.value === 'business') {
            businessEl.classList.remove('hide')
            techEl.classList.add('hide')
            businessEl.querySelector('input').required = true;
            techEl.querySelector('input').required = false;
            allValid = true
        } else {
            businessEl.classList.add('hide')
            techEl.classList.remove('hide')
            businessEl.querySelector('input').required = false;
            techEl.querySelector('input').required = true;
            allValid = true
        }
    }
    selectEl.addEventListener('change', function(){
        setSelectValidity();
    })


    function checkEmail(inputVal) {
        const emailRegex = new RegExp(/\w+@\w+\.\w+/)
        if(!emailRegex.test(inputVal)) {
            email.validity.valid = false;
            email.setCustomValidity('email format is wrong!')
            email.reportValidity()
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
        } else {
            lastName.validity.valid = true;
            allValid = true
        }
        if(!allValid) {
            console.log('Bad input')
        }
        
    }
    
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


    form.addEventListener('submit', (e)=> {
        checkFirstNameValidation(e.target.value)
        checkLastNameValidation(e.target.value)
        checkEmail(e.target.value)
        setSelectValidity();
        if(!allValid) {
            e.preventDefault();
        }
        
    })

    
});