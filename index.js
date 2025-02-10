let pointsHome = 0;
let pointsGuest = 0;
let homePoints = document.getElementById('home-score');
let guestPoints = document.getElementById('guest-score');

function homeOne() {
    pointsHome += 1;
    homePoints.textContent = pointsHome;
}

function homeTwo() {
    pointsHome += 2;
    homePoints.textContent = pointsHome;
}

function homeThree() {
    pointsHome += 3;
    homePoints.textContent = pointsHome;
}

function guestOne() {
    pointsGuest += 1;
    guestPoints.textContent = pointsGuest;
}

function guestTwo() {
    pointsGuest += 2;
    guestPoints.textContent = pointsGuest;
}

function guestThree() {
    pointsGuest += 3;
    guestPoints.textContent = pointsGuest;
}

function reset() {
    pointsGuest = 0;
    pointsHome = 0;
    guestPoints.textContent = pointsGuest;
    homePoints.textContent = pointsHome;
}