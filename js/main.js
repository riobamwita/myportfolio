const roles = [
  "land surveyor",
  "GIS specialist",
  "research assistant",
  "web developer",
  "friendly networker",
];

const typingEl = document.getElementById("typingText");

let roleIndex = 0;
let charIndex = 0;
let baseText = "I am a ";
let deleting = false;

function typeLoop() {
  const currentRole = roles[roleIndex];

  if (!deleting) {
    typingEl.textContent = baseText + currentRole.slice(0, charIndex++);
    if (charIndex > currentRole.length) {
      setTimeout(() => deleting = true, 1200);
    }
  } else {
    typingEl.textContent = baseText + currentRole.slice(0, charIndex--);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeLoop, deleting ? 50 : 90);
}

typeLoop();
