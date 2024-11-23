function checkWordCount() {
    const explanation = document.getElementById('explanation').value;
    const words = explanation.trim().split(/\s+/);
    const wordCount = words.length;
    const warning = document.getElementById('warning');
    const submitBtn = document.getElementById('submitBtn');

    if (wordCount >= 50) {
        warning.classList.remove('red');
        warning.classList.add('green');
        warning.textContent = 'Good to go!';
        submitBtn.disabled = false;
    } else {
        warning.classList.remove('green');
        warning.classList.add('red');
        warning.textContent = `* Explanation should have at least 50 words. Current count: ${wordCount}`;
        submitBtn.disabled = true;
    }
}

function runCode() {
    alert('Run Code functionality is currently a placeholder!');
}

function debugCode() {
    alert('Debug functionality is currently a placeholder!');
}

// Disable copy-paste on the entire page
document.addEventListener('copy', (e) => {
    e.preventDefault();
    alert("Copy function is disabled on this page.");
});

document.addEventListener('paste', (e) => {
    e.preventDefault();
    alert("Paste function is disabled on this page.");
});
