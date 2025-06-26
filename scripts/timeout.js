let timeout;

function resetTimer() {
    clearTimeout(timeout);
    timeout = setTimeout(() =>{
        window.location.href = "index.html";
    }, 50000); // 5000ms = 5s
}

resetTimer();

document.addEventListener("click", resetTimer);