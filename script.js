const modal = document.getElementById("contactModal");
const openBtns = document.querySelectorAll("#openContact, #openContact2");
const closeBtn = document.querySelector(".close-btn");

// OPEN MODAL
openBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

// CLOSE FUNCTIONS
function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// CLOSE BUTTON
closeBtn.addEventListener("click", closeModal);

// CLICK OUTSIDE
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// ESC KEY
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// FORM SUBMISSION
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const status = document.getElementById("formStatus");
  const data = new FormData(e.target);

  try {
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: data,
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      status.textContent = "Thanks! I’ll be in touch shortly.";
      e.target.reset();
    } else {
      status.textContent = "Something went wrong. Please try again.";
    }
  } catch {
    status.textContent = "Network error. Please try again later.";
  }
});
