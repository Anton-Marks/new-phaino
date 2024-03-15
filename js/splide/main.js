document.addEventListener( 'DOMContentLoaded', function () {

    $('.image-carousel').slick({
        infinite: true,
        slidesToShow: 1, // Shows a three slides at a time
        slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
        arrows: false, // Adds arrows to sides of slider
        dots: true, // Adds the dots on the bottom
        //prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        //nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
      });

} );
