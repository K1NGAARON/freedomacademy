const reviewHolder = document.querySelector('#gallery');
const reviews = [
    {
        img: './img/img-1.JPG',
    },
    {
        img: './img/img-2.JPG',
    },
    {
        img: './img/img-3.JPG',
    },
    {
        img: './img/img-4.JPG',
    },
    {
        img: './img/img-5.JPG',
    },
    {
        img: './img/img-6.JPG',
    },
    {
        img: './img/img-7.JPG',
    },
    {
        img: './img/img-8.JPG',
    },
    {
        img: './img/img-9.JPG',
    },
    {
        img: './img/img-10.JPG',
    },
    {
        img: './img/img-11.JPG',
    },
    {
        img: './img/img-12.JPG',
    },
    {
        img: './img/img-13.JPG',
    }
];


function createGallery() {
    for (let i = 0; i < reviews.length; i++) {
        const galleryIMG = `
            <div class="item">
                <img src="${reviews[i].img}" alt="Freedom Academy Review">
            </div>
        `;

        reviewHolder.insertAdjacentHTML("beforeend", galleryIMG);
    };
};


$(document).ready(createGallery);