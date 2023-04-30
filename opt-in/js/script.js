// Get the modal
const modal = document.getElementById("myModal");
const modalBtn = document.getElementById("cta-btn");
const secondBtn = document.getElementById("cta-btn-sm");
const span = document.getElementById("closeModal");
const image = document.querySelector('#cta-img')

function openModal(e) {
    modal.style.display = "block";
    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });
}

// When the user clicks on the button, open the modal
modalBtn.addEventListener('click', openModal);
image.addEventListener('click', openModal);
secondBtn.addEventListener('click', openModal);

span.addEventListener('click', function(e) {
    modal.style.display = "none";
    $('html, body').css({
        overflow: 'auto',
        height: 'auto'
    });
});

window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
      }
});