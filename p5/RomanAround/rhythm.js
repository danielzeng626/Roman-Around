let altColor, arrowColor, semiDone, completedColor, arrows, holds;
let levelLimit, levels, scene, transition, gFont, gFontBold;
let clicked, pressed, keys, keyDur, curKey, bPos, bBack, logoPos;
let logoSize, hoverLimit, helpPos, scorePos, scores, myScore, numLevels;
let playPos, levelPos, load, lineCols, loadSize, levelLine, holdTick, points;
let displayPoints, start, pause, pausedTransition, pausedPos, totLength;
let lastArrow, keyUsed, arrowDisplay, step, back;

function setup() {
	createCanvas(600, 400);
	smooth();
	angleMode("degrees");
	altColor = 50;
	arrowColor = color(255);
	semiDone = lerpColor(color(255), color(255, 222, 238), 1 / 2);
	completedColor = color(255, 222, 238);
	arrows = [
		function(x, y, c) {
			completedColor.setAlpha(100);
			arrowColor.setAlpha(100);
			stroke(c ? completedColor : arrowColor);
			strokeWeight(2);
			completedColor.setAlpha(50);
			arrowColor.setAlpha(50);
			fill(c ? completedColor : arrowColor);
			diamond(x, y, 25);
			completedColor.setAlpha(255);
			arrowColor.setAlpha(255);
			stroke(c ? completedColor : arrowColor);
			strokeWeight(3);
			line(x + 23, y, x + 3, y - 20);
			line(x + 23, y, x + 3, y + 20);
		},
		function(x, y, c) {
			completedColor.setAlpha(100);
			arrowColor.setAlpha(100);
			stroke(c ? completedColor : arrowColor);
			strokeWeight(2);
			completedColor.setAlpha(50);
			arrowColor.setAlpha(50);
			fill(c ? completedColor : arrowColor);
			diamond(x, y, 25);
			completedColor.setAlpha(255);
			arrowColor.setAlpha(255);
			stroke(c ? completedColor : arrowColor);
			strokeWeight(3);
			line(x, y + 23, x - 20, y + 3);
			line(x, y + 23, x + 20, y + 3);
		},
		function(x, y, c) {
			completedColor.setAlpha(100);
			arrowColor.setAlpha(100);
			stroke(c ? completedColor : arrowColor);
			strokeWeight(2);
			completedColor.setAlpha(50);
			arrowColor.setAlpha(50);
			fill(c ? completedColor : arrowColor);
			diamond(x, y, 25);
			completedColor.setAlpha(255);
			arrowColor.setAlpha(255);
			stroke(c ? completedColor : arrowColor);
			strokeWeight(3);
			line(x - 23, y, x - 3, y - 20);
			line(x - 23, y, x - 3, y + 20);
		},
		function(x, y, c) {
			completedColor.setAlpha(100);
			arrowColor.setAlpha(100);
			stroke(c ? completedColor : arrowColor);
			strokeWeight(2);
			completedColor.setAlpha(50);
			arrowColor.setAlpha(50);
			fill(c ? completedColor : arrowColor);
			diamond(x, y, 25);
			completedColor.setAlpha(255);
			arrowColor.setAlpha(255);
			stroke(c ? completedColor : arrowColor);
			strokeWeight(3);
			line(x, y - 23, x - 20, y - 3);
			line(x, y - 23, x + 20, y - 3);
		}
	];
	holds = [
		function(x, y, c, d, s) {
			let w = 25 / sqrt(2);
			completedColor.setAlpha(100);
			semiDone.setAlpha(100);
			arrowColor.setAlpha(100);
			(stroke)(c ? completedColor : s ? semiDone : arrowColor);
			strokeWeight(2);
			completedColor.setAlpha(50);
			semiDone.setAlpha(50);
			arrowColor.setAlpha(50);
			(fill)(c ? completedColor : s ? semiDone : arrowColor);
			beginShape();
			vertex(x + w, y);
			vertex(x, y + w);
			vertex(x - w, y);
			vertex(x - w, y - (55 * d) + w);
			vertex(x, y - (55 * d));
			vertex(x + w, y - (55 * d) + w);
			vertex(x + w, y);
			endShape();
			completedColor.setAlpha(255);
			semiDone.setAlpha(255);
			arrowColor.setAlpha(255);
			stroke(c ? completedColor : s ? semiDone : arrowColor);
			strokeWeight(3);
			line(x + 22, y - (55 * d) + w - 1, x + 3, y - (55 * d) + w - 20);
			line(x + 22, y + 1, x + 3, y + 20);
			line(x + 21, y - 1, x + 21, y - (55 * d) + w + 1);
		},
		function(x, y, c, d, s) {
			let w = 25 / sqrt(2);
			completedColor.setAlpha(100);
			semiDone.setAlpha(100);
			arrowColor.setAlpha(100);
			(stroke)(c ? completedColor : s ? semiDone : arrowColor);
			strokeWeight(2);
			completedColor.setAlpha(50);
			semiDone.setAlpha(50);
			arrowColor.setAlpha(50);
			(fill)(c ? completedColor : s ? semiDone : arrowColor);
			beginShape();
			vertex(x + w, y);
			vertex(x, y + w);
			vertex(x - w, y);
			vertex(x - w, y - (55 * d) + w);
			vertex(x, y - (55 * d));
			vertex(x + w, y - (55 * d) + w);
			vertex(x + w, y);
			endShape();
			completedColor.setAlpha(255);
			semiDone.setAlpha(255);
			arrowColor.setAlpha(255);
			stroke(c ? completedColor : s ? semiDone : arrowColor);
			strokeWeight(3);
			line(x, y + 23, x - 20, y + 3);
			line(x, y + 23, x + 20, y + 3);
		},
		function(x, y, c, d, s) {
			let w = 25 / sqrt(2);
			completedColor.setAlpha(100);
			semiDone.setAlpha(100);
			arrowColor.setAlpha(100);
			(stroke)(c ? completedColor : s ? semiDone : arrowColor);
			strokeWeight(2);
			completedColor.setAlpha(50);
			semiDone.setAlpha(50);
			arrowColor.setAlpha(50);
			(fill)(c ? completedColor : s ? semiDone : arrowColor);
			beginShape();
			vertex(x + w, y);
			vertex(x, y + w);
			vertex(x - w, y);
			vertex(x - w, y - (55 * d) + w);
			vertex(x, y - (55 * d));
			vertex(x + w, y - (55 * d) + w);
			vertex(x + w, y);
			endShape();
			completedColor.setAlpha(255);
			semiDone.setAlpha(255);
			arrowColor.setAlpha(255);
			stroke(c ? completedColor : s ? semiDone : arrowColor);
			strokeWeight(3);
			line(x - 22, y - (55 * d) + w - 1, x - 3, y - (55 * d) + w - 20);
			line(x - 22, y + 1, x - 3, y + 20);
			line(x - 22, y - 1, x - 22, y - (55 * d) + w + 1);
		},
		function(x, y, c, d, s) {
			let w = 25 / sqrt(2);
			completedColor.setAlpha(100);
			semiDone.setAlpha(100);
			arrowColor.setAlpha(100);
			(stroke)(c ? completedColor : s ? semiDone : arrowColor);
			strokeWeight(2);
			completedColor.setAlpha(50);
			semiDone.setAlpha(50);
			arrowColor.setAlpha(50);
			(fill)(c ? completedColor : s ? semiDone : arrowColor);
			beginShape();
			vertex(x + w, y);
			vertex(x, y + w);
			vertex(x - w, y);
			vertex(x - w, y - (55 * d) + w);
			vertex(x, y - (55 * d));
			vertex(x + w, y - (55 * d) + w);
			vertex(x + w, y);
			endShape();
			completedColor.setAlpha(255);
			semiDone.setAlpha(255);
			arrowColor.setAlpha(255);
			stroke(c ? completedColor : s ? semiDone : arrowColor);
			strokeWeight(3);
			line(x, y - (55 * d) + w - 23, x - 20, y - (55 * d) + w - 3);
			line(x, y - (55 * d) + w - 23, x + 20, y - (55 * d) + w - 3);
		}
	];
	levelLimit = 15;
	levels = [{
			n: "THE BEGINNING",
			s: [1, 29],
			unlocked: true,
			score: 0,
			speed: 1,
		},
		{
			n: "THE INTRODUCTION",
			s: [2, 37],
			unlocked: false,
			score: 0,
			speed: 1.5
		},
		{
			n: "THE ADVENTURE",
			s: [3, 49],
			unlocked: false,
			score: 0,
			speed: 2
		},
		{
			n: "THE JOURNEY",
			s: [3, 87],
			unlocked: false,
			score: 0,
			speed: 2.5
		},
		{
			n: "THE QUEST",
			s: [4, 113],
			unlocked: false,
			score: 0,
			speed: 3
		},
		{
			n: "THE SPRINT",
			s: [1, 53],
			unlocked: false,
			score: 0,
			speed: 3.5
		},
		{
			n: "THE TREASURE",
			s: [3, 81],
			h: 0.9,
			hRange: [2, 5],
			unlocked: false,
			score: 0,
			speed: 2
		},
		{
			n: "THE STORM",
			s: [4, 216],
			h: 0.4,
			hRange: [1, 4],
			unlocked: false,
			score: 0,
			speed: 3
		},
		{
			n: "THE PROTECTOR",
			s: [6, 150],
      h: 0.2,
      hRange: [1, 3],
			unlocked: false,
      score: 0,
      speed: 3
		},
		{
			n: "THE ATTACK",
			s: [2, 75],
      h: 0.1,
      hRange: [2, 4],
			unlocked: false,
      score: 0,
      speed: 4
		},
		{
			n: "THE SHELTER",
			s: [3, 125],
      h: 0.25,
      hRange: [1, 5],
			unlocked: false,
      score: 0,
      speed: 3
		},
		{//WIP
			n: "THE STUDENT",
			s: [1, 1],
      h: 0,
      hRange: [0, 0],
			unlocked: false,
      score: 0,
      speed: 1
		},
		{
			n: "THE TEACHER",
			s: [5, 300],
      h: 0.3,
      hRange: [1, 6],
			unlocked: false,
      score: 0,
      speed: 2.5
		},
		{
			n: "THE LEAVING",
			s: [1, 1],
      h: 0,
      hRange: [0, 0],
			unlocked: false,
      score: 0,
      speed: 1
		}
	];
	scene = "home";
	transition = "";
	gFont = "Calibri";
	gFontBold = "Calibri Bold";
	clicked = false;
	pressed = false;
	keys = [];
	keyDur = [0, 0, 0, 0];
	curKey = "";
	bPos = [
		[900, 300],
		[900, 300],
		[900, 225],
		[900, 375]
	];
	bBack = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	logoPos = [
		[
			[50, 350],
			[100, 350]
		],
		[
			[50, 350],
			[25, 375]
		],
		[
			[50, 350],
			[33, 312]
		],
		[
			[50, 350],
			[55, 310]
		]
	];
	logoSize = [40, 10, 20, 30];
	hoverLimit = 75;
	helpPos = [
		[900, 300],
		[900, 550],
		[900, 100],
		[900, 150],
		[900, 200],
		[900, 250],
		[900, 375]
	];
	scorePos = [
		[900, 300],
		[900, 550],
		[900, 125],
		[900, 450]
	];
	scores = [
		[0, "-"],
		[0, "-"],
		[0, "-"]
	];
	myScore = 0;
	numLevels = 0;
	playPos = [
		[900, 300],
		[900, 550],
		[900, 180],
		[900, 220],
		[900, 260],
		[900, 300],
		[900, 340],
		[900, 380],
		[900, 420]
	];
	levelPos = [
		[0, 50],
		[0, 40],
		[0, 10],
		[0, 20],
		[0, 30]
	];
	load = [
		[
			[300, 200],
			[300, 200]
		],
		[
			[300, 200],
			[350, 200]
		],
		[
			[300, 200],
			[275, 225]
		],
		[
			[300, 200],
			[283, 162]
		],
		[
			[300, 200],
			[305, 160]
		],
		[
			[300, 200],
			[300, 200]
		]
	];
	lineCols = color(255);
	loadSize = [0, 255];
	levelLine = [0, 255];
	holdTick = 0;
	points = 0;
	displayPoints = 0;
	start = false;
	pause = false;
	pauseTransition = false;
	pausedPos = [
		[450, 200, 450],
		[500, 350, 500]
	];
	totLength = 0;
	lastArrow = -1;
	keyUsed = false;
	arrowDisplay = [];
	step = 8;
	noStroke();
	rectMode(CENTER);
	for (let x = 0; x < 600; x += step) {
		for (let y = 0; y < 400; y += step) {
			fill(lerpColor(color(252, 190, 219), color(190, 231, 252), abs(x / width - y / height)));
			rect(x + step / 2, y + step / 2, step, step);
		}
	}
	back = get(0, 0, width, height);
	imageMode(CENTER);
}

