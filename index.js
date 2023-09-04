const delay = ms => new Promise(res => setTimeout(res, ms))

const jitteringLetters = [
	"A","b","$","x","e","%","G","H","j","J","*","L","m",
	"N","O","$","Q","|","!","&","U","V","@","X","(","x"
];

async function writeWithJitter(elementId, jitterDelay, onFinish) {
    const element = document.getElementById(elementId);
    let elementContent = element.innerHTML;
    element.innerHTML = "";
    for (let i = 0; i < elementContent.length; i++) {
        let currentChar = elementContent[i];
        let actualContent = element.innerHTML;
        for (let j = 0; j < 5 & Math.random() > 0.8; j++) {
            element.innerHTML = actualContent + jitteringLetters[Math.floor(Math.random() * jitteringLetters.length)] + " ▍";
            await delay(jitterDelay);
            element.innerHTML = actualContent;
        }
        element.innerHTML += currentChar;
    }
    onFinish();
}

async function clearLinuxPrefix() {
    document.getElementById("lnxPrefix").innerHTML = "<span style=\"color: #10b981; font-weight: bold;\">Done!</span>";
    await delay(500);
    document.getElementById("lnxPrefix").innerHTML = "<span style=\"color: #000000; font-weight: bold;\">Done!</span>";
    await delay(500);
    document.getElementById("lnxPrefix").innerHTML = "<span style=\"color: #10b981; font-weight: bold;\">Done!</span>";
    await delay(500);
    document.getElementById("lnxPrefix").innerHTML = "<span style=\"color: #000000; font-weight: bold;\">Done!</span>";
    await delay(500);
    document.getElementById("lnxPrefix").innerHTML = "<br>";
}

function changeBirthday() {
    let yearsOld = getAge("07/28/2003");
    document.getElementById("subtitulo").innerHTML += yearsOld + " anos";
}

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

changeBirthday();
//writeWithJitter("descricao", 20, clearLinuxPrefix);
//writeWithJitter("nome", 20);
//writeWithJitter("subtitulo", 20);
