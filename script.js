document.getElementById('menu').onclick=()=>document.getElementById('nav').classList.toggle('open');document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>document.getElementById('nav').classList.remove('open'));document.getElementById('form').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);const body=encodeURIComponent(`Name: ${f.get('name')}\nCompany: ${f.get('company')}\nEmail: ${f.get('email')}\nCountry: ${f.get('country')}\nService: ${f.get('service')}\n\nMessage:\n${f.get('message')}`);location.href=`mailto:khan.digitalexchange@gmail.com?subject=${encodeURIComponent('New business inquiry — KHAN Consulting')}&body=${body}`;document.getElementById('status').textContent='Opening your email app…';};
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const button = form.querySelector("button[type='submit']");
    const originalText = button ? button.textContent : "";

    if (button) {
      button.disabled = true;
      button.textContent = "SENDING...";
    }

    const formData = new FormData(form);

    formData.append("access_key", "ddd1793e-37f9-40a1-94e4-319bf9170b36");
    formData.append("subject", "New business inquiry — KHAN Consulting");
    formData.append("from_name", "KHAN Consulting Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        alert("Thank you! Your inquiry has been sent successfully.");
        form.reset();
      } else {
        alert("Unable to send your inquiry. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your internet connection and try again.");
    }

    if (button) {
      button.disabled = false;
      button.textContent = originalText;
    }
  });
});