function diamond(x, y, w) {
	let d = w / sqrt(2);
	quad(x - d, y, x, y - d, x + d, y, x, y + d);
}

function overDiamond(x, y, w) {
	let aX = (mouseX - x) * cos(45) - (mouseY - y) * sin(45) + x;
	let aY = (mouseX - x) * sin(45) + (mouseY - y) * cos(45) + y;
	return aX > x - w / 2 && aX < x + w / 2 && aY > y - w / 2 && aY < y + w / 2;
}

function mouseClicked() {
	clicked = true;
}

function mousePressed() {
	pressed = true;
	clicked = false;
}

function mouseReleased() {
	pressed = false;
}

function keyPressed() {
	curKey = keyCode;
	keys[keyCode] = true;
}

function keyReleased() {
	keys[keyCode] = false;
}

function keyPush() {
	for (let i = 0; i < keys.length; i++) {
		if (keys[i]) {
			return true;
		}
	}
	return false;
}

function button(x, y, w, txt, dest, i, s, r, col) {
	let overThis = false;
	noStroke();
	fill(255);
	textSize(s ? s : w / 2);
	textAlign(CENTER, CENTER);
	text(txt, x, y);
	stroke(255);
	strokeWeight(2);
	if (overDiamond(x, y, w) && !r) {
		if (bBack[i] < hoverLimit) {
			bBack[i] += hoverLimit / 10;
		}
		if (clicked) {
			transition = dest;
		}
	} else {
		if (bBack[i] > 0) {
			bBack[i] -= hoverLimit / 5;
		}
	}
	if (col) {
		col.setAlpha(bBack[i]);
	}
	fill(col ? col : 255, bBack[i]);
	diamond(x, y, w);
	noFill();
	if (col) {
		col.setAlpha(100);
	}
	(stroke)(col ? col : 255, 100);
	diamond(x, y, w * 1.03);
	diamond(x, y, w * 0.97);
	if (r) {
		noStroke();
		(fill)(150, 50);
		diamond(x, y, w);
	}
}

