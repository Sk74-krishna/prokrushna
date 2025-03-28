let sections =document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll=() => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset =sec.offsetTop - 150;
    let height =sec.offsetHeight;
    let id =sec.getAttribute('id');
    if(top>= offset && top < offset + height){
      navLinks.forEach(Links => {
         Links.classList.remove('active');
         document.querySelector('header nav a[href*='+ id +']').classList.add('active');
     
    });
  }
});
}


document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const submitBtn = this.querySelector('.submit-btn');
  const successMsg = this.querySelector('.success-message');
  
  // Simulate sending message
  submitBtn.innerHTML = 'Sending...';
  submitBtn.disabled = true;
  
  setTimeout(() => {
      submitBtn.innerHTML = 'Sent!';
      successMsg.style.display = 'block';
      this.reset();
      
      setTimeout(() => {
          submitBtn.innerHTML = 'Send Message';
          submitBtn.disabled = false;
          successMsg.style.display = 'none';
      }, 2000);
  }, 1500);
});

// Add floating label animation
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
  input.addEventListener('focus', () => {
      input.style.borderBottomColor = 'white';
  });
  
  input.addEventListener('blur', () => {
      if (!input.value) {
          input.style.borderBottomColor = 'rgba(255, 255, 255, 0.3)';
      }
  });
});

      // Dark Mode Toggle
      const themeToggle = document.getElementById("theme-toggle");
      themeToggle.addEventListener("change", () => {
          document.body.classList.toggle("dark-mode");
          localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
      });
      if (localStorage.getItem("darkMode") === "true") {
          document.body.classList.add("dark-mode");
          themeToggle.checked = true;
      }
