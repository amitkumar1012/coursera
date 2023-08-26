// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");

// sign_up_btn.addEventListener("click", () => {
//   container.classList.add("sign-up-mode");
// });

// sign_in_btn.addEventListener("click", () => {
//   container.classList.remove("sign-up-mode");
// });


function signup() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirm_password = document.getElementById("confirm-password").value.trim();
    
    // Add your signup validation logic here
    if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        return false;
    }
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        alert("Invalid email address.");
        return false;
    }
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }
    if (password != confirm_password) {
        alert("Passwords do not match.");
        return false;
    }
    
    console.log("Signup successful.");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    
    // Redirect to home page after successful signup
    window.location.href = "index.html";
    
    // Make sure that the page is actually redirecting
    console.log("Redirecting to home page...");
    return true;
}


