// By Chris Coyier & tweaked by Mathias Bynens

$(function() {

    // Find all YouTube videos
    var $allVideos = $("iframe[src*='www.youtube.com']");
    console.log($allVideos);

    // The element that is fluid width
    $fluidEl = $("#content");

    // Figure out and save aspect ratio for each video
    $allVideos.each(function() {
        console.log("allvideos...");
        $(this)
        .data('aspectRatio', this.height / this.width)

        // and remove the hard coded width/height
        .removeAttr('height')
        .removeAttr('width');
    });

    // When the window is resized
    // (You'll probably want to debounce this)
    $(window).resize(function() {
        var scaleFactor = 0.8;
        var newWidth = $fluidEl.width() * scaleFactor;
                        
        // Resize all videos according to their own aspect ratio
        $allVideos.each(function() {
            var $el = $(this);
            $el
            .width(newWidth)
            .height(newWidth * $el.data('aspectRatio'));
        });

    // Kick off one resize to fix all videos on page load
    }).resize();

});
