jQuery(document).ready(function($){
    $('.custom_media_upload').on( 'click', function(e) {
        var button_clicked = $(this);
        e.preventDefault();
        var image = wp.media({ 
            title: 'Upload Image',
            // mutiple: true if you want to upload multiple files at once
            multiple: false
        }).open()
        .on('select', function(e){
            // This will return the selected image from the Media Uploader, the result is an object
            var uploaded_image = image.state().get('selection').first();
            // We convert uploaded_image to a JSON object to make accessing it easier
            // Output to the console uploaded_image
            var image_id = uploaded_image.toJSON().id;
            // Let's assign the url value to the input field
            button_clicked.parent().find('.custom_media_id').val(image_id);
            button_clicked.parent().find('.custom_media_image').attr("src", image_url);
        });
    });
});