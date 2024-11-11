// Toggle mobile menu
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

// Function to display different pages
function showPage(page) {
  document.querySelectorAll(".page").forEach((section) => {
    section.classList.remove("active");
  });
  document.getElementById(page).classList.add("active");
  // Close mobile menu after selecting a page
  document.getElementById("navMenu").classList.remove("active");
}

// Form submission handling
document.getElementById("bookingForm").addEventListener("submit", async function(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });
  if (response.ok) {
    form.reset();
    document.getElementById("confirmationMessage").style.display = "block";
  } else {
    alert("Oops! There was a problem submitting your form.");
  }
});
