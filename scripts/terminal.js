lines = [
    ["Initializing terminal session", 1],
    ["Connection established with remote host at 10.54.67.129:8080", 0.1],
    ["Attempting authorization bypass...", 1.2],
    ["Access level [ROOT] granted", 0.1],
    ["Executing script: ./sys_diagnostics.py", 0.25],
    [""],
    ["import sys", 0.05],
    ["from porthack.net import sequencer", 0.05],
    [""],
    ["def override_sequence(address):", 0.05],
    [" sequence = []", 0.05],
    ["   for i in range(0x00, 0xFF):", 0.05],
    ["     sequence.append(hex(i ^ 0x1F))", 0.05],
    ["   return sequence", 0.05],
    [""],
    ["porthack: Memory mapping address @ 0x402A3C7B", 0.5],
    ["porthack: Applying sequence overrides...", 0.8],
    ["porthack: Loading unauthorized modules... [WARNING]", 0.05],
    ["porthack: sequencer ready with {7} warnings", 0.5],
];
loading = [
    ["[WARN] Initializing safe-mode diagnostics...", 0.1],
    ["[CHECK] Boot sequence: v4.7.2", 0.01],
    ["", 0.5],
    ["[CHECK] Current Location: Night City, Corpo Plaza", 0.01],
    ["[CHECK] Language: EN-US", 0.01],
    ["[CHECK] Coordinates: 37.336111, -121.890556", 0.01],
    ["[CHECK] Local IP: 192.168.1.105", 0.01],
    ["[CHECK] Public IP: 203.0.113.15", 0.01],
    ["[CHECK] Hostname: Vyper-Unit-85", 0.01],
    ["[CHECK] Network Status: Connected", 0.01],
    ["[CHECK] Firewall: Active", 0.01],
    ["[CHECK] VPN: Disabled", 0.01],
    ["[CHECK] Proxy: Direct", 0.01],
    ["", 0.5],
    ["[WARN] Checking implants integrity...", 0.1],
    ["[CHECK] Neural Interface... OK", 0.2],
    ["[CHECK] Cyberware connection stability... OK", 0.2],
    ["[CHECK] Body system integrity... OK", 0.2],
    ["[CHECK] Motor functions... OK", 0.2],
    ["[CHECK] Visual enhancements... OK", 0.2],
    ["[CHECK] Auditory implants... OK", 0.2],
    ["[CHECK] Nano-skin healing... OK", 0.2],
    ["[CHECK] Immune system augmentation... OK", 0.2],
    ["[CHECK] Pain suppression implants... OK", 0.2],
    ["", 0.5],
    ["[WARN] Checking neural systems...", 0.1],
    ["[CHECK] Neurosystem calibration... [███████───] 85%", 0.3],
    ["[CHECK] Processor core... ", 0.2],
    ["[CHECK] Synaptics response...", 0.2],
    ["[CHECK] Neurotransmitter efficiency... [████████████████] 100%", 0.3],
    ["<span class='terminal-info'>[INFO] Neural systems check complete.</span>", 0.1],
    ["", 0.5],
    ["[WARN] Checking energy systems...", 0.1],
    ["[LOADING] Battery charge: [──────────] 0%", 0.3],
    ["[LOADING] Battery charge: [█─────────] 10%", 0.3],
    ["[LOADING] Battery charge: [██────────] 20%", 0.3],
    ["[LOADING] Battery charge: [███───────] 30%", 0.3],
    ["[LOADING] Battery charge: [████──────] 40%", 0.3],
    ["[LOADING] Battery charge: [█████─────] 50%", 0.3],
    ["[LOADING] Battery charge: [██████────] 60%", 0.3],
    ["[LOADING] Battery charge: [███████───] 70%", 0.3],
    ["[LOADING] Battery charge: [████████──] 80%", 0.3],
    ["[LOADING] Battery charge: [█████████─] 90%", 0.3],
    ["[LOADING] Battery charge: [██████████] 100%", 0.3],
    ["<span class='terminal-info'>[INFO] Battery fully charged!</span>", 0.1],
    ["[CHECK] Power cell efficiency... OK", 0.2],
    ["[CHECK] Biofuel converter... OK", 0.2],
    ["[CHECK] Emergency backup power... OK", 0.2],
    ["<span class='terminal-info'>[INFO] Energy systems stable.</span>", 0.1],
    ["", 2],
    ["<span class='terminal-cya'>Shutting down host in 3... 2... 1...</span>", 3],
    ["<span class='terminal-cya'>Goodbye Johnny, see you on the other side.</span>", 10],
];

function scrollToBottom() {
    const div = document.getElementById("terminal-box");
    if (window.matchMedia("(max-width: 905px)").matches) {
        div.classList.remove("large-terminal_box");
        div.classList.add("mobile-terminal_box");
    } else {
        div.classList.remove("mobile-terminal_box");
        div.classList.add("large-terminal_box");
    }
    div.scrollTop = div.scrollHeight;
}

function displayInit() {
    const div = document.getElementById("terminal_title");
    const div2 = document.getElementById("terminal-box");

    setTimeout(() => {
        if (window.matchMedia("(max-width: 905px)").matches) {
            div2.classList.remove("large-terminal_box");
            div2.classList.add("mobile-terminal_box");
        } else {
            div2.classList.remove("mobile-terminal_box");
            div2.classList.add("large-terminal_box");
        }

        div2.style.display = "block";
        div2.style.padding = "5px";
        div.style.display = "block";
        div.style.width = "100%";
        div.style.color = "black";
        div.style.backgroundColor = "#ff4e5f";
        div.style.boxShadow = "0 0 5px rgba(255, 78, 95, 0.6), 0 0 30px rgba(255, 78, 95, 0.2)";
    }, 200);

    setTimeout(() => {
        const string = "cafetiere_init.sh - v4.2.7";
        const arr = string.split("");

        let i = 0;
        setInterval(() => {
            if (i < arr.length) {
                div.textContent += arr[i];
                i++;
            } else {
                clearInterval();
            }
        }, 40);
    }, 400);
}

function displayLine(string) {
    const pre = document.getElementById("top-left-1-text");
    pre.innerHTML += "> " + string + "<br>";
}

function displayAllLines() {
    const terminal = document.getElementById("top-left-1-text");
    const box = document.getElementById("terminal-box");
    displayInit();

    setTimeout(() => {
        window.addEventListener("resize", scrollToBottom);
        if (window.matchMedia("(max-width: 905px)").matches) {
            box.classList.add("mobile-terminal_box");
        } else {
            box.classList.add("large-terminal_box");
        }

        let i = 0;

        function displayNextLine() {
            if (i < lines.length) {
                displayLine(lines[i][0]);
                let delay = lines[i][1] * 1000;
                i++;
                scrollToBottom();

                setTimeout(displayNextLine, delay);
            }
        }
        displayNextLine();
    }, 1000);

    setTimeout(() => {
        terminal.innerHTML = "";
    }, 6000);

    setTimeout(() => {
        let i = 0;

        function displayNextLine() {
            if (i < loading.length) {
                displayLine(loading[i][0]);
                let delay = loading[i][1] * 1000;
                i++;
                scrollToBottom();

                setTimeout(displayNextLine, delay);
            }
        }
        displayNextLine();
    }, 6500);

    setTimeout(() => {
        terminal.innerHTML = "";
        box.classList.remove("mobile-terminal_box");
        box.classList.remove("large-terminal_box");
        box.style.border = "none";
        box.style.boxShadow = "none";
    }, 24000);
}
displayAllLines();
