document.addEventListener("DOMContentLoaded", function () {
    const character = document.querySelector(".character");
    let jump = false;
    let jumpCount = 0;

    function jumpUp() {
        if (jumpCount < 15) {
            jumpCount++;
            let position = 150 - 10 * jumpCount;
            character.style.bottom = position + "px";
            requestAnimationFrame(jumpUp);
        } else {
            jumpDown();
        }
    }

    function jumpDown() {
        if (jumpCount > 0) {
            jumpCount--;
            let position = 150 - 10 * jumpCount;
            character.style.bottom = position + "px";
            requestAnimationFrame(jumpDown);
        } else {
            jump = false;
        }
    }

    function handleKeyPress(event) {
        if (event.keyCode === 32 && !jump) {
            jump = true;
            jumpUp();
        }
    }

    document.addEventListener("keydown", handleKeyPress);
});
