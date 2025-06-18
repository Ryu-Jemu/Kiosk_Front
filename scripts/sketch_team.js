let teams = [
    {
      name: "레드불",
      imgPath: "images/team/team01.png",
      drivers: "페르스타펜 & 페레즈",
      wins: "우승 11회",
      origin: "오스트리아",
    },
    {
      name: "페라리",
      imgPath: "images/team/team02.png",
      drivers: "르클레르 & 사인츠",
      wins: "우승 16회",
      origin: "이탈리아",
    },
    // ...이하 팀 추가
  ];
  
  let currentIndex = 0;
  let images = [];
  
  function preload() {
    for (let team of teams) {
      images.push(loadImage(team.imgPath));
    }
  }
  
  function setup() {
    let canvas = createCanvas(1080, 1920);
    canvas.parent("p5-container");
    textAlign(CENTER, CENTER);
    imageMode(CENTER);
  }
  
  function draw() {
    background("#15151f");
  
    let team = teams[currentIndex];
    let img = images[currentIndex];
  
    // 팀 이미지
    image(img, width / 2, height / 3, 800, 300);
  
    // 팀 정보 카드
    fill("#fafafa");
    textSize(48);
    text(team.name, width / 2, height / 2 + 100);
  
    textSize(28);
    text(`드라이버: ${team.drivers}`, width / 2, height / 2 + 160);
    text(team.wins, width / 2, height / 2 + 210);
    text(`본사: ${team.origin}`, width / 2, height / 2 + 260);
  
    // 인디케이터
    fill("#fa1d00");
    textSize(20);
    text(`← 터치하여 이전 | ${currentIndex + 1}/${teams.length} | 다음 →`, width / 2, height - 80);
  }
  
  function mousePressed() {
    if (mouseX < width / 3) {
      currentIndex = (currentIndex - 1 + teams.length) % teams.length;
    } else if (mouseX > width * 2 / 3) {
      currentIndex = (currentIndex + 1) % teams.length;
    }
  }