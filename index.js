const emailInput = document.getElementById("email");
const subscribeButton = document.getElementById("subscribe");
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const labelContainer = document.querySelector(".email-form-label");
var email = sessionStorage.getItem("email");
const emailConfirmation = document.getElementById("emailConfirmation");
const image = document.getElementById("image");

function validateEmail() {
  if (regex.test(emailInput.value)) {
    sessionStorage.setItem("email", emailInput.value);
    window.location.href = "success.html";
  } else {
    emailInput.classList.add("error");

    const emailError = document.createElement("p");
    emailError.classList.add("error-label");
    emailError.textContent = "Valid email required";
    labelContainer.appendChild(emailError);
  }
}

if (emailConfirmation) {
  emailConfirmation.innerHTML = `A confirmation email has been sent to <span style='font-weight: bold'>${email}</span>. Please open it and click the
        button inside to confirm your subscription.`;
}

if (window.innerWidth < 400) {
  image.src = "assets/images/illustration-sign-up-mobile.svg";
}

window.validateEmail = validateEmail;
