// Enable audio on first interaction
const bgMusic = document.getElementById('bgMusic');
function enableAudio() {
  if (bgMusic.muted) {
    bgMusic.muted = false;
    bgMusic.play().catch(error => console.log('Error playing audio:', error));
  }
}

// Map option keys to their corresponding containers
const optionContainers = {
  next: document.getElementById('nextContainer'),
  nextnext: document.getElementById('nextnextContainer'),
  playful: document.getElementById('playfulContainer'),
  yes: document.getElementById('yesContainer'),
  areYouSure: document.getElementById('areYouSureContainer'),
  goodbye: document.getElementById('goodbyeContainer')
};

// Event listener for all option buttons.
// This listener works for buttons inside both the mainContent and option containers.
document.querySelectorAll('.optionBtn').forEach(btn => {
  btn.addEventListener('click', function() {
    enableAudio();
    const option = this.getAttribute('data-option');
    // Get the closest container (works for both mainContent and option containers)
    const currentContainer = this.closest('.container, .optionContainer');
    if (currentContainer) {
      currentContainer.style.display = 'none';
    }
    
    // Special handling for the "goodbye" option:
    if (option === "goodbye") {
      // Stop the music
      bgMusic.pause();
      // Turn everything to black and white by applying a grayscale filter to the body
      document.body.style.filter = "grayscale(100%)";
    }
    
    // Show the corresponding container if it exists
    if (optionContainers[option]) {
      optionContainers[option].style.display = 'block';
    }
  });
});

// Event listener for back buttons to return to the main content.
// It hides all option containers and shows the main container.
document.querySelectorAll('.backBtn').forEach(btn => {
  btn.addEventListener('click', function() {
    // Reset any grayscale effect when going back
    document.body.style.filter = "none";
    Object.values(optionContainers).forEach(container => {
      container.style.display = 'none';
    });
    document.getElementById('mainContent').style.display = 'block';
  });
});
