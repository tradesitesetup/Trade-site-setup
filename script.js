// Modal functionality
const modal = document.getElementById("contactModal");
const btn = document.getElementById("contactBtn");
const span = document.querySelector(".close");
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
btn.onclick = () => modal.style.display = "block";
span.onclick = () => modal.style.display = "none";
window.onclick = e => { if(e.target==modal) modal.style.display="none"; }
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    try {
        const response = await fetch("https://formspree.io/f/your-form-id", {
            method:"POST", body:formData, headers:{'Accept':'application/json'}
        });
        if(response.ok){formMessage.innerText="Thank you! Your message has been sent.";form.reset();}
        else{formMessage.innerText="Oops! Something went wrong.";}
    } catch(error){formMessage.innerText="Oops! Something went wrong.";}
});