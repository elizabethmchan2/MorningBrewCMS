$(document).on('ready page:load', function () {
    if (typeof tinyMCE != 'undefined') {
        tinyMCE.init({
            selector: "textarea.tinymce",
            toolbar: "undo redo | styleselect | bold italic strikethrough underline forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | preview code" ,
            plugins: "lists,textcolor, preview,image,link,code,codesample,autoresize,imagetools,media,table,insertdatetime,charmap,print,preview,anchor,searchreplace,visualblocks,fullscreen, wordcount, powerpaste",
            powerpaste_allow_local_images: true,
            powerpaste_word_import: 'prompt',
            powerpaste_html_import: 'prompt',
        });
    } else {
        setTimeout(arguments.callee, 50);
    }
});