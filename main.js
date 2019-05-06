function checkPasscodeTest() {
    console.log(document.getElementById("passcode").value);
    if (document.getElementById("passcode").value == "test") {
        document.getElementById("lockImage").src = "./Images/unlocked.png";
        document.getElementById("lockImage").stlye.width = "40%";
    }
}

function checkPasscode1() {
    console.log(document.getElementById("passcode").value);
    if (document.getElementById("passcode").value == "test") {
        document.getElementById("lockImage").src = "./Images/unlocked.png"
        document.getElementById("lockImage").stlye.width = "1865";
    }
}

function checkPasscode2() {
    console.log(document.getElementById("passcode").value);
    if (document.getElementById("passcode").value == "test") {
        document.getElementById("lockImage").src = "./Images/unlocked.png"
        document.getElementById("lockImage").stlye.width = "1376";
    }
}

function checkPasscode3() {
    console.log(document.getElementById("passcode").value);
    if (document.getElementById("passcode").value == "test") {
        document.getElementById("lockImage").src = "./Images/unlocked.png"
        document.getElementById("lockImage").stlye.width = "6429";
    }
}

function checkPasscode4() {
    console.log(document.getElementById("passcode").value);
    if (document.getElementById("passcode").value == "test") {
        document.getElementById("lockImage").src = "./Images/unlocked.png"
        document.getElementById("lockImage").stlye.width = "3174";
    }
}

function checkPasscodeBell() {
    console.log(document.getElementById("passcode").value);
    if (document.getElementById("passcode").value == "G67YQT9") {
        document.getElementById("bellSound").play();
    }
}