$('.tipos-de-cabelo').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    prevArrow: '<div class="slick-prev"><img src="img/prev-slick.png"/></div>',
    nextArrow: '<div class="slick-next"><img src="img/next-slick.png"/></div>',
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    ]
});

$('.banner-tratamento').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    prevArrow: '<div class="slick-prev"><img src="img/prev-slick.png"/></div>',
    nextArrow: '<div class="slick-next"><img src="img/next-slick.png"/></div>',
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    ]
});

//Slider principal
$('.banner-principal').slick({
    dots: false,
    infinite: true,
    arrow: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
});

function changeText() {
    var botaoComprar = document.querySelector('.buy-button');
    botaoComprar.text = 'COMPRE JÁ';
}

$(document).ready(function () {
    changeText();
    $(".valor-dividido").insertAfter(".preco-a-vista");
    $('.shipping-value').trigger("click");
});

