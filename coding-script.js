function handleStatusClick(status) {
    switch (status) {
        case 'attempt':
            alert('Challenge attempted!');
            break;
        case 'submitted':
        case 'cleared':
        case 'incorrect':
            alert('Question already attempted!');
            break;
        default:
            console.error('Unknown status:', status);
    }
  }
  
  // Function to dynamically add events with images
  document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.carousel-goto-prev');
    const nextButton = document.querySelector('.carousel-goto-next');
    const carouselContainer = document.querySelector('.carousel-track-container');
    
    const itemWidth = document.querySelector('.carousel-item').offsetWidth + 20; // Add margin
  
    // Current position in the scroll (initially 0)
    let currentPosition = 0;
  
    // Function to scroll the carousel
    function moveCarousel(direction) {
        const maxScroll = track.scrollWidth - carouselContainer.offsetWidth;
  
        if (direction === 'next') {
            currentPosition = Math.min(currentPosition + itemWidth, maxScroll);
        } else {
            currentPosition = Math.max(currentPosition - itemWidth, 0);
        }
  
        track.style.transform = translateX(-${currentPosition}px);
    }
  
    // Event listeners for buttons
    nextButton.addEventListener('click', function(e) {
        e.preventDefault();
        moveCarousel('next');
    });
  
    prevButton.addEventListener('click', function(e) {
        e.preventDefault();
        moveCarousel('prev');
    });
  });