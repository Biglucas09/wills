const form=document.getElementById("loginform")
const emailTag=document.getElementById("input30")
const passwordTag=document.getElementById("input31")

form.addEventListener("submit",validation);
function validation(e){
    e.preventDefault();
    if(emailTag.value.length=== 0){
        alert("Enter your Username")
        emailTag.style.color="blue"
        return "Input your Username"
    }else if(passwordTag.value.length<8){
        alert("password must be at least 8 charcters")
        passwordTag.style.color="blue"
        return "Check password"
    }else if(passwordTag.value.length===0){
        alert("invalid password")
        passwordTag.style.color="blue"
        return "Input password"
    }else{
        emailTag.value=""
        passwordTag.value=""
        alert("form submitted succesfully")

    }
}
