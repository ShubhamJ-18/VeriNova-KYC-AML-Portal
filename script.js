const video = document.getElementById("video");

function startCamera() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(stream => video.srcObject = stream)
        .catch(() => alert("Camera permission required"));
}

function runKYC() {
    updateCheck("face", "Face Match");
    updateCheck("person", "Single Person");
    updateCheck("bg", "Background");
    updateCheck("audio", "Audio Quality");

    setTimeout(() => {
        document.getElementById("finalKYC").innerText = "KYC Status: Verified";
        document.getElementById("finalKYC").style.color = "green";
        document.getElementById("dashKYC").innerText = "Verified";
        document.getElementById("dashKYC").style.color = "green";
    }, 1200);
}

function updateCheck(id, text) {
    const el = document.getElementById(id);
    el.innerText = text + ": Passed";
    el.style.color = "green";
}

function checkAML() {
    document.getElementById("amlResult").innerText = "AML Status: High Risk Transaction Found";
    document.getElementById("amlResult").style.color = "red";
    document.getElementById("dashAML").innerText = "Flagged";
    document.getElementById("dashAML").style.color = "red";
}
