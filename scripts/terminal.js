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
    ["[CHECK] Neural Interface...", 0.8, 100],
    ["[CHECK] Cyberware connection stability...", 0.8, 98],
    ["[CHECK] Body system integrity...", 0.8, 100],
    ["[CHECK] Motor functions...", 0.8, 17],
    ["[CHECK] Visual enhancements...", 0.8, 100],
    ["[CHECK] Auditory implants...", 0.8, 100],
    ["[CHECK] Nano-skin healing...", 0.8, 40],
    ["[CHECK] Immune system augmentation...", 0.8, 0],
    ["[CHECK] Pain suppression implants...", 0.8, 15],
    ["", 0.5],
    ["[WARN] Checking neural systems...", 0.1],
    ["[CHECK] Neurosystem calibration...", 0.8, 100],
    ["[CHECK] Processor core... ", 0.8, 100],
    ["[CHECK] Synaptics response...", 0.8, 100],
    ["[CHECK] Neurotransmitter efficiency...", 0.8, 100],
    ["<span class='terminal-info'>[INFO] Neural systems check complete.</span>", 0.1],
    ["", 0.5],
    ["[WARN] Checking energy systems...", 0.1],
    ["[LOADING] Battery charge:", 2, 100],
    ["<span class='terminal-info'>[INFO] Battery fully charged!</span>", 0.1],
    ["[CHECK] Power cell efficiency...", 0.2],
    ["[CHECK] Biofuel converter...", 0.2],
    ["[CHECK] Emergency backup power...", 0.2],
    ["<span class='terminal-info'>[INFO] Energy systems stable.</span>", 0.1],
    ["", 2],
    ["<span class='terminal-cya'>What's it gonna be, V ? Blaze of glory or quiet life ? - Dexter DeShawn</span>", 15],
    ["<span class='terminal-cya'>Wake the fuck up, Samurai! We have a city to burn. - Johnny Silverhand</span>", 15],
    ["<span class='terminal-cya'>What is free often proves most costly. - Takemura</span>", 15],
    ["<span class='terminal-cya'>Haven't forgotten a thing. Never will. - Johnny Silverhand (as V)</span>", 15],
    [
        "<span class='terminal-cya'>On behalf of the staff of Independent California Motel, I wish you sweet dreams. - Johnny silverhand</span>",
        15,
    ],
    [
        "<span class='terminal-cya'>I have found that people lie, most often deceiving themselves. Not so the dead... The dead are so very, very loud. And yet, lying is not in their nature. It is so... humbling - to listen to the dead speak. - Saburo Arasaka</span>",
        15,
    ],
    [
        "<span class='terminal-cya'>Test of a person's true value? Death. Facing it, staring it down. You still got a chance to be somebody. - Johnny Silverhand</span>",
        15,
    ],
    [
        "<span class='terminal-cya'>Now, as that old Greek dawg says, life's a banquet - so don't go thirsty, but don't get drunk, either. - Dexter DeShawn</span>",
        15,
    ],
    [
        "<span class='terminal-cya'>You're a dick, you know? - And you're a cunt. Maybe we'll fit together after all. - V & Johnny Silverhand</span>",
        15,
    ],
    [
        "<span class='terminal-cya'>Eh, you get used to it. I just gotta be careful not to pull the pin when I wanna pick my nose. - Ozob</span>",
        15,
    ],
    ["<span class='terminal-cya'>The greatest crimes issue from a desire for excess and not from necessity. - Aristotle</span>", 15],
    ["<span class='terminal-cya'>G'night, Vincent. Today was a good day. - Johnny Silverhand</span>", 15],
    ["<span class='terminal-cya'>Before It All Goes Dark… For One Last Second, I’ll Know I Wasn’t Alone. - Songbird</span>", 15],
    ["<span class='terminal-cya'>I Just Want The World To Know I Was Here. That I Mattered. - V</span>", 15],
    [
        "<span class='terminal-cya'>He Burned Down Half The City Just To Prove He Was Right And Burned The Other Half Just For Fun.</span>",
        15,
    ],
    ["<span class='terminal-cya'></span>", 15],
    ["<span class='terminal-cya'></span>", 15],
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
    const div3 = document.getElementById("terminal-output");

    setTimeout(() => {
        div3.style.boxShadow = "0 0 5px var(--red-06), inset 0 0 5px var(--red-06), 0 0 30px var(--red-02), inset 0 0 30px var(--red-02)";
        div3.style.border = "2px solid var(--red)";
        div2.style.boxShadow = "0 0 5px var(--red-06), inset 0 0 5px var(--red-06), 0 0 30px var(--red-02), inset 0 0 30px var(--red-02)";
        div2.style.border = "2px solid var(--red)";
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

function loadingBar(maxValue, index) {
    const bar = document.getElementById(`bar-n${index}`);
    const value = document.getElementById(`value-n${index}`);

    let i = 0;
    const intervalId = setInterval(() => {
        if (i <= maxValue) {
            bar.style.width = i * 0.5 + "px";
            value.textContent = i + "%";
            i++;
        } else {
            if (maxValue < 100) {
                value.textContent = "TOO LOW";
                value.style.padding = "1px";
                value.style.animation = "dangerBeep linear infinite 0.3s";
            } else {
                value.textContent = "OK";
            }
            clearInterval(intervalId);
        }
    }, 5);
}

let j = 0;
function displayLine(string) {
    const pre = document.getElementById("top-left-1-text");
    if (string[2]) {
        pre.innerHTML += `> ${string[0]} [<div class='loading-bar-bg'><div id='bar-n${j}' class='loading-bar'></div></div>] - <span class='loading-bar-value' id='value-n${j}'></span><br>`;
        loadingBar(string[2], j);
        j++;
    } else {
        pre.innerHTML += "> " + string[0] + "<br>";
    }
}

function displayAllLines() {
    const terminal = document.getElementById("top-left-1-text");
    const box = document.getElementById("terminal-box");
    displayInit();

    setTimeout(() => {
        window.addEventListener("resize", scrollToBottom);
        if (window.matchMedia("(max-width: 905px)").matches) {
            box.classList.add("mobile-terminal_box");
            box.classList.remove("large-terminal_box");
        } else {
            box.classList.add("large-terminal_box");
            box.classList.remove("mobile-terminal_box");
        }

        let i = 0;

        function displayNextLine() {
            if (i < lines.length) {
                displayLine(lines[i]);
                let delay = lines[i][1] * 1000;
                i++;
                scrollToBottom();

                setTimeout(displayNextLine, delay);
            }
        }
        displayNextLine();
    }, 1000);

    setTimeout(() => {
        randomBits();
        document.getElementById("actionButtons").style.display = "block";
    }, 1500);

    setTimeout(() => {
        terminal.innerHTML = "";
    }, 6000);

    setTimeout(() => {
        let i = 0;

        function displayNextLine() {
            if (i < loading.length) {
                displayLine(loading[i]);
                let delay = loading[i][1] * 1000;
                i++;
                scrollToBottom();

                setTimeout(displayNextLine, delay);
            }
        }
        displayNextLine();
    }, 6500);
}
