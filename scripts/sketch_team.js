const teams = [
    {
        name: "McLaren",
        color: "#FF8000",
        logo: "images/logo/logo01.png",
        car: "images/team/team01.webp",
        drivers: ["images/driver/driver01-1.webp", "images/driver/driver01-2.webp"]
    },
    {
        name: "Ferrari",
        color: "#DC0000",
        logo: "images/logo/logo02.png",
        car: "images/team/team02.webp",
        drivers: ["images/driver/driver02-1.webp", "images/driver/driver02-2.webp"]
    },
    {
        name: "Red Bull",
        color: "#1E41FF",
        logo: "images/logo/logo03.png",
        car: "images/team/team03.webp",
        drivers: ["images/driver/driver03-1.webp", "images/driver/driver03-2.webp"]
    },
    {
        name: "Mercedes",
        color: "#00D2BE",
        logo: "images/logo/logo04.png",
        car: "images/team/team04.webp",
        drivers: ["images/driver/driver04-1.webp", "images/driver/driver04-2.webp"]
    },
    {
        name: "Aston Martin",
        color: "#006F62",
        logo: "images/logo/logo05.png",
        car: "images/team/team05.webp",
        drivers: ["images/driver/driver05-1.webp", "images/driver/driver05-2.webp"]
    }, {
        name: "Alpine",
        color: "#2293D1",
        logo: "images/logo/logo06.png",
        car: "images/team/team06.webp",
        drivers: ["images/driver/driver06-1.webp", "images/driver/driver06-2.webp"]
    },
    {
        name: "Haas",
        color: "#B6BABD",
        logo: "images/logo/logo07.png",
        car: "images/team/team07.webp",
        drivers: ["images/driver/driver07-1.webp", "images/driver/driver07-2.webp"]
    }, {
        name: "Racing Bulls",
        color: "#6692FF",
        logo: "images/logo/logo08.png",
        car: "images/team/team08.webp",
        drivers: ["images/driver/driver08-1.webp", "images/driver/driver08-2.webp"]
    },
    {
        name: "Williams",
        color: "#00A3E0",
        logo: "images/logo/logo09.png",
        car: "images/team/team09.webp",
        drivers: ["images/driver/driver09-1.webp", "images/driver/driver09-2.webp"]
    },



    {
        name: "Kick Sauber",
        color: "#52E252",
        logo: "images/logo/logo10.png",
        car: "images/team/team10.webp",
        drivers: ["images/driver/driver10-1.webp", "images/driver/driver10-2.webp"]
    }
];

const descriptions = [
    {
      bio: "젊은 드라이버들의 환상의 시너지",
      drivers: "Lando Norris<br>Oscar Piastri",
      win: "우승 횟수: 8회",
      tags: "#McLaren #Norris #Piastri",
      insta: "https://www.instagram.com/mclaren/"
    },
    {
      bio: "전통과 혁신의 아이콘, 불타는 질주",
      drivers: "Charles Leclerc<br>Carlos Sainz Jr.",
      win: "우승 횟수: 16회",
      tags: "#Ferrari #Leclerc #Sainz",
      insta: "https://www.instagram.com/scuderiaferrari/"
    },
    {
      bio: "강력한 파워유닛, 숙련도의 조화",
      drivers: "Max Verstappen<br>Sergio Perez",
      win: "우승 횟수: 6회",
      tags: "#RedBull #Verstappen #Perez",
      insta: "https://www.instagram.com/redbullracing/"
    },
    {
      bio: "정밀함과 기술력의 상징",
      drivers: "Lewis Hamilton<br>George Russell",
      win: "우승 횟수: 8회",
      tags: "#Mercedes #Hamilton #Russell",
      insta: "https://www.instagram.com/mercedesamgf1/"
    },
    {
      bio: "고성능과 고급스러움의 조화",
      drivers: "Fernando Alonso<br>Lance Stroll",
      win: "우승 횟수: 0회",
      tags: "#AstonMartin #Alonso #Stroll",
      insta: "https://www.instagram.com/astonmartinf1/"
    },
    {
      bio: "프랑스 기술력의 도전, 열정의 팀",
      drivers: "Pierre Gasly<br>Esteban Ocon",
      win: "우승 횟수: 2회",
      tags: "#Alpine #Gasly #Ocon",
      insta: "https://www.instagram.com/alpinef1team/"
    },
    {
      bio: "실리와 전략을 중시하는 팀",
      drivers: "Kevin Magnussen<br>Nico Hülkenberg",
      win: "우승 횟수: 0회",
      tags: "#Haas #Magnussen #Hulkenberg",
      insta: "https://www.instagram.com/haasf1team/"
    },
    {
      bio: "새로운 이름과 함께 재도약",
      drivers: "Daniel Ricciardo<br>Yuki Tsunoda",
      win: "우승 횟수: 0회",
      tags: "#RacingBulls #Ricciardo #Tsunoda",
      insta: "https://www.instagram.com/visacashapprb/"
    },
    {
      bio: "클래식과 청춘의 상징",
      drivers: "Alexander Albon<br>Logan Sargeant",
      win: "우승 횟수: 9회",
      tags: "#Williams #Albon #Sargeant",
      insta: "https://www.instagram.com/williamsracing/"
    },
    {
      bio: "새로운 파트너십과 도전정신",
      drivers: "Valtteri Bottas<br>Zhou Guanyu",
      win: "우승 횟수: 0회",
      tags: "#Sauber #Bottas #Zhou",
      insta: "https://www.instagram.com/sauberf1team/"
    }
  ];

let currentTeamIndex = 0;
let isTransitioning = false;

function renderTeam(index, direction = "right") {
    if (isTransitioning) return;
    isTransitioning = true;

    const team = teams[index];
    const desc = descriptions[index];
    const container = document.getElementById("team-card");
    const oldCard = container.querySelector(".card-content.active");

    if (oldCard) {
        // 1. 기존 카드 제거 애니메이션
        oldCard.style.transform = direction === "right" ? "translateX(-100%)" : "translateX(100%)";
        oldCard.style.opacity = 0;
        oldCard.classList.remove("active");

        // 2. 제거 완료 후 새 카드 삽입
        setTimeout(() => {
            oldCard.remove();
            insertNewCard(team, desc, container, direction);
            updateIndicators(index);
            updateDescription(index);
        }, 500);
    } else {
        insertNewCard(team, desc, container, direction);
        updateIndicators(index);
        updateDescription(index);
        isTransitioning = false;
    }
}

function insertNewCard(team, desc, container, direction) {
    const newCard = document.createElement("div");
    newCard.classList.add("card-content");
    newCard.innerHTML = `
      <div class="team-header">
        <img src="${team.logo}" alt="${team.name} logo" class="team-logo" />
        <h2 class="team-name" style="color: ${team.color}">${team.name}</h2>
      </div>
      <div class="team-feed">
        <div class="driver-row">
          <img src="${team.drivers[0]}" alt="Driver 1" class="driver-photo" />
          <div class="team-vertical-line"></div>
          <img src="${team.drivers[1]}" alt="Driver 2" class="driver-photo" />
        </div>
        <img src="${team.car}" alt="${team.name} car image" class="car-photo" />
        <a href="${desc.insta}" class="support-button" target="_blank">${team.name} 응원하기</a>
      </div>
    `;
    newCard.style.transform = direction === "right" ? "translateX(100%)" : "translateX(-100%)";
    newCard.style.opacity = 0;
    newCard.style.transition = "transform 0.5s ease, opacity 0.5s ease";

    container.appendChild(newCard);

    requestAnimationFrame(() => {
        newCard.style.transform = "translateX(0)";
        newCard.style.opacity = 1;
        newCard.classList.add("active");
    });

    setTimeout(() => {
        isTransitioning = false;
    }, 500);
}

function updateDescription(index) {
    const desc = descriptions[index];
    document.querySelector(".team-bio").textContent = desc.bio;
    document.querySelector(".team-drivers").innerHTML = desc.drivers;
    document.querySelector(".team-win").innerHTML = desc.win;
    document.querySelector(".team-tags").textContent = desc.tags;
}

function updateIndicators(index) {
    const container = document.getElementById("indicator");
    container.innerHTML = "";
    for (let i = 0; i < teams.length; i++) {
        const dot = document.createElement("div");
        dot.classList.add("indicator-dot");
        if (i === index) dot.classList.add("active");
        container.appendChild(dot);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderTeam(currentTeamIndex);

    document.querySelector(".left-arrow").addEventListener("click", () => {
        if (isTransitioning) return;
        currentTeamIndex = (currentTeamIndex - 1 + teams.length) % teams.length;
        renderTeam(currentTeamIndex, "left");
    });

    document.querySelector(".right-arrow").addEventListener("click", () => {
        if (isTransitioning) return;
        currentTeamIndex = (currentTeamIndex + 1) % teams.length;
        renderTeam(currentTeamIndex, "right");
    });
});