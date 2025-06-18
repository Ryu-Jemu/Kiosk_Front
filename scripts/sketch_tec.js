let carImg;
let techZones = [];
let overlay = null;

function preload() {
  carImg = loadImage("images/tec_image.png"); // 차량 이미지
}

function setup() {
  let canvas = createCanvas(1080, 1000);
  canvas.parent("p5-tec-canvas");
  textFont("Lexend");
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(18);

  // 각 기술 영역 정의
  techZones = [
    new TechButton("공기역학", 250, 350, "다운포스와 항력 제어를 위한 기술."),
    new TechButton("타이어", 540, 420, "접지력 확보와 전략적인 타이어 선택."),
    new TechButton("섀시 / 구조물", 800, 300, "차량의 뼈대 및 안전을 책임지는 설계."),
    new TechButton("파워 유닛", 250, 700, "하이브리드 V6 엔진 시스템."),
    new TechButton("연료 / 윤활유", 520, 760, "효율적 에너지 사용과 냉각 시스템."),
    new TechButton("전자제어 / 데이터", 830, 740, "실시간 텔레메트리와 ECU 시스템."),
  ];
}

function draw() {
  background("#ffffff");

  // 차량 이미지
  image(carImg, width / 2, height / 2 - 50, 800, 400);

  // 버튼
  for (let btn of techZones) {
    btn.display();
  }

  // 오버레이
  if (overlay) {
    fill("#000000bb");
    rect(width / 2, height / 2, 800, 300, 20);
    fill("#ffffff");
    textSize(24);
    text(overlay.title, width / 2, height / 2 - 80);
    textSize(18);
    text(overlay.desc, width / 2, height / 2);
    textSize(14);
    text("아무 곳이나 클릭하면 닫힙니다", width / 2, height / 2 + 100);
  }
}

function mousePressed() {
  if (overlay) {
    overlay = null;
    return;
  }
  for (let btn of techZones) {
    if (btn.isHovered(mouseX, mouseY)) {
      overlay = { title: btn.label, desc: btn.description };
      break;
    }
  }
}

class TechButton {
  constructor(label, x, y, description) {
    this.label = label;
    this.x = x;
    this.y = y;
    this.description = description;
    this.w = 150;
    this.h = 40;
  }

  display() {
    fill("#15151f");
    stroke("#fa1d00");
    strokeWeight(3);
    rect(this.x, this.y, this.w, this.h, 10);
    noStroke();
    fill("#ffffff");
    text(this.label, this.x, this.y);
  }

  isHovered(px, py) {
    return px > this.x - this.w / 2 &&
           px < this.x + this.w / 2 &&
           py > this.y - this.h / 2 &&
           py < this.y + this.h / 2;
  }
}