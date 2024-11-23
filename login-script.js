function forgotPassword() {
    alert('Redirecting to password reset page.');
    window.open('signup-index.html','_blank');
}

document.addEventListener('DOMContentLoaded', function() {
    var loginButton = document.getElementById('loginBtn');
    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        var userIdValue = document.getElementById('userId').value;
        var passwordValue = document.getElementById('password').value;
        var correctUserId = "CodeCraft";
        var correctPassword = "password";
        if (userIdValue === correctUserId && passwordValue === correctPassword) {
            window.location.href = 'profile-index.html'; 
        } else {
            alert('Wrong username or password.');
        }
    });
});