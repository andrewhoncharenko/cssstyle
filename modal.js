window.addEventListener("load", function() {
    const buttons = document.querySelectorAll(".plan .button");
    const backdrop = document.querySelector(".backdrop");
    const noButton = document.querySelector(".modal__action--negative");
    const menuButton = document.querySelector(".toggle-button");

    backdrop.addEventListener("click", closeModal);
    if(noButton) {
        noButton.addEventListener("click", closeModal);
    }
    console.log(menuButton);
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
}

function closeModal() {
    const modal = document.querySelector(".modal");

    if(modal) {
        modal.classList.add("close");
    }
    closeMenu();
}

function showMenu() {
    const backdrop = document.querySelector(".backdrop");
    const menu = document.querySelector(".mobile-nav");

    backdrop.classList.remove("close");
    menu.classList.remove("close");
}

function closeMenu() {
    const backdrop = document.querySelector(".backdrop");
    const menu = document.querySelector(".mobile-nav");

    backdrop.classList.add("close");
    menu.classList.add("close");
}