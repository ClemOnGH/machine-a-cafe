const div = document.getElementById("terminal-output");

function autoScroll() {
    const div = document.getElementById("terminal-output");

    setTimeout(() => {
        if (window.matchMedia("(max-width: 905px)").matches) {
            div.classList.remove("large-terminal-output");
            div.classList.add("mobile-terminal-output");
        } else {
            div.classList.remove("mobile-terminal-output");
            div.classList.add("large-terminal-output");
        }
    }, 1000);
    div.scrollTop = div.scrollHeight;
}

function randomBits() {
    const bit = Math.random() > 0.5 ? "0" : "1";
    div.textContent += bit;

    if (div.textContent.length > 1586) {
        div.textContent = "";
    }
    autoScroll();

    setTimeout(randomBits, 5);
}
