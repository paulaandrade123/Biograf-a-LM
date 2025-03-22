document.addEventListener("DOMContentLoaded", function() {
    const updateButtons = document.querySelectorAll(".updateBio");

    updateButtons.forEach(button => {
        button.addEventListener("click", function() {
            const bioInput = this.previousElementSibling;
            const bioText = this.parentElement.querySelector(".bio");
            if (bioInput.value.trim() !== "") {
                bioText.innerText = bioInput.value;
                bioInput.value = "";
            }
        });
    });
});

