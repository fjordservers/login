const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Marina" && password === "Marina2@23") {
        window.location.href = "https://fjordservers.com";
    } if (username === "admin" && password === "admin") {
        window.location.href = "https://fjordservers.com";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
