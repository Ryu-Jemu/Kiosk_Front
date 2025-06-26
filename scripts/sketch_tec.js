document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    const overlayTitle = document.getElementById("overlay-title");
    const overlayDesc = document.getElementById("overlay-desc");
    const overlayHint = document.getElementById("overlay-hint");
    const overlayImage = document.getElementById("overlay-image");
  
    const techData = {
      aero: {
        title: "공기역학",
        desc: `F1 차는 다운포스를 극대화하여<br> 고속 주행 중에도 안정성을 유지합니다.<br><br>
  윙과 디퓨저, 바람 통로 등 공기 흐름을<br> 제어하여 접지력을 높입니다.`
      },
      chassis: {
        title: "섀시 / 구조물",
        desc: `탄소섬유로 제작된 모노코크 섀시는<br> 경량이면서 충돌 안전성이 뛰어납니다.<br><br>
  드라이버 보호를 최우선으로 설계되어 있습니다.`
      },
      tire: {
        title: "타이어",
        desc: `다양한 컴파운드와 전략적 선택이 경기 결과를 좌우합니다.<br><br>
  연료 탑재량 및 주행 온도에 따라<br> 적절한 타이어 선택이 중요합니다.`
      },
      power: {
        title: "파워 유닛",
        desc: `1.6리터 V6 터보 하이브리드 엔진은<br>
  전기 모터와 내연기관이 결합된 고효율 유닛입니다.`
      },
      fuel: {
        title: "연료 / 윤활유",
        desc: `최적화된 연료와 윤활유는 엔진 마찰을<br> 줄이고 출력과 효율을 높입니다.<br><br>
  친환경 연료도 지속적으로 연구 중입니다.`
      },
      data: {
        title: "전자제어 / 데이터",
        desc: `수천 개의 센서가 차량 데이터를 수집하여<br>
  실시간으로 전략 및 차량 제어에 반영됩니다.<br><br>
  AI와 머신러닝 기술도 적극 활용됩니다.`
      }
    };
  
    const cards = document.querySelectorAll(".tech-card");
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const key = card.getAttribute("data-key");
        if (techData[key]) {
          overlayTitle.textContent = techData[key].title;
          overlayDesc.innerHTML = techData[key].desc;
          overlayImage.src = `images/tec-${key}.jpeg`;  // 이미지 경로
          overlayImage.alt = techData[key].title;
          overlayHint.textContent = "(종료하려면 아무 곳이나 누르세요)";
          overlay.classList.add("show");
        }
      });
    });
  
    overlay.addEventListener("click", () => {
      overlay.classList.remove("show");
    });
  });