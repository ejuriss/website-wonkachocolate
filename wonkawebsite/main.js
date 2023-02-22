// jQuery Smooth Scroll
$('.nav a').on('click', function(e) {
    if(this.hash !== '') {
        e.preventDefault();
        
        var hash = this.hash;
        
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            }, 
            800
        );
    }
});