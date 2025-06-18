let cards = [];
let currentIndex = 0;
let animProgress = 0;
let isAnimating = false;
let animDirection = 1;
let lastSwitch = 0;
let switchInterval = 6000;

function setup() {
  let canvas = createCanvas(1080, 1000);
  canvas.parent("p5-rule-canvas");
  textFont("Lexend");
  textAlign(LEFT, TOP);

  cards.push(new InfoCard("시즌 진행 방식", [
    "1년간 전 세계 24개 나라",
    "금-토-일 3일간 진행",
    "금요일: 연습 주행",
    "토요일: 예선",
    "일요일: 본선 경기"
  ], "images/rule-1.png"));

  cards.push(new InfoCard("경기 규칙", [
    "본선 약 305km 주행",
    "타이어 최소 1회 교체 필수",
    "포인트 차등 지급",
    "일부 스프린트 레이스 포함"
  ], "images/rule-2.png"));

  cards.push(new InfoCard("다음 개최지: 모나코🇲🇨", [
    "시르퀴 드 모나코",
    "날짜: 2025년 5월 23일"
  ], "images/rule-3.png"));
}

function draw() {
  background("#ffffff");

  if (isAnimating) {
    animProgress += 0.05;
    if (animProgress >= 1) {
      animProgress = 0;
      isAnimating = false;
    }
  }

  let offset = isAnimating ? lerp(0, -animDirection * width, animProgress) : 0;
  push();
  translate(offset, 0);
  cards[currentIndex].display();
  pop();

  if (isAnimating) {
    let nextIndex = (currentIndex + animDirection + cards.length) % cards.length;
    push();
    translate(offset + animDirection * width, 0);
    cards[nextIndex].display(true);
    pop();
  }

  if (millis() - lastSwitch > switchInterval && !isAnimating) {
    triggerNext(1);
  }
}

function mousePressed() {
  if (mouseX < width / 3) triggerNext(-1);
  else if (mouseX > width * 2 / 3) triggerNext(1);
}

function triggerNext(dir) {
  if (!isAnimating) {
    animDirection = dir;
    currentIndex = (currentIndex + dir + cards.length) % cards.length;
    animProgress = 0;
    isAnimating = true;
    lastSwitch = millis();
  }
}

class InfoCard {
  constructor(title, lines, imgPath) {
    this.title = title;
    this.lines = lines;
    this.img = loadImage(imgPath);
  }

  display(fade = false) {
    let x = 100;
    let y = 60;
    let w = 880;
    let h = 700;

    if (fade) fill(240, 240, 240, 150);
    else fill("#f2f2f2");
    stroke("#e5e5e5");
    strokeWeight(2);
    rect(x, y, w, h, 16);

    noStroke();
    fill("#15151f");
    textSize(30);
    text(this.title, x + 30, y + 30);

    textSize(20);
    for (let i = 0; i < this.lines.length; i++) {
      text(this.lines[i], x + 30, y + 90 + i * 28);
    }

    imageMode(CORNER);
    image(this.img, x + w - 260, y + h - 180, 220, 140);
  }
}