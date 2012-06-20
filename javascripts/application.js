$(document).ready(function() {
    $('.link-to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 'slow');
    });

    $('nav a').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:$(this.hash).offset().top}, 'slow');
        if($(this).attr("href") === "#pre-register") {
            $('input[name="name"]').focus();
        }
    });


    $(':input').focus(function() {
        var content = this.getAttribute('value');

        if($(this).val() == content) {
            $(this).val('');
            //$(this).addClass('selected');
        }
    });
    $(':input').blur(function() {
        var content = this.getAttribute('value');

        if($(this).val() === '') {
            $(this).val(content);
            //$(this).removeClass('selected');
        }
    });

});
