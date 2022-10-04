function copyToClipboard() {
    var copyText = "https://freedomacademy.be/"

    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
        console.log(copyText)
        alert(`${copyText} has been copied to your clipboard`);
    });
  }

$('#copyURL').click(function(){
    copyToClipboard();
});