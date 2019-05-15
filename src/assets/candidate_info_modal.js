$(document).ready(function() {
    
    var trigger = $('.sidenav_modal ul li');
    var container = $('.content-candidate');

    trigger.on('click', function() {
        trigger.children('i').css({backgroundColor:'white',borderColor:'#8a9ba8', color:'#8a9ba8'});
        $(this).children('i').css({backgroundColor:'#76d691',borderColor:'#76d691', color:'white'});
        container.load($(this).data('target') + '.html');
    });
});
