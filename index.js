let hScore = document.getElementById("homeScore")
hIniScore = 0

let gScore = document.getElementById("guestScore")
gIniScore = 0

function incOneHome(){
    hIniScore += 1
    hScore.textContent = hIniScore
}

function incTwoHome(){
    hIniScore += 2
    hScore.textContent = hIniScore
}

function incThreeHome(){
    hIniScore += 3
    hScore.textContent = hIniScore
}

function incOneGuest(){
    gIniScore += 1
    gScore.textContent = gIniScore
}

function incTwoGuest(){
    gIniScore += 2
    gScore.textContent = gIniScore
}

function incThreeGuest(){
    gIniScore += 3
    gScore.textContent = gIniScore
}

function resetScore(){
    hScore.textContent = 0
    gScore.textContent = 0
    hIniScore = 0
    gIniScore = 0
}