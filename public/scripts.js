// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function startOver() {
    document.getElementById("input").reset()
    document.getElementById("shots").style.display = "none"
    document.getElementById("results").style.display = "none"
    document.getElementById("rules").style.display = "none"
    document.getElementById("shotImg").style.display = "none"
    document.getElementById("oppShotImg").style.display = "none"
    document.getElementById("shotImgLab").style.display = "none"
    document.getElementById("oppShotImgLab").style.display = "none"

}


function onPageLoad() {
    document.getElementById("shots").style.display = "none"
    document.getElementById("results").style.display = "none"
    document.getElementById("rules").style.display = "none"
    document.getElementById("shotImg").style.display = "none"
    document.getElementById("oppShotImg").style.display = "none"
    document.getElementById("shotImgLab").style.display = "none"
    document.getElementById("oppShotImgLab").style.display = "none"
}

function help() {
    if (document.getElementById("rules").style.display == "none") {
        document.getElementById("rules").style.display = "block";
    } else {
        document.getElementById("rules").style.display = "none";
    }
}


function toggleShots() {
    let oppo = document.getElementById('opponent');
    let tst = document.getElementById("rpsls");
    if (oppo.checked == true) {
        document.getElementById("shots").style.display = "block"
        if (tst.checked == false) {
            document.getElementById("rpslsShots").style.display = "none"
        } else {
            document.getElementById("rpslsShots").style.display = "inline"
        }
    } else {
        document.getElementById("shots").style.display = "none"
    }
}


async function playGame () {
    let game = "rps"
    for (var x of document.getElementsByName("gameType")) {
        if (x.checked == true) { game = x.id }
    }
    
    let move = "rock"
    for (var x of document.getElementsByName("shot")){
        if (x.checked == true) { move = x.id }
    }

    let baseurl = window.location.href.concat('app/')
    let url = baseurl.concat(gameType.concat('/play/'))

    let oppo = document.getElementById('opponent').checked
    if (oppo) { url = url.concat(shot) }

    let response = await fetch(url)
    let result = await response.json()

    resultString = 'You selected ' + result.player

    document.getElementById("shotImg").setAttribute("src", "img/"+result.player+".jpg");
    document.getElementById("shotImgLab").style.display = "block"
    document.getElementById("shotImg").style.display = "inline"
    document.getElementById("oppShotImg").style.display = "none"
    document.getElementById("oppShotImgLab").style.display = "none"

    if (oppo) {
        resultString = resultString + ' and your opponent selected ' + result.opponent + '. Result: ' + result.result;
        document.getElementById("oppShotImg").setAttribute("src", "img/"+result.opponent+".jpg");
        document.getElementById("oppShotImgLab").style.display = "block"
        document.getElementById("oppShotImg").style.display = "inline"
    }

    document.getElementById("results").innerText = resultString
    document.getElementById("results").style.display = "block"
}


