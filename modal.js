

window.addEventListener("load", function() {
    const buttons = document.querySelectorAll(".plan .button");
    const backdrop = document.querySelector(".backdrop");
    const noButton = document.querySelector(".modal__action--negative");
    const menuButton = document.querySelector(".toggle-button");

    backdrop.addEventListener("click", closeModal);
    if(noButton) {
        noButton.addEventListener("click", closeModal);
    }
    menuButton.addEventListener("click", showMenu);
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", confirmSelectPlanModal);
    }
});

function confirmSelectPlanModal() {
    const backdrop = document.querySelector(".backdrop");
    const modal = document.querySelector(".modal");

    backdrop.classList.remove("close");
    modal.classList.remove("close");
    modal.classList.add("open");
}

function closeModal() {
    const modal = document.querySelector(".modal");

    if(modal) {
        modal.classList.remove("open");
    }
    closeMenu();
}

function showMenu() {
    const backdrop = document.querySelector(".backdrop");
    const menu = document.querySelector(".mobile-nav");

    backdrop.classList.remove("close");
    menu.classList.remove("close");
    setTimeout(() => {
        menu.classList.add("menuopen");
    }, 10);
}

function closeMenu() {
    const backdrop = document.querySelector(".backdrop");
    const menu = document.querySelector(".mobile-nav");

    backdrop.classList.add("close");
    menu.classList.remove("menuopen");
    setTimeout(() => {
        menu.classList.add("close");
    }, 500);
}