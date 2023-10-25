// Fonction pour démarrer le compte à rebours
function startCountdown(seconds) {
    const userAction = event.target.textContent;
    const countdownDisplay = document.getElementById("countdown-display");
    const endTimeDisplay = document.getElementById("end-time-display");

    // Calculer l'heure d'arrêt
    const now = new Date();
    const endTime = new Date(now.getTime() + seconds * 1000);

    // Afficher l'action de l'utilisateur, le temps restant et l'heure d'arrêt
    document.getElementById("user-action-display").textContent = userAction;
    countdownDisplay.textContent = formatTime(seconds);
    endTimeDisplay.textContent = endTime.toLocaleTimeString();

    // Définir l'intervalle pour mettre à jour le compte à rebours
    const interval = setInterval(function () {
        seconds--;
        countdownDisplay.textContent = formatTime(seconds);
        if (seconds <= 0) {
            clearInterval(interval);
            countdownDisplay.textContent = "00:00:00";
        }
    }, 1000);
}

// Fonction pour démarrer le compte à rebours personnalisé
function startCustomCountdown() {
    const userMinutes = parseInt(document.getElementById("user-minutes").value);
    if (isNaN(userMinutes) || userMinutes <= 0) {
        alert("Veuillez entrer un nombre de minutes valide.");
        return;
    }

    startCountdown(userMinutes * 60); // Convertir les minutes en secondes
}

// Fonction pour formater le temps en HH:MM:SS
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

// Écouter les clics sur les boutons de compte à rebours
document.getElementById("countdown-20s").addEventListener("click", () => startCountdown(20));
document.getElementById("countdown-cappucino").addEventListener("click", () => startCountdown(5 * 60));
document.getElementById("countdown-tea").addEventListener("click", () => startCountdown(15 * 60));
document.getElementById("countdown-breakfast").addEventListener("click", () => startCountdown(20 * 60));
document.getElementById("countdown-lunch").addEventListener("click", () => startCountdown(30 * 60));

// L'evenement de la touche entre
const recup_input = document.getElementById('user-minutes');
recup_input.addEventListener('keydown', function(e){
    if (e.key === 'Enter') {
        const enterminute = parseFloat(recup_input.value);
        if (!isNaN(enterminute)) {
            startCountdown(enterminute, true);
        }
    }
});
