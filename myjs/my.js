$(document).ready(function() {
 // executes when HTML-Document is loaded and DOM is ready
 	$('#submenu').hide();
    $('#content').load('slider.html').fadeIn('slow');
    $('#content').slideDown('slow');
    })

function products(){
	 	$('#submenu').toggle('fast');
	 	$('#content').slideToggle('slow');
    //$('#content').load('slider.html').fadeIn('slow');

	}
function contact(){
    $('#content').load('Contact.html').fadeIn('slow');

    }
function resume(){
    $('#content').load('Resume.html').fadeIn('slow');

    }
