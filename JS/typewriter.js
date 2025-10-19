// Get the element by ID
const elementEl = document.getElementById("elementEl");
// Store original text once
const originalText = elementEl.innerHTML;

function typeWriter(el, text, speed = 90, delay = 2000) {
    el.innerHTML = ""; // clear text
    let i = 0;

    function typing() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else {
            // After finishing, wait 'delay' ms, then restart
            setTimeout(() => typeWriter(el, text, speed, delay), delay);
        }
    }
    typing();
}

// Start the effect
typeWriter(elementEl, originalText);
