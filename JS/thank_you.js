function copyURL() {
    // Get the text field
    var copyText = "https://freedomacademy.com";
    navigator.clipboard.writeText(copyText);

    alert('The URL has been copied.')
}


$('#copyURL').click(copyURL);