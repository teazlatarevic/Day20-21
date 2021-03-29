var textArea = document.getElementById("text-area");

function pressed(obj) {
    (document.getElementById("capsLockChecker").value === "true" || document.getElementById("shiftChecker").value === "true") ?
    textArea.value += obj.value.toUpperCase() : textArea.value += obj.value;
    document.getElementById("shiftChecker").value = "false";
    textArea.focus();   
}

function specialKeyPress(obj) {
    switch (obj.value) {
        case "Enter":
            textArea.value += "\n";
            break;
        case "Space":
            textArea.value += " ";
            break;
        case "Backspace":
            textArea.value = textArea.value.replace(textArea.value.substr(textArea.value.length -1), "");
            break;
        case "OK":
            alert(textArea.value);
            break;
        case "Caps Lock":
            var capsLockChecker = document.getElementById("capsLockChecker").value;
            (capsLockChecker === "true")  ?
            document.getElementById("capsLockChecker").value = "false" :
            document.getElementById("capsLockChecker").value = "true"; 
            break;
        case "Shift":
            document.getElementById("shiftChecker").value = "true";
            break;
    }
    textArea.focus();
}