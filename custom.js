//Using jQuery linking the global header and footer files
$(document).ready(function(){
    //Calling our global header and footer
    $(function (){
        $("#header").load("header.html");
        $("#footer").load("footer.html");
    });
});
