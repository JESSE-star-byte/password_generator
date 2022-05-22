function generatePassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxzy!#¤%&/()ABCDEFGHIJKLMNOPQRSTUVXYZ";
    var passwordLength = document.getElementById("length").value;
    var password="";

    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber+1);
    }
    document.getElementById("password").value = password;
}
function copyClipboard() {
    var copyText = document.getElementById("password");
    navigator.clipboard.writeText(copyText.value);
}