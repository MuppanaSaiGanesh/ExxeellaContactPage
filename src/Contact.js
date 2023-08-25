function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captcha += characters.charAt(randomIndex);
    }
    return captcha;
  }
              
  const captchaInput = document.getElementById('captcha-input');
  const captchaText = document.getElementById('captcha-text');
  const refreshButton = document.getElementById('refresh');
              
  function refreshCaptcha() {
    const newCaptcha = generateCaptcha();
    captchaText.textContent = newCaptcha;
  }
              
  refreshButton.addEventListener('click', refreshCaptcha);
              
  // Initial captcha generation
  refreshCaptcha();
  
  document.addEventListener("DOMContentLoaded", function () {
    const enrollButton = document.getElementById("enrollButton");
    const overlay = document.getElementById("overlay");
    const registrationModal = document.getElementById("registrationModal");
    const closeModalButton = document.getElementById("closeModalButton");
    const registrationForm = document.querySelector(".registration-form"); // Add a class to your registration form container
  
    enrollButton.addEventListener("click", function () {
      overlay.classList.remove("hidden");
      registrationModal.classList.remove("hidden");
      document.body.style.overflow = "hidden"; // Disable scrolling
          
      // Clone and append the registration form to the modal
      const clonedForm = registrationForm.cloneNode(true);
      clonedForm.classList.remove("hidden"); // Ensure the form is visible
      registrationModal.querySelector(".modal-content").appendChild(clonedForm);
    });
  
    closeModalButton.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
  
    function closeModal() {
      overlay.classList.add("hidden");
      registrationModal.classList.add("hidden");
      document.body.style.overflow = "auto"; // Enable scrolling
          
      // Remove the cloned registration form from the modal
      const clonedForm = registrationModal.querySelector(".registration-form");
      if (clonedForm) {
        clonedForm.remove();
      }
    }
  });
  function openWhatsApp() {
    const phoneNumber = "+919888196666";
    const message = "Hello! I'd like to get in touch with EXXEELLA.";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }