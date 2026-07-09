


$(document).ready(function () {
    $(".owl-carousel1").owlCarousel({
        nav: true,
        items: 8,
        loop:true,
        autoplay:true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1

            },
            // breakpoint from 480 up
            480: {
                items: 2
            },
            // breakpoint from 768 up
            768: {
                items:3
            },
            1200:{
                items: 8
            }
        }
       
    });

    $(".owl-carousel2").owlCarousel({
        nav: true,
        loop: true,
        autoplay: true,
        navText: ['<i class="fa-solid fa-angle-left text-white bg-dark py-3"></i>',
            '<i class="fa-solid fa-angle-right text-white bg-dark py-3"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1

            },
            // breakpoint from 480 up
            480: {
                items: 2
            },
            // breakpoint from 768 up
            768: {
                items:3
            },
            1200:{
                items: 5
            }
        }
    });

    $(".owl-carousel3").owlCarousel({
        nav: true,
        loop: true,
        autoplay: true,
        items:1,
        navText: ['<i class="fa-solid fa-angle-left text-black fs-3 py-3"></i>',
            '<i class="fa-solid fa-angle-right text-black  fs-3  py-3"></i>'],
    });
    $(".owl-carousel4").owlCarousel({
        nav: true,
        loop: true,
        autoplay: true,
        items:3,
        margin:20,
        navText: ['<i class="fa-solid fa-angle-left text-black bg-white fs-3 py-3"></i>',
            '<i class="fa-solid fa-angle-right text-black  fs-3 bg-white  py-3"></i>'],
    });

});



let owl = $('.owl-carousel3'); 

let imgClickElements = document.querySelectorAll('.imgClick');

imgClickElements.forEach((img, index) => {
    img.addEventListener('click', () => {
        imgClickElements.forEach(el => el.classList.remove('border-dark'));
        img.classList.add('border-dark')
        owl.trigger('to.owl.carousel', [index, 300]); 
        
    });
});

const pathElements = document.querySelectorAll('.path-hover');


pathElements.forEach(element => {
    
    element.addEventListener('mouseenter', () => {
        element.style.textDecoration= 'underline  '; 
    });
    element.addEventListener('mouseleave', () => {
        element.style.textDecoration= 'none  ';
    });
    
});



let handleCategory = (type) => {
    let category1 = document.querySelectorAll("[data-category = 'men']")
    let category2 = document.querySelectorAll("[data-category= 'women']")
    let divs = document.querySelectorAll("[data-category]")
 
  
    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.add('d-none')
    }

    if (type == 'men') {
        for (let i = 0; i < category1.length; i++) {
            category1[i].classList.remove('d-none');
        }
    }
    else {
        for (let i = 0; i < category2.length; i++) {
            category2[i].classList.remove('d-none');
        }
    }

}

let mainImage = document.getElementById('mainImage');
let item = document.querySelectorAll('.imgClick2');
item.forEach(ele => {
    ele.addEventListener('click', function() {
       
        let newSrc = this.getAttribute('src');
        mainImage.setAttribute('src', newSrc);
    });
});