function homeScreen() {
	noStroke();
	rectMode(CENTER);
	fill(255);
	textFont(gFont, 75);
	textAlign(CENTER, CENTER);
	text("THE RHYTHM", bPos[0][0], 75);
	textFont(gFont);
	button(bPos[1][0], 200, 100, "PLAY", "play", 0, 30);
	button(bPos[2][0], 275, 100, "HELP", "help", 1, 30);
	button(bPos[3][0], 275, 100, "SCORES", "score", 2, 30);
	(fill)(255, bBack[20]);
	if (overDiamond(550, 350, 50)) {
		if (bBack[20] < hoverLimit) {
			bBack[20] += hoverLimit / 10;
		}
	} else {
		if (bBack[20] > 0) {
			bBack[20] -= hoverLimit / 5;
		}
	}
	stroke(255);
	diamond(550, 350, 50);
	noFill();
	stroke(255);
	arc(550, 340, 40, 40, 30, 150);
	arc(550, 360, 40, 40, 210, 330);
	ellipse(550, 350, 15, 15);
	(stroke)(255, 100);
	diamond(550, 350, 51);
	diamond(550, 350, 49);
	if (transition.length > 0) {
		for (let i = 0; i < bPos.length; i++) {
			bPos[i][0] += ((i === 0 ? -300 : -100) - bPos[i][0]) / 10;
		}
		if (bPos[0][0] <= -250) {
			for (let i = 0; i < bPos.length; i++) {
				bPos[i][0] = 900;
			}
			scene = transition;
			transition = "";
		}
	} else {
		for (let i = 0; i < bPos.length; i++) {
			bPos[i][0] += (bPos[i][1] - bPos[i][0]) / 10;
		}
	}
}

function helpScene() {
	rectMode(CENTER);
	fill(255);
	textFont(gFont, 65);
	textAlign(CENTER, CENTER);
	noStroke();
	text("HELP", helpPos[0][0], 75);
	textSize(25);
	text("Press arrow key", helpPos[6][0], 150);
	text("Hold arrow key", helpPos[6][0], 250 - 25 / sqrt(2));
	button(helpPos[1][0], 350, 50, "BACK", "home", 4, 15);
	for (let i = 0; i < arrows.length; i++) {
		arrows[i](helpPos[i + 2][0], 150);
		holds[i](helpPos[i + 2][0], 250, false, 1);
	}
	if (transition.length > 0) {
		for (let i = 0; i < helpPos.length; i++) {
			helpPos[i][0] += ((i === 0 ? -300 : -100) - helpPos[i][0]) / 10;
		}
		if (helpPos[0][0] <= -250) {
			for (let i = 0; i < helpPos.length; i++) {
				helpPos[i][0] = 900;
			}
			scene = transition;
			transition = "";
		}
	} else {
		for (let i = 0; i < helpPos.length; i++) {
			helpPos[i][0] += (helpPos[i][1] - helpPos[i][0]) / 10;
		}
	}
}

function padUpdate(num, z) {
	let s = num + "";
	while (s.length < z) {
		s = "0" + s;
	}
	return s;
}

function limitString(str, len) {
	if (textWidth(str) <= len) {
		return str;
	}
	while (textWidth(str + "...") > len) {
		str = str.substring(0, str.length - 1);
	}
	return str + "...";
}

function scoreScene() {
	rectMode(CENTER);
	fill(255);
	textFont(gFont, 65);
	textAlign(CENTER, CENTER);
	noStroke();
	text("SCORES", scorePos[0][0], 75);
	textSize(25);
	for (let i = 0; i < scores.length; i++) {
		fill(255);
		text(i + 1, scorePos[2][0], 150 + 55 * i);
		noFill();
		stroke(255);
		diamond(scorePos[2][0], 150 + 55 * i, 35);
		(stroke)(255, 100);
		diamond(scorePos[2][0], 150 + 55 * i, 34);
		diamond(scorePos[2][0], 150 + 55 * i, 36);
	}
	stroke(255);
	diamond(scorePos[3][0], 210, 100);
	myScore = 0;
	for (let i = 0; i < levels.length; i++) {
		myScore += levels[i].score || 0;
	}
	myScore /= levels.length;
	noStroke();
	fill(255);
	text(padUpdate(round(myScore), 7), scorePos[3][0], 210);
	textAlign(LEFT, CENTER);
	for (let i = 0; i < scores.length; i++) {
		textSize(25);
		text(limitString(scores[i][1], 200), scorePos[2][0] + 40, 142 + 55 * i);
		textSize(20);
		text(padUpdate(scores[i][0], 7), scorePos[2][0] + 40, 163 + 55 * i);
	}
	button(scorePos[1][0], 350, 50, "BACK", "home", 4, 15);
	if (transition.length > 0) {
		for (let i = 0; i < scorePos.length; i++) {
			scorePos[i][0] += ((i === 0 ? -300 : -100) - scorePos[i][0]) / 10;
		}
		if (scorePos[0][0] <= -250) {
			for (let i = 0; i < scorePos.length; i++) {
				scorePos[i][0] = 900;
			}
			scene = transition;
			transition = "";
		}
	} else {
		for (let i = 0; i < scorePos.length; i++) {
			scorePos[i][0] += (scorePos[i][1] - scorePos[i][0]) / 10;
		}
	}
}

function displayLevel(index, x, y) {
	let s = levels[index].score;
	let c = color(255, 105, 195);
	if (s+1 <= 640000 || !s) {
		c = color(255);
	} else
	if (s+1 <= 850000) {
		c = color(130, 212, 245);
	} else
	if (s+1 <= 1000000) {
		c = color(249, 192, 107);
	}
	button(x, y, 50, index + 1, "" + index, index + 5, 20, !levels[index].unlocked, c);
}

function playScene() {
	fill(255);
	textFont(gFont, 65);
	textAlign(CENTER, CENTER);
	noStroke();
	text("LEVELS", playPos[0][0], 75);
	button(playPos[1][0], 350, 50, "BACK", "home", 4, 15);
	for (let i = 0; i < levels.length; i++) {
		displayLevel(i, playPos[2 + (i % 7)][0], 180 + (i % 7 % 2) * 40 + floor(i / 7) * 80);
	}
	if (transition.length > 0) {
		for (let i = 0; i < playPos.length; i++) {
			playPos[i][0] += ((i === 0 ? -300 : -100) - playPos[i][0]) / 10;
		}
		if (playPos[0][0] <= -250) {
			for (let i = 0; i < playPos.length; i++) {
				playPos[i][0] = 900;
			}
			scene = transition;
			transition = "";
		}
	} else {
		for (let i = 0; i < playPos.length; i++) {
			playPos[i][0] += (playPos[i][1] - playPos[i][0]) / 10;
		}
	}
}

function updateMiddleLine() {
	lineCols = color(((255) + red(lineCols) * 15) / 16, ((255) + green(lineCols) * 15) / 16, ((255) + blue(lineCols) * 15) / 16);
}

function levelScene(l) {
	if (!start) {
		arrowDisplay = [];
		for (let i = 0; i < levelPos.length; i++) {
			levelPos[i][0] += (levelPos[i][1] - levelPos[i][0]) / 10;
		}
		if (abs(levelPos[0][1] - levelPos[0][0]) <= 5 && holdTick < 40) {
			for (let i = 0; i < load.length; i++) {
				load[i][0][0] += (load[i][1][0] - load[i][0][0]) / 10;
				load[i][0][1] += (load[i][1][1] - load[i][0][1]) / 10;
			}
		}
		if (abs(load[1][0][0] - load[1][1][0]) <= 2) {
			loadSize[0] += (loadSize[1] - loadSize[0]) / 10;
		}
		if (abs(loadSize[0] - loadSize[1]) <= 0.1) {
			holdTick++;
		}
		noFill();
		for (let i = 0; i < load.length - 1; i++) {
			stroke(255);
			diamond(load[i][0][0], load[i][0][1], levelPos[i][0]);
			(stroke)(255, 100);
			diamond(load[i][0][0], load[i][0][1], levelPos[i][0] + 1);
			diamond(load[i][0][0], load[i][0][1], levelPos[i][0] - 1);
		}
		(fill)(255, loadSize[0]);
		textFont(gFont, 30);
		noStroke();
		text(l + 1, load[5][0][0], load[5][0][1]);
		if (holdTick >= 40) {
			for (let i = 0; i < load.length; i++) {
				load[i][0][0] += (-100 - load[i][0][0]) / 10;
			}
			if (load[0][0][0] <= -50) {
				for (let i = 0; i < load.length; i++) {
					load[i][0] = [300, 200];
				}
				for (let i = 0; i < levelPos.length; i++) {
					levelPos[i][0] = 0;
				}
				holdTick = 0;
				loadSize[0] = 0;
				start = true;
			}
		}
	} else {
		if (arrowDisplay.length === 0) {
			for (let i = 0; i < levels[l].s[1]; i++) {
				let thisInt = floor(random(arrows.length));
				let randHold = random();
				if (levels[l].h && randHold <= levels[l].h) {
					let d = floor(random(levels[l].hRange[0], levels[l].hRange[1] + 1));
					arrowDisplay.push({
						f: holds[thisInt],
						x: width / (levels[l].s[0] + 1) * floor(random(1, levels[l].s[0] + 1)),
						y: -50 - i * 55,
						c: false,
						loc: thisInt + arrows.length,
						d: d,
						apply: false
					});
					i += d;
				} else {
					arrowDisplay.push({
						f: arrows[thisInt],
						x: width / (levels[l].s[0] + 1) * floor(random(1, levels[l].s[0] + 1)),
						y: -50 - i * 55,
						c: false,
						loc: thisInt
					});
				}
			}
			totLength = arrowDisplay.length;
		} else {
			for (let i = 0; i < arrowDisplay.length; i++) {
				if (!pause && !pauseTransition) {
					arrowDisplay[i].y += levels[l].speed ? levels[l].speed : sqrt(l);
				}
				let checkKey = curKey - 39;
				if (checkKey < 0 && checkKey > -3) {
					checkKey += 4;
				}
				if (arrowDisplay[i].loc < arrows.length) {
					arrowDisplay[i].f(arrowDisplay[i].x, arrowDisplay[i].y, arrowDisplay[i].c);
					if (checkKey === arrowDisplay[i].loc && !arrowDisplay[i].c && !keyUsed && !pause && !pauseTransition) {
						if (arrowDisplay[i].y >= 245 && arrowDisplay[i].y <= 252.5) {
							points += (1000000 / totLength);
							arrowDisplay[i].c = true;
							keyUsed = true;
							lineCols = color(250, 114, 215);
						} else
						if (arrowDisplay[i].y >= 235 && arrowDisplay[i].y <= 267.5) {
							points += (900000 / totLength);
							arrowDisplay[i].c = true;
							keyUsed = true;
							lineCols = color(249, 192, 107);
						} else
						if (arrowDisplay[i].y >= 220 && arrowDisplay[i].y <= 265) {
							points += (750000 / totLength);
							arrowDisplay[i].c = true;
							keyUsed = true;
							lineCols = color(52, 181, 235);
						}
					}
					if (arrowDisplay[i].y > 265 && !arrowDisplay[i].c) {
						arrowDisplay[i].c = true;
						lineCols = color(255, 100, 100);
					}
					if (arrowDisplay[i].y >= 425 && arrowDisplay.length > 1) {
						arrowDisplay.splice(i, 1); //reduce lag
						i--;
					}
				} else {
					arrowDisplay[i].f(arrowDisplay[i].x, arrowDisplay[i].y, arrowDisplay[i].c, arrowDisplay[i].d, arrowDisplay[i].start);
					if (checkKey === arrowDisplay[i].loc - arrows.length && !arrowDisplay[i].c && !keyUsed && !pause && !pauseTransition && !arrowDisplay[i].start) {
						if (arrowDisplay[i].y >= 220 && arrowDisplay[i].y <= 265 + 55 * arrowDisplay[i].d) {
							arrowDisplay[i].start = arrowDisplay[i].y;
							keyUsed = true;
							if (arrowDisplay[i].start >= 245 && arrowDisplay[i].start <= 252.5) {
								points += (500000 / totLength);
								lineCols = color(250, 114, 215);
							} else
							if (arrowDisplay[i].start >= 235 && arrowDisplay[i].start <= 267.5) {
								points += (450000 / totLength);
								lineCols = color(249, 192, 107);
							} else {
								points += (375000 / totLength);
								lineCols = color(52, 181, 235);
							}
						}
					}
					if (arrowDisplay[i].y >= 265 + 55 * arrowDisplay[i].d) {
						arrowDisplay[i].c = true;
					}
					if (!keyPush() && arrowDisplay[i].start && !arrowDisplay[i].stop && !pause && !pauseTransition && !arrowDisplay[i].c) {
						arrowDisplay[i].stop = arrowDisplay[i].y;
						arrowDisplay[i].c = true;
					}
					if (arrowDisplay[i].c && !arrowDisplay[i].apply) {
						keyUsed = true;
						if (!arrowDisplay[i].start) {
							lineCols = color(255, 100, 100);
						} else
						if (!arrowDisplay[i].stop) {
							points += (375000 / totLength);
							lineCols = color(52, 181, 235);
						} else
						if (arrowDisplay[i].stop >= 245 + 55 * arrowDisplay[i].d && arrowDisplay[i].stop <= 252.5 + 55 * arrowDisplay[i].d) {
							points += (500000 / totLength);
							lineCols = color(250, 114, 215);
						} else
						if (arrowDisplay[i].stop >= 235 + 55 * arrowDisplay[i].d && arrowDisplay[i].stop <= 267.5 + 55 * arrowDisplay[i].d) {
							points += (450000 / totLength);
							lineCols = color(249, 192, 107);
						} else {
							points += (375000 / totLength);
							lineCols = color(52, 181, 235);
						}
						arrowDisplay[i].apply = true;
					}
					if (arrowDisplay[i].y - 55 * arrowDisplay[i].d >= 425 && arrowDisplay.length > 1) {
						arrowDisplay.splice(i, 1); //reduce lag
						i--;
					}
				}
			}
		}
		if (!pause) {
			updateMiddleLine();
		}
		(stroke)(lineCols, levelLine[0]);
		strokeWeight(2);
		line(0, 250, 600, 250);
		(stroke)(lineCols, levelLine[0] * (100 / 255));
		line(0, 249, 600, 249);
		line(0, 251, 600, 251);
		levelLine[0] += (levelLine[1] - levelLine[0]) / 10;
		(fill)(255, levelLine[0]);
		textAlign(RIGHT, CENTER);
		textFont(gFont, 30);
		noStroke();
		text(levels[l].n, 570, 30);
		textSize(25);
		if (displayPoints < points) {
			displayPoints += (levels[l].speed ? levels[l].speed : sqrt(l)) * 50000 / totLength;
		}
		if (displayPoints > points) {
			displayPoints = points;
		}
		text(padUpdate(round(displayPoints), 7), 570, 52);
		textSize(15);
		if (levels[l].score > 0) {
			if (displayPoints > levels[l].score) {
				text("NEW HIGH", 570, 70);
			} else {
				text("HIGH " + padUpdate(round(levels[l].score), 7), 570, 70);
			}
		} else {
			text("NEW LEVEL", 570, 70);
		}
		if (arrowDisplay[0].y - (arrowDisplay[0].loc > 3 ? 55 * arrowDisplay[0].d : 0) > 450) {
			levels[l].score = max(levels[l].score, points);
			if (points >= 640000 && l < levelLimit - 2) {
				levels[l + 1].unlocked = true;
			}
			points = 0;
			displayPoints = 0;
			levelLine[0] = 0;
			arrowDisplay = [];
			start = false;
			pause = false;
			for (let i = 0; i < pausedPos.length; i++) {
				pausedPos[i][0] = pausedPos[i][2];
			}
			pauseTransition = false;
			scene = "play";
		}
		if (pause || (!pause && pauseTransition)) {
			(fill)(255, 50);
			rect(300, 200, 600, 400);
			(stroke)(255, 200);
			rect(300, pausedPos[0][0], 150, 50);
			fill(255);
			textFont(gFont, 35);
			textAlign(CENTER, CENTER);
			noStroke();
			text("PAUSED", 300, pausedPos[0][0]);
			button(550, pausedPos[1][0], 50, "LEVELS", "play", 19, 15);
			if (transition === "play") {
				points = 0;
				displayPoints = 0;
				levelLine[0] = 0;
				arrowDisplay = [];
				start = false;
				pause = false;
				for (let i = 0; i < pausedPos.length; i++) {
					pausedPos[i][0] = pausedPos[i][2];
				}
				pauseTransition = false;
				scene = "play";
				transition = "";
			}
			if (!pause) {
				for (let i = 0; i < pausedPos.length; i++) {
					pausedPos[i][0] += (pausedPos[i][1] - pausedPos[i][0]) / 10;
				}
				if (abs(pausedPos[0][0] - pausedPos[0][1]) <= 0.1) {
					pauseTransition = false;
					pause = true;
				}
			} else
			if (pauseTransition) {
				for (let i = 0; i < pausedPos.length; i++) {
					pausedPos[i][0] += (pausedPos[i][2] - pausedPos[i][0]) / 10;
				}
				if (abs(pausedPos[0][0] - pausedPos[0][2]) <= 10) {
					pauseTransition = false;
					pause = false;
				}
			}
		}
	}
}

