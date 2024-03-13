function toggleIcons(inputElement) {
    const eye = document.getElementById("Eye");
    const eyeslas = document.getElementById("Eyeslas");

    if (inputElement.value.trim() !== "") {
      eye.style.display = "none";
      eyeslas.style.display = "block";
    } else {
      eye.style.display = "none";
      eyeslas.style.display = "block";
    }
  }

  const passwordInput = document.getElementById("passwordInput");
  const eyeslas = document.getElementById("Eyeslas");
  const eye = document.getElementById("Eye");

  eye.addEventListener("click", () => {
    togglePasswordVisibility();
  });

  eyeslas.addEventListener("click", () => {
    togglePasswordVisibility();
  });

  function togglePasswordVisibility() {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eye.style.display = "block";
      eyeslas.style.display = "none";
    } else {
      passwordInput.type = "password";
      eye.style.display = "none";
      eyeslas.style.display = "block";
    }
  }