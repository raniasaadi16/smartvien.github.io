$('.loop').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:50,
    responsive:{
        600:{
            items:2
        }
    },
    nav: true
});
$(document).ready(function() {
    var form = $('#contactForm'); // contact form
    var submit = $('#submit-btn'); // submit button

    // form submit event
    form.on('submit', function(e) {
        e.preventDefault(); 

        $.ajax({
            url: 'script/contact_process.php', 
            type: 'POST', 
            dataType: 'html', 
            data: form.serialize(), 
           // crossDomain: true,
            beforeSend: function() {
                submit.html('Sending....'); // change submit button text
            },
            success: function(data) {
                $('.modal-body').html(data).css('color', 'green');
                $('.modal').modal('show') // you need bootstrap
                form.trigger('reset'); // reset form
                submit.html('Send');  // reset submit button text
            },
            error: function(e) {
                $('.modal-body').html('error!, please try again').css('color', 'red');
                $('.modal').modal('show')
                submit.html('Send'); 
            }
        });
    });
});

let navLinks = document.querySelectorAll("nav ul li a");

// for each link 
navLinks.forEach((link) => {
    link.addEventListener("click",(e) => {
        e.preventDefault();
        // get the data-link value
        let targetId = link.getAttribute("data-link");
        // scrollTo function
        window.scrollTo({
            top: document.getElementById(targetId).offsetTop-78,
            behavior : "smooth"
        });
        // for mobile version , when you click on link the nav will close 
        // nav.classList.remove("open");
    })
})
// nav bar scroll :
window.addEventListener("scroll",() => {
    // select nav 
    const nav = document.querySelector('nav');
    // add sticky classe when you scroll and remove it when you back to top
    nav.classList.toggle("sticky",window.scrollY > 0);
})