function removePrompt() {
    const button = document.getElementById("launch-prompt-button");
    const promptBar = document.getElementById("dots");
    const promptRequest = document.getElementById("launch-prompt").querySelector("h1");
    let str = promptBar.textContent;

    button.textContent = "";
    button.style.boxShadow = "none";
    button.style.width = "0";
    promptRequest.style.display = "none";
    button.parentElement.style.height = "10%";

    let i = 0;
    const intervalId = setInterval(() => {
        if (i < promptBar.textContent.length) {
            str = str.substring(0, i) + "#" + str.substring(i + 1);
            promptBar.textContent = str;
            i++;
        } else {
            clearInterval(intervalId);
        }
    }, 200);

    setTimeout(() => {
        button.parentElement.querySelector("p").style.display = "none";
        button.parentElement.style.height = "0";
        button.parentElement.style.width = "0";
        button.parentElement.style.border = "none";
        button.parentElement.style.boxShadow = "none";
    }, 3000);

    setTimeout(() => {
        displayAllLines();
    }, 3500);
}
