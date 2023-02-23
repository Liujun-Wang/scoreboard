let homeScore = document.getElementById("home-score");
let awayScore = document.getElementById("away-score");

let homeTotalScore = 0;
let awayTotalScore = 0;

function homeAdd1() {
    homeTotalScore += 1;
    homeScore.textContent = homeTotalScore;
}

function homeAdd2() {
    homeTotalScore += 2;
    homeScore.textContent = homeTotalScore;
}

function homeAdd3() {
    homeTotalScore += 3;
    homeScore.textContent = homeTotalScore;
}

function awayAdd1() {
    awayTotalScore += 1;
    awayScore.textContent = awayTotalScore;
}

function awayAdd2() {
    awayTotalScore += 2;
    awayScore.textContent = awayTotalScore;
}

function awayAdd3() {
    awayTotalScore += 3;
    awayScore.textContent = awayTotalScore;
}
