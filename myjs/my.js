$(document).ready(function() {
 // executes when HTML-Document is loaded and DOM is ready
 	//$('#submenu').hide();
    $('#content').load('slider.html').fadeIn('slow');

    })

function products(){
	 	//$('#submenu').toggle('fast');
    $('#content').load('slider.html').fadeIn('slow');
    closeNav();
    //$('#content').load('slider.html').fadeIn('slow');

	}
function contact(){
    $('#content').load('Contact.html').fadeIn('slow');
    closeNav();
    }
function resume(){
    $('#content').load('Resume.html').fadeIn('slow');

    }
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}