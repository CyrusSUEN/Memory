var host = "lab-lamp.scm.cityu.edu.hk",
  port = 8094, CLKTEST = 0, wordnet,
	arrayLists = [], colorVals = [],
  dbug = 0, timeStamp = 0, bgTimeStamp = 0,
  mode = CLKTEST, stepMs = 1000, bgColor = 0,
  fontColor = 255.0, bgCycleUp = true, font;

var words = ['A', 'raw', 'memory', '.', 'Church', '.', 'A', 'loud', 'room', 'with', 'children', 'playing', ',', 'thoughtlessly', '.', 'Wandering', 'wildly', '.', 'I', 'stand', 'small', 'and', 'young', 'within', 'a', 'chaotic', 'garden', 'of', 'little', 'ideas', 'and', 'unaware', ',', 'tiny', 'minds', '.', 'Colorful', 'toys', 'litter', 'the', 'ground', 'and', 'posters', 'of', 'silent', 'saints', 'loom', '.', 'My', 'mother', 'rises', 'tall', 'and', 'aware', '.', 'She', 'departs', 'gracefully', '.', 'I', 'pull', 'a', 'blue', ',', 'plastic', 'bucket', 'to', 'the', 'door', 'and', 'climb', 'it', '.', 'Staring', 'through', 'the', 'window', '.', 'Bells', 'ringing', '.', 'My', 'mom', 'is', 'walking', 'down', 'a', 'long', 'hall', ',', 'bright', 'with', 'holy', 'light', '.', 'I', 'am', 'trembling', ',', 'abiding', 'while', 'the', 'adults', 'pray', '.', 'I', 'play', ',', 'barely', ',', 'with', 'a', 'little', 'red', 'ambulance', ',', 'watching', 'the', 'empty', 'corridor', '.'];
var allpos = ['-', 'a', 'nn', '-', 'nn', '-', '-', 'a', 'nn', '-', 'nns', 'vbg', '-', 'r', '-', 'vbg', 'r', '-', '-', 'vb', 'a', '-', 'a', '-', '-', 'a', 'nn', '-', 'a', 'nns', '-', 'a', '-', 'a', 'nns', '-', 'a', 'nns', 'vb', '-', 'nn', '-', 'nns', '-', 'a', 'nns', 'vb', '-', '-', 'nn', 'vbz', 'a', '-', 'a', '-', '-', 'vbz', 'r', '-', '-', 'vb', '-', 'a', '-', 'a', 'nn', '-', '-', 'nn', '-', 'vb', '-', '-', 'vbg', '-', '-', 'nn', '-', 'nns', 'vbg', '-', '-', 'nn', '-', 'vbg', '-', '-', 'a', 'nn', '-', 'a', '-', 'a', 'nn', '-', '-', 'vb', 'vbg', '-', 'vbg', '-', '-', 'nns', 'vb', '-', '-', 'vb', '-', 'r', '-', '-', '-', 'a', 'a', 'nn', '-', 'vbg', '-', 'a', 'nn', '-'];
var commons = ['.', ',', 'one', 'I', 'play', 'pull', 'all', 'a', 'an', 'and', 'is', 'it', 'about', 'above', 'across', 'after', 'against', 'around', 'at', 'before', 'behind', 'below', 'beneath', 'beside', 'besides', 'between', 'beyond', 'but', 'by', 'each', 'down', 'during', 'except', 'for', 'from', 'in', 'inside', 'into', 'there', 'like', 'my', 'near', 'of', 'off', 'on', 'out', 'outside', 'over', 'since', 'the', 'through', 'throughout', 'till', 'to', 'toward', 'under', 'until', 'wait', 'stand', 'plus', 'up', 'upon', 'with', 'without', 'according', 'because', 'way', 'addition', 'front', 'regard', 'instead', 'account'];
var ignores = 'womb-to-tomb|hearable|lav|bimester|quadripara|quintipara|lebensraum|ells|chutzpanik|free-lances|puerpera|inspissate|pyrolatries|inexperient|primipara|nonesuches|jimhickeys|brainpowers|cacodaemons|fakirs|kalifahs|nonsuches';

function preload() {

  font = loadFont('LondonBetween.ttf');
}

function setup() {

  createCanvas(1100, 800);

  textFont(font, 48);

  wordnet = new RiWordNet(host, 8094);
  for (var i = 0; i < words.length; i++) {

    arrayLists[i] = [words[i]];
    colorVals[i] = 255.0;
  }

  reformat();
}

function draw() {

  if (CLKTEST && mode == 0) return;

  if (millis() - bgTimeStamp > 100) {

    bgColor += bgCycleUp ? .42 : -.42;
    bgCycleUp = (bgColor > 254) ? false : (bgColor < 1) ? true : bgCycleUp;
    fontColor = fontColor - 1.0;
    bgTimeStamp = millis();
  }

  tryReplacement();

  background(bgColor);
  drawText();
}

function drawText() {

  noStroke();
  fill(255);
  text("DrawText", 10, 40);

  // add code here
}

function tryReplacement() {

  // add code here
}

function reformat() {
	
  // add code here
}

function mouseReleased() {

  if (CLKTEST) {

    mode = CLKTEST;
    timeStamp = -stepMs;
  }
}
