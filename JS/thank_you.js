function copyToClipboard() {
    var copyText = "Just signed up for a Freedom Call! ⚡️Let's grow together and watch the video below, in case you want to learn how to start & scale your own online service business from scratch, step-by step! #FreedomAcademy"

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