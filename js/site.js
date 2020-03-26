const extraButton = document.querySelector(".buttons .expand");
if (extraButton) {
  extraButton.addEventListener("click", function() {
    const extraMenu = document.querySelector(".buttons");
    extraMenu.classList.toggle("active");
  });
}
