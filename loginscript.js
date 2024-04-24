// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
// import { getDatabase, ref, get, set, child } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

// // Your web app's Firebase configuration
//     const firebaseConfig = {
//         apiKey: "AIzaSyDIiQLrZ2mVEbPqMox3pqEWLSoHbttorUE",
//         authDomain: "recipeviewer-5172f.firebaseapp.com",
//         projectId: "recipeviewer-5172f",
//         storageBucket: "recipeviewer-5172f.appspot.com",
//         messagingSenderId: "977717386309",
//         appId: "1:977717386309:web:2d3dc61152a096b90f172c"
//     };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);

// document.getElementById('signup-submit').addEventListener('click', function(event){
//     set(ref(db, "user/" + document.getElementById('signup-username').value)), {
//        UserName: document.getElementById('signup-username').value,
//        Email: document.getElementById('signup-email').value,
//        Password: document.getElementById('signup-password').value
//     }
// })

let usersData = [];

if(localStorage.getItem('usersData')) {
    usersData = JSON.parse(localStorage.getItem('usersData'));
}

function signUp(username, email, password) {
    const existingUser = usersData.find(user => user.username === username);
    if(existingUser) {
        alert("Username already exists. Please choose a different one.");
        return;
    }
    alert("Successfully signed up. now you can login.");
    const newUser = { username, email, password, favRecipeData: [] };
    usersData.push(newUser);
    localStorage.setItem('usersData', JSON.stringify(usersData));
}

function login(username, password) {
    const user = usersData.find(user => user.username === username && user.password === password);
    if(user) {
        alert("Login successful!");
        currentUser = user
        currentUser.favRecipeData = currentUser.favRecipeData || []
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'home.html';
    } else {
        alert("Please sign up first or check your credentials.");
    }
}

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = this.elements['username'].value;
    const email = this.elements['email'].value;
    const password = this.elements['password'].value;
    signUp(username, email, password);
    this.reset();
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = this.elements['username'].value;
    const password = this.elements['password'].value;
    login(username, password);
    this.reset();
});
