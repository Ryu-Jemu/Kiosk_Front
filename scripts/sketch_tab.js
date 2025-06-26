document.addEventListener("DOMContentLoaded", () => {
  const current = document.querySelector(".tab.active");
  const indicator = document.getElementById("tab-indicator");

  if (current && indicator) {
    const rect = current.getBoundingClientRect();
    const containerRect = current.parentElement.getBoundingClientRect();
    const left = rect.left - containerRect.left;
    const width = rect.width;
    const horizontalPadding = 40;

    indicator.style.left = `${left - horizontalPadding}px`;
    indicator.style.width = `${width + horizontalPadding * 2}px`;
  }
});

// 날짜와 시간 갱신
function updateDateTime() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const hh = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');

  document.getElementById("current-date").textContent = `${yyyy}.${mm}.${dd}`;
  document.getElementById("current-time").textContent = `${hh}:${min}`;
}

// D-Day 계산 (예시: 다음 경기일이 2025년 6월 30일)
function updateCountdown() {
  const nextRace = new Date("2025-06-30");
  const today = new Date();
  const diff = Math.ceil((nextRace - today) / (1000 * 60 * 60 * 24));
  document.getElementById("countdown-timer").textContent = `D-${diff}`;
}

// 실행
document.addEventListener("DOMContentLoaded", () => {
  // 기존 tab indicator 계산 코드...

  updateDateTime();
  updateCountdown();

  // 매 1분마다 시간 갱신
  setInterval(updateDateTime, 60 * 1000);
});