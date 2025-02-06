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
  goodbye: document.getElementById('goodbyeContainer'),
  
  // Add new memory containers
  memory1: document.getElementById('memory1Container'),
  memory2: document.getElementById('memory2Container'),
  memory3: document.getElementById('memory3Container'),
  memory4: document.getElementById('memory4Container'),
  memory5: document.getElementById('memory5Container'),
  memory6: document.getElementById('memory6Container'),
  memory7: document.getElementById('memory7Container'),
  memory8: document.getElementById('memory8Container'),
  memory9: document.getElementById('memory9Container'),
  memory10: document.getElementById('memory10Container'),
  memory11: document.getElementById('memory11Container')
 
};

// Event listener for all option buttons.
// This listener works for buttons inside both the mainContent and option containers.
document.querySelectorAll('.optionBtn').forEach(btn => {
  btn.addEventListener('click', function() {
    enableAudio();
    
    // Which container should be shown next?
    const option = this.getAttribute('data-option');
    
    // Get the closest container (works for both mainContent and option containers)
    const currentContainer = this.closest('.container, .optionContainer');
    if (currentContainer) {
      currentContainer.style.display = 'none';
    }
    
    // Special handling for the "goodbye" option: stop music and turn page grayscale
    if (option === "goodbye") {
      bgMusic.pause();
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
    // Hide all option containers
    Object.values(optionContainers).forEach(container => {
      container.style.display = 'none';
    });
    // Show the main container
    document.getElementById('mainContent').style.display = 'block';
  });
});
