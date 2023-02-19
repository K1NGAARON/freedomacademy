// Get the modal
const modal = document.getElementById("myModal");
const modalBtn = document.getElementById("popup");
const span = document.getElementById("closeModal");
const image = document.querySelector('#image')

function openModal(e) {
    modal.style.display = "block";
}

// When the user clicks on the button, open the modal
modalBtn.addEventListener('click', openModal);
image.addEventListener('click', openModal);

span.addEventListener('click', function(e) {
    modal.style.display = "none";
});

window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
      }
});