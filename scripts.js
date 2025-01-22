document.addEventListener('DOMContentLoaded', () => {
  const slidesContainer = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slide');
  const yesButton = document.querySelector('.valentine-yes');
  const noButton = document.querySelector('.valentine-no');
  const responseDiv = document.querySelector('.valentine-response');
  const responseText = document.querySelector('.valentine-answer');
  const music = document.getElementById('background-music');
  const button = document.getElementById('play-music');

  let currentIndex = 0;

  if (slides.length > 0) {
    function showSlides() {
      currentIndex = (currentIndex + 1) % slides.length; // Move to the next slide
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`; // Slide horizontally
      setTimeout(showSlides, 4000); // Change slide every 3 seconds
    }

    showSlides(); // Start the slideshow
  } else {
    console.error("No slides found in the slideshow container.");
  }

  yesButton.addEventListener('click', () => {
    responseDiv.classList.remove('hidden');
    responseText.textContent = "You’ve made me the happiest person alive! ❤️";
    yesButton.textContent = "You're My Valentine 💖";
    yesButton.disabled = true;
    noButton.style.display = "none"; // Hide "No" button
  });

  noButton.addEventListener('click', () => {
    responseDiv.classList.remove('hidden');
    responseText.textContent = "Are you sure? 😭 Please reconsider, you’re my everything!";
    noButton.textContent = "I can't say no...";
    noButton.disabled = true;

    // Reset "No" button after a few seconds for fun
    setTimeout(() => {
      noButton.disabled = false;
      noButton.textContent = "No 😢";
    }, 4000);
  });

  playButton.addEventListener('click', () => {
    music.play();
  });

  pauseButton.addEventListener('click', () => {
    music.pause();
  });
  
});
