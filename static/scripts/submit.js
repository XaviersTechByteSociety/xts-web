window.onload = function () {

    const deadline = new Date('2024-10-01T12:00:00'); // October 1, 2024 12:00 PM
    const currentDate = new Date();

    if (urlParams.get('success') === 'true') {
        hideMain();
        showThanks();
    }

    if (currentDate < deadline) {
        hideMain()
        showPriorDeadline();
    }

};

function countWords(textarea) {
    textarea = document.getElementById('about');
    const sublabel = document.querySelector('.sublabel');
    const maxWords = 100;

    const words = textarea.value.trim().split(/\s+/);
    const wordCount = words.filter(word => word.length > 0).length;

    if (wordCount >= maxWords) {
        textarea.value = words.slice(0, maxWords).join(' ');
        sublabel.style.color = 'red';
    }
    else{
        sublabel.style.color = 'white';
    }

    const remainingWords = maxWords - wordCount;
    sublabel.innerHTML = `(${Math.max(remainingWords, 0)} words)`;
    // document.getElementById('wordCount').innerText = `${words.length}/${wordLimit} words`;
}

function showPriorDeadline() {
    const responseDiv = document.createElement('div');
    responseDiv.innerHTML = `
    <center>
        <div class="submit-response">
            <h1>Registrations will be opened on</h1>
            <h2>October 1st, 2024 - 12:00 PM onwards</h2>
        </div>
    </center>`;
    form.insertAdjacentElement('afterbegin', responseDiv);
}

function showThanks() {
    const responseDiv = document.createElement('div');
    responseDiv.innerHTML = `
    <center>
        <div class="submit-response">
            <h1>Your response has been recorded</h1>
            <h2>We will be reaching out soon</h2>
        </div>
    </center>`;
    form.insertAdjacentElement('afterbegin', responseDiv);
}

function hideMain() {
    document.getElementById('main-info').remove();
    document.getElementById('about-area').remove();
    document.getElementById('form-submit').remove();
    document.getElementById('member').remove();
}

function submitCheck() {
    if (document.getElementById("ok").checked === true) {
        if (validateInputs()) {
            document.getElementById("submit").disabled = false;
        }
        else {
            document.getElementById("submit").disabled = true;
            document.getElementById("ok").checked = false;
        }
    }
    else {
        document.getElementById("submit").disabled = false;
    }
}

function validateInputs() {
    var allCorrect = true;

    var name = document.getElementById('fullName').value;
    var dept = document.getElementById('deptSelect').value;
    var sem = document.getElementById('semSelect').value;
    var examroll = document.getElementById('examroll').value;
    var email = document.getElementById('email').value;
    var whatsapp = document.getElementById('whatsapp').value;
    var team = document.getElementById('teamSelect').value;
    var skill = document.getElementById('skillSelect').value;
    var about = document.getElementById('about').value;

    if (name.length === 0) {
        alert("Name cannot be empty");
        allCorrect = false;
    }

    if (dept === "Select") {
        alert("Select a department");
        allCorrect = false;
    }

    if (sem === "Select") {
        alert("Select a semester");
        allCorrect = false;
    }

    if(examroll.length===12) {
        if (!examroll.match(/^[0-9]{2}[A-Za-z]{4}[0-9]{6}$/)) {
            alert("Invalid Exam Roll Format");
            allCorrect = false;
        }
    }

    if (!(email.match('[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+\.[a-z]+'))) {
        alert("Invalid Email ID");
        allCorrect = false;
    }

    if (whatsapp.length !== 10 && !(whatsapp.length > 10 && whatsapp.startsWith("+91"))) {
        alert("Invalid Whatsapp No.");
        allCorrect = false;
    }

    if (team === "Select") {
        alert("Select a Team");
        allCorrect = false;
    }

    if (skill === "Select") {
        alert("Select a skill");
        allCorrect = false;
    }

    if (about.length === 0) {
        alert("Personal Insight cannot be empty");
        allCorrect = false;
    }

    return allCorrect;
}

function checkDeadline() {
}