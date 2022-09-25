function copyToClipboard() {
    var copyText = 'https://freedomacademy.be'
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


// To get the most out of this experience, join the Facebook Group. This is where you'll get access to our live Q&A sessions plus special bonus trainings leading up to the call.

// Plus it's where most guys find motivation and inspiration to take action by connecting with others inside the community.

// Click below to join the group now and then make a post telling your new to the #FreedomCommunity where you're from, the #1 reason why you booked a call, and what you want to get out of it.