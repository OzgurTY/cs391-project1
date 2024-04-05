const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


/* -------------------------SIGN UP CHECKER---------------------------------------------------*/  //EMİN DEĞİLİM BUNDAN SONRAKİ KISIMDA HATA VAR MI DİYE KONTROL ET

let existingUsers = [
    
];

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;

    
    let userExists = existingUsers.some(user => user.username === username);
    let emailExists = existingUsers.some(user => user.email === email);

    
    if (userExists) {
        showError("Username already exists");
    } else if (emailExists) {
        showError("Email already exists");
    } else {
        
        existingUsers.push({ username: username, email: email });
        
        let password = document.getElementById("password").value;

        
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";

        
        console.log("Signup successful");
    }
});

function showError(message) {
    let errorMessageElement = document.getElementById("error-message");
    errorMessageElement.textContent = message;
}
/*--------------------------------------------------------------------------------------------*/ 