function logo() {
	strokeWeight(2);
	stroke(255);
	(fill)(255, bBack[3]);
	if (overDiamond(50, 350, 50)) {
		if (bBack[3] < hoverLimit) {
			bBack[3] += hoverLimit / 10;
		}
		if (clicked) {
			for (let i = 0; i < logoPos.length; i++) {
				logoPos[i][0] = [50, 350];
			}
			if (scene.search(/[0-9]/g) < 0) {
				transition = "home";
			} else
			if (start) {
				pauseTransition = true;
			}
		}
	} else {
		if (bBack[3] > 0) {
			bBack[3] -= hoverLimit / 5;
		}
	}
	diamond(50, 350, 50);
	(stroke)(255, 100);
	noFill();
	diamond(50, 350, 51);
	diamond(50, 350, 49);
	for (let i = 0; i < logoPos.length; i++) {
		stroke(255);
		diamond(logoPos[i][0][0], logoPos[i][0][1], logoSize[i]);
		(stroke)(255, 100);
		diamond(logoPos[i][0][0], logoPos[i][0][1], logoSize[i] + 1);
		diamond(logoPos[i][0][0], logoPos[i][0][1], logoSize[i] - 1);
	}
	for (let i = 0; i < logoPos.length; i++) {
		logoPos[i][0][0] += (logoPos[i][1][0] - logoPos[i][0][0]) / 10;
		logoPos[i][0][1] += (logoPos[i][1][1] - logoPos[i][0][1]) / 10;
	}
	textAlign(CENTER, CENTER);
	textFont(gFont, 40);
	fill(255);
	noStroke();
	text("♪", 50, 350);
}

function draw() {
	image(back, 300, 200);
	if (scene === "home") {
		homeScreen();
	} else
	if (scene === "help") {
		helpScene();
	} else
	if (scene === "score") {
		scoreScene();
	} else
	if (scene === "play") {
		playScene();
	} else {
		levelScene(parseInt(scene, 10));
	}
	logo();
	cursor("NONE");
	(stroke)(255, 200);
	(fill)(255, pressed ? 150 : 0);
	ellipse(mouseX, mouseY, 10, 10);
	clicked = false;
	curKey = "";
	keyUsed = false;
	arrowColor = color(255);
	semiDone = lerpColor(color(255), color(255, 222, 238), 1 / 2);
}
