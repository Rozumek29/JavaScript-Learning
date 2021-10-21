function generatePassword() {

    var newPassword = "";
    let word = document.getElementById("word").value;

    for (let i = 0; i < word.length; i++){
         let x = word[Math.floor(Math.random() * word.length)];
         if (x !== ' '){
             newPassword += x;
         }
    }

    alert("Twoje nowe hasło to: " + newPassword);
}