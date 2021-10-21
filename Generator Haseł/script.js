function generatePassword() {

    var newPassword = "";
    let word = document.getElementById("word").value;

    for (let i = 0; i < word.length; i++){
         newPassword += word[Math.floor(Math.random() * word.length)];
    }

    alert("Twoje nowe hasło to: " + newPassword);
}