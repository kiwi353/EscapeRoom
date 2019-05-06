function checkPasscodeTest() {
    console.log(document.getElementById("passcode").value);
    if (document.getElementById("passcode").value == "test") {
        document.getElementById("lockImage").src = "./Images/unlocked.png";
        document.getElementById("lockImage").stlye.width = "40%";
    }
}

function checkPasscode1() {
    console.log(document.getElementById("passcode").value);
    if (document.getElementById("passcode").value == "1865") {
        document.getElementById("lockImage").src = "./Images/unlocked.png"
        document.getElementById("lockImage").stlye.width = "40%";
    }
}

function checkPasscode2() {
    console.log(document.getElementById("passcode").value);
    if (document.getElementById("passcode").value == "1376") {
        document.getElementById("lockImage").src = "./Images/unlocked.png"
        document.getElementById("lockImage").stlye.width = "40%";
    }
}

function checkPasscode3() {
    console.log(document.getElementById("passcode").value);
    if (document.getElementById("passcode").value == "6429") {
        document.getElementById("lockImage").src = "./Images/unlocked.png"
        document.getElementById("lockImage").stlye.width = "40%";
    }
}

function checkPasscode4() {
    console.log(document.getElementById("passcode").value);
    if (document.getElementById("passcode").value == "3174") {
        document.getElementById("lockImage").src = "./Images/unlocked.png"
        document.getElementById("lockImage").stlye.width = "40%";
    }
}

function checkPasscodeBell() {
    console.log(document.getElementById("passcode").value);
    if (document.getElementById("passcode").value == "G67AYQT9") {
        document.getElementById("bellSound").play();
    }
}