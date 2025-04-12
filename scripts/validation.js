let generatedCaptcha = "";

document.addEventListener('DOMContentLoaded', function () {
  generateCaptcha();
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  document.getElementById("message").addEventListener("input", updateCharCount);
});

function generateCaptcha() {
  const captcha = Math.floor(10000 + Math.random() * 90000).toString(); // 5-digit number
  generatedCaptcha = captcha;
  document.getElementById("captchaCode").innerText = captcha;
}

function validatePhoneNumber(phoneNumber) {
  const pattern = /^[6-9][0-9]{9}$/;
  return pattern.test(phoneNumber);
}

function updateCharCount() {
  const message = document.getElementById("message");
  const charCountMsg = document.getElementById("charCountMsg");
  const remaining = 300 - message.value.length;
  charCountMsg.textContent = `${remaining} characters remaining`;
}

function submitForm(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const message = form.message.value.trim();
  const captchaInput = document.getElementById("captchaInput").value.trim();
  const statusMsg = document.getElementById("form-status");

  if (!name || !message) {
    statusMsg.textContent = "Please fill in all required fields.";
    statusMsg.style.color = "red";
    return;
  }

  if (!email && !phone) {
    statusMsg.textContent = "Please provide either an email address or a phone number.";
    statusMsg.style.color = "red";
    return;
  }

  if (phone && !validatePhoneNumber(phone)) {
    statusMsg.textContent = "Phone number must be 10 digits starting with 6, 7, 8, or 9.";
    statusMsg.style.color = "red";
    return;
  }

  if (captchaInput !== generatedCaptcha) {
    statusMsg.textContent = "Incorrect CAPTCHA. Please try again.";
    statusMsg.style.color = "red";
    generateCaptcha();
    return;
  }

  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
  })
    .then(() => {
      form.reset();
      updateCharCount();
      generateCaptcha();
      statusMsg.textContent = "Data sent successfully!";
      statusMsg.style.color = "green";
    })
    .catch(() => {
      statusMsg.textContent = "There was an error. Please try again.";
      statusMsg.style.color = "red";
    });
}
