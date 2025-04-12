document.addEventListener('DOMContentLoaded', function() {
    generateCaptcha();
  });
  
  function generateCaptcha() {
    const captcha = Math.floor(10000 + Math.random() * 90000).toString();
    document.getElementById('captchaCode').innerText = captcha;
  }
  
  function submitForm(event) {
    event.preventDefault();
    
    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();
    const userCaptchaInput = document.getElementById('captchaInput').value.trim();
    const generatedCaptcha = document.getElementById('captchaCode').innerText;
  
    if (!name) {
      document.getElementById('form-status').innerText = "Please enter your name.";
      return;
    }
  
    if (!email && !phone) {
      document.getElementById('form-status').innerText = "Please enter at least an email or a phone number.";
      return;
    }
  
    if (!message) {
      document.getElementById('form-status').innerText = "Please enter your message.";
      return;
    }
  
    if (!userCaptchaInput) {
      document.getElementById('form-status').innerText = "Please enter the CAPTCHA.";
      return;
    }
  
    if (userCaptchaInput === generatedCaptcha) {
      let alertMessage = `Details sent successfully!\n\nName: ${name}`;
      if (phone) alertMessage += `\nPhone: ${phone}`;
      if (email) alertMessage += `\nEmail: ${email}`;
      alert(alertMessage);
  
      document.getElementById('form-status').innerText = "Thanks! Your message has been sent.";
      event.target.reset();
      generateCaptcha(); // Refresh CAPTCHA after successful submission
    } else {
      document.getElementById('form-status').innerText = "Incorrect CAPTCHA. Please try again.";
      generateCaptcha(); // Refresh CAPTCHA on failure
    }
  }
  