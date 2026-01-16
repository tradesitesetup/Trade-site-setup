const modal = document.getElementById("contactModal");
const openBtns = document.querySelectorAll("#openContact, #openContact2");
const closeBtn = document.querySelector(".close");

openBtns.forEach(btn => {
  btn.onclick = () => modal.style.display = "block";
});

closeBtn.onclick = () => modal.style.display = "none";

window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};

document.getElementById("contactForm").addEventListener("submit", async e => {
  e.preventDefault();
  const status = document.getElementById("formStatus");
  const data = new FormData(e.target);

  try {
    const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: data,
      headers: { "Accept": "application/json" }
    });

    status.textContent = res.ok
      ? "Message sent successfully."
      : "Something went wrong.";
    if (res.ok) e.target.reset();
  } catch {
    status.textContent = "Network error.";
  }
});
