const contactModal = document.getElementById("contactModal");
const pricingModal = document.getElementById("pricingModal");
const openContactBtns = document.querySelectorAll("#openContact, #openContact2");
const openPricingBtn = document.getElementById("openPricing");
const closeBtns = document.querySelectorAll(".close-btn");

// OPEN CONTACT MODAL
openContactBtns.forEach(btn => btn.addEventListener("click", () => {
  contactModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}));

// OPEN PRICING MODAL
openPricingBtn.addEventListener("click", () => {
  pricingModal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

// CLOSE MODALS
closeBtns.forEach(btn => btn.addEventListener("click", () => {
  contactModal.style.display = "none";
  pricingModal.style.display = "none";
  document.body.style.overflow = "auto";
}));

[contactModal, pricingModal].forEach(modal => {
  modal.addEventListener("click", e => { if(e.target===modal) { modal.style.display="none"; document.body.style.overflow="auto"; } });
});

document.addEventListener("keydown", e => { 
  if(e.key==="Escape") {
    contactModal.style.display="none"; 
    pricingModal.style.display="none"; 
    document.body.style.overflow="auto";
  }
});

// FORM SUBMISSION
document.getElementById("contactForm").addEventListener("submit", async e=>{
  e.preventDefault();
  const status = document.getElementById("formStatus");
  const data = new FormData(e.target);
  try{
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", { method:"POST", body:data, headers:{"Accept":"application/json"}});
    if(response.ok){ 
      status.textContent="Thanks! I’ll be in touch shortly."; 
      e.target.reset(); 
    } else { 
      status.textContent="Something went wrong. Please try again."; 
    }
  } catch { status.textContent="Network error. Please try again later."; }
});
