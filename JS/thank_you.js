function copyURL() {
    // Get the text field
    var copyText = "https://freedomacademy.com";
    navigator.clipboard.writeText(copyText);
}


$('#copyURL').click(copyURL);