// Get the modal
let modal = document.getElementById("myModal");
let modalBtn = document.getElementById("popup");
let span = document.getElementById("closeModal");

// When the user clicks on the button, open the modal
modalBtn.addEventListener('click', function() {
    modal.style.display = "block";
});

span.addEventListener('click', function(e) {
    modal.style.display = "none";
});

window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
      }
});