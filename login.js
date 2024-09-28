document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var password = document.getElementById('password').value;

    if (password === '01020333134') {
        window.location.href = 'cv.html';  // Redirect to CV page if password is correct
    } else {
        document.getElementById('error-message').style.display = 'block';  // Show error message if password is incorrect
    }
});
