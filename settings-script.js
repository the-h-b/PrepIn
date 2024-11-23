document.getElementById('remove-picture').addEventListener('click', function() {
    var placeholderPath = 'placeholder.png';
    document.querySelector('.profile-picture img').setAttribute('src', placeholderPath);
  });