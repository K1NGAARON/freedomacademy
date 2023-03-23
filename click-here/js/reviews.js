const reviews = [
    {
        img: '/click-here/img/reviews/review1.jpg'
    },
    {
        img: '/click-here/img/reviews/review2.jpg'
    },
    {
        img: '/click-here/img/reviews/review3.jpg'
    },
    {
        img: '/click-here/img/reviews/review4.jpg'
    },
    {
        img: '/click-here/img/reviews/review5.jpg'
    },
    {
        img: '/click-here/img/reviews/review6.png'
    },
    {
        img: '/click-here/img/reviews/review7.jpg'
    },
    {
        img: '/click-here/img/reviews/review8.jpg'
    },
    {
        img: '/click-here/img/reviews/review9.jpg'
    },
    {
        img: '/click-here/img/reviews/review10.jpg'
    },
];

function addReviews(e) {
    const target = document.querySelector('#reviews');

    for (let i = 0; i < reviews.length; i++) {
        const template = `
            <div class="item">
                <img src="${reviews[i].img}" alt="Freedom Academy review">
            </div>
        `;
        target.insertAdjacentHTML('beforeend', template);
    }
};

$(document).ready(addReviews);