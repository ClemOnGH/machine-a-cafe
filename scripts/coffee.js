let coffeeMachine = {
    isOn: false,
    launchButtonDisabled: false,
    filterFill: 0,
    containerFill: 0,
    isContainerFull: false,
    launchMadCounter: 0,
};
const terminal = document.getElementById("actualTerminal");

function turnOn() {
    if (coffeeMachine.isOn === false && coffeeMachine.launchButtonDisabled === false) {
        terminal.innerHTML += `> La machine est éteinte. Allumage en cours...<br>`;
        console.log(terminal.parentElement.querySelector(".interactive-button"));
        terminal.parentElement.querySelector(".interactive-button").textContent = "ÉTEINDRE CAFETIÈRE";
        setTimeout(() => {
            terminal.innerHTML += `> La machine est allumée. Veuillez remplir le filtre avant de vous en servir.<br>`;
            coffeeMachine.isOn = true;
        }, 3000);
        return;
    } else if (coffeeMachine.launchButtonDisabled === true) {
        return;
    } else {
        terminal.innerHTML += `> La machine est déjà allumée. <br>`;
        coffeeMachine.launchMadCounter++;
    }

    if (coffeeMachine.launchMadCounter >= 5) {
        terminal.innerHTML += `> ARRÊTE D'APPUYER, T'ES CHIANT !<br>`;
        coffeeMachine.launchButtonDisabled = true;
        return;
    }
}

function checkIfEmpty() {
    if (coffeeMachine.filterFill == 0 && coffeeMachine.filterFill < 100) {
        terminal.innerHTML += `> Le filtre est vide. Dépôt de café dans le filtre en cours...<br>`;
        setTimeout(() => {
            coffeeMachine.filterFill += 100;
            terminal.innerHTML += `> Le filtre est plein. Vous pouvez lancer la machine.${coffeeMachine.filterFill}<br>`;
        }, 1500);
        return;
    } else if (coffeeMachine.filterFill == 100) {
        terminal.innerHTML += `> Le filtre est déjà plein. Merci de ne plus appuyer sur ce bouton sauf en cas de réel besoin.<br>`;
        coffeeMachine.filterMadCounter++;
        return;
    } else if (coffeeMachine.filterFill == 100 && coffeeMachine.filterMadCounter > 5) {
        terminal.innerHTML += `> C'EST PLEIN, PAS BESOIN DE LE BOURRER NON PLUS !<br>`;
        return;
    } else {
        return;
    }
}

function emptyFilter() {
    if (coffeeMachine.filterFill == 0) {
        terminal.innerHTML += `> Le filtre est déjà vide. Veuillez le remplir.<br>`;
        return;
    } else {
        terminal.innerHTML += `> Le filtre a été vidé. Insertion d'un nouveau filtre...<br>`;
        setTimeout(() => {
            coffeeMachine.filterFill = 0;
            terminal.innerHTML += `> Un nouveau filtre a été inséré.${coffeeMachine.filterFill}<br>`;
        });
        return;
    }
}

function makeCoffee() {
    if (coffeeMachine.filterFill >= 0 && coffeeMachine.filterFill <= 20) {
        terminal.innerHTML += `> Il n'y a plus assez de café dans le filtre. Veuillez en remettre pour pouvoir préparer un café.${coffeeMachine.filterFill}<br>`;
        return;
    } else if (coffeeMachine.filterFill >= 20 && coffeeMachine.containerFill < 20) {
        terminal.innerHTML += `> Il n'y a pas assez de café dans la cafetière. J'en prépare tout de suite...<br>`;
        setTimeout(() => {
            coffeeMachine.containerFill = coffeeMachine.containerFill + 100;
            coffeeMachine.filterFill = coffeeMachine.filterFill - 20;
            terminal.innerHTML += `> Votre café est prêt !${coffeeMachine.containerFill}<br>`;
        }, 2000);
    } else if (coffeeMachine.containerFill >= 20) {
        terminal.innerHTML += `> Votre café est en préparation...<br>`;
        setTimeout(() => {
            coffeeMachine.containerFill = coffeeMachine.containerFill - 20;
            terminal.innerHTML += `> Votre café est prêt ! ${coffeeMachine.containerFill}<br>`;
        }, 2000);
        return;
    } else {
        return;
    }
}
