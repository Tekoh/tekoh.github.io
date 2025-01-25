function NavMode__Mobile() {
  var x = document.getElementById("MyNavBar-Container");
  if (x.className === "NavBar-Container") {
    x.className += " mobile";
  } else {
    x.className = "NavBar-Container";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const subscribeButton = document.getElementById('subscribeButton');
  const overlay = document.getElementById('Portfolio-Contacts__Form--Popup');
  const closeButton = document.getElementById('closeButton');
  const subscribeForm = document.getElementById('subscribeForm');
  subscribeButton.addEventListener('click', () => {
    overlay.classList.add('active'); 
  });
  closeButton.addEventListener('click', () => {
    overlay.classList.remove('active'); 
  });
  subscribeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for subscribing!');
    overlay.classList.remove('active'); 
  });
});
