//Elements
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const chatBtns = document.querySelectorAll(".chat-btn");
const chatModal = document.querySelectorAll(".chat-m");


//Event Listeners
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle('active');
});

chatBtns.forEach((item) => {
  item.addEventListener("click", () => {
    chatModal.forEach(el=> {
      el.classList.toggle("open");
    })
  })
});
chatModal.forEach(item => {
  item.addEventListener("click", e => {
    if (e.target.classList.contains("chat-m")){
      chatModal.forEach(el => {
        el.classList.remove("open")
      })
    }
  })
})