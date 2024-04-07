const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


document.addEventListener('DOMContentLoaded', function() {
   
    const signInForm = document.getElementById('sign-in-form');
    const signUpForm = document.getElementById('signUpForm');

   
    signInForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('usernameIn').value;
        const password = document.getElementById('passwordIn').value;
        if (validateSignIn(username, password)) {
            if (findUserByUsernameAndPassword(username, password)) {
                alert('Login successful!');
                sessionStorage.setItem('isLoggedIn', 'true');
              sessionStorage.setItem('tempusername', username);
                window.location.href = "index.html";
                //to do login word to welcome + username 
                originalSignInText = document.getElementById("signInText");
                originalSignInText.textContent = "Log Out";
            } else {
                alert('Invalid username or password.'); 
            }
        }
    });

   
    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if (validateSignUp(username, email, password)) {
            if (findUserByUsername(username)) {
                alert('Username already exists. Please choose a different one.');
            } else if (findUserByEmail(email)) {
                alert('Email already exists. Please use a different email.');
            } else {
                saveUser({ username, email, password }); 
                alert('Registration successful!');
                window.location.href = 'signin.html'; 
            }
        }
    });

    
    function saveUser(newUser) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
    }

    
    function findUserByUsernameAndPassword(username, password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        return users.some(user => user.username === username && user.password === password);
    }

    
    function findUserByUsername(username) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        return users.some(user => user.username === username);
    }

    
    function findUserByEmail(email) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        return users.some(user => user.email === email);
    }

   
    function validateSignIn(username, password) {
        if (!username || !password) {
            alert('Please enter both username and password.');
            return false;
        }
        return true;
    }

   
    function validateSignUp(username, email, password) {
        if (!username || !email || !password) {
            alert('Please fill out all fields.');
            return false;
        }
       
        return true;
    }
});

