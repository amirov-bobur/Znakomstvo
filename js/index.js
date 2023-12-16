//Elements
const forgotPasswordModal = document.getElementById("forget-password-modal");

const forgotPasswordBtn = document.getElementById("forget-password-btn");

const chp = document.getElementById("chp");

forgotPasswordBtn.addEventListener("click", () => {
    forgotPasswordModal.classList.toggle("open");
});

//Event Listeners
forgotPasswordModal.addEventListener("click", (e) => {
    if (e.target.classList.contains("forget-password-modal")) {
        forgotPasswordModal.classList.remove("open");
    }
});

chp.addEventListener("click", () => { forgotPasswordModal.classList.remove("open"); })