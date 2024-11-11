// Navigation functions
    function toggleMenu() {
      document.getElementById("navMenu").classList.toggle("active");
    }

    function showPage(page) {
      document.querySelectorAll(".page").forEach((section) => {
        section.classList.remove("active");
      });
      document.getElementById(page).classList.add("active");
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

    // Date picker restriction to weekends only
    const appointmentDate = document.getElementById("appointment_date");

    appointmentDate.addEventListener("input", function() {
      const inputDate = new Date(this.value);
      const day = inputDate.getUTCDay();

      // Disable input if not Saturday or Sunday
      if (day !== 6 && day !== 0) {
        alert("Please select a weekend date (Saturday or Sunday).");
        this.value = "";  // Clear the invalid selection
      }
    });
