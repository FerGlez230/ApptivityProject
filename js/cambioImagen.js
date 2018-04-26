//@prepros-prepend jquery-3.1.1.js

$(document).ready(function(){

    (function( $, window, document, undefined){
        $('.inputfile' ).each( function()
        {
            var $input   = $( this ),
                $label   = $input.next( 'label' );
            $input.on( 'change', function( e )
            {
                var fileName = '';
                if( e.target.value )
                    fileName = e.target.value.split( '\\' ).pop();

                if( fileName )
                    $label.find('span').html(fileName);
            });
        });
    })(jQuery, window, document);

    $('#fileinputI').change(function(e) {
        addImage(e); 
    });

    function addImage(e){
        var file = e.target.files[0],
        imageType = /image.*/;

        if (!file.type.match(imageType))
        return;

        var reader = new FileReader();
        reader.onload = fileOnload;
        reader.readAsDataURL(file);
    }

    function fileOnload(e) {
        var result=e.target.result;

        //$('.prevImage').css('display', 'block');

        var anchorE = ($('.prevImage').width() / 15)*7;
        $('.showImg').css({ 'height': anchorE + "px" });
        $('.showImg').css({ 'width': anchorE + "px" });

        $('#salidaImagen').attr("src",result);
    }

});