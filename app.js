// Sign-up Function 
function signUp() {
    var userName = document.getElementById("userName").value; 
    var s_email = document.getElementById('s-email').value;
    var s_password = document.getElementById("s-password").value;
    var s_c_password = document.getElementById('s-c-password').value;

    if (!userName || !s_email || !s_password || !s_c_password) {
        alert("Kindly fill all fields");
        return;
    }

    if (s_password !== s_c_password) {
        alert("Passwords do not match");
        return;
    }

    if (localStorage.getItem(userName)) {
        alert("UserName already exists");
        return;
    }

    localStorage.setItem(userName, s_password);
    alert('Signup successful! Congrats');

    document.getElementById('userName').value = '';
    document.getElementById('s-email').value = '';
    document.getElementById('s-password').value = '';
    document.getElementById('s-c-password').value = '';
    window.location.href = 'login.html';
}

// Login Function
function login() {
    var l_name = document.getElementById("l-Name").value;
    var l_email = document.getElementById("l-email").value;
    var l_password = document.getElementById("l-password").value;

    if (!l_name || !l_email || !l_password) {
        alert("Kindly fill all fields");
        return;
    }

    var storedPassword = localStorage.getItem(l_name);
    if (storedPassword === l_password) {
        alert("Login Successful");
        window.location.href = 'karban.html';
    } else {
        alert("Invalid userName or password");
    }

    document.getElementById("l-Name").value = "";
    document.getElementById("l-email").value = "";
    document.getElementById("l-password").value = "";
}

function facebooklogin(){
    alert("The Facebook Login Function is currently unavailable");
}
function goglelogin(){
    alert("The Google Login Function is currently unavailable");
}


