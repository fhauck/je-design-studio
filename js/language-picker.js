/*var language = window.navigator.userLanguage || window.navigator.language;


// Browser-Sprache auslesen
if(language.indexOf('de') !== -1) {
	testsprache = 'de';
} else {
	testsprache = 'en';
}
// Browser-Sprache an den Body anhängen
$('body').attr( "id",'lang-'+testsprache);
// Sprache wechseln (hier mit jquery auf bestimmte Links)

*/

// URL auslesen und die einzelnen URL Teile in Array aufsplitten
var pathArray = window.location.pathname.split('/');
var secondLevelLocation = pathArray[1];

// Abfrage ob die zweite Stelle der URL einen Language Code besitzt
var selectedLanguage = 'en';

if(secondLevelLocation === 'de' || secondLevelLocation === 'it'){
	selectedLanguage = secondLevelLocation;
}

// Language Switcher mit korrekter Sprache Klasse active zuordnen
$('.lang-switch li a.'+selectedLanguage).addClass('active');


/*
$('.lang-switch li a[lang="'+testsprache+'"]').addClass('active');

$(".lang-switch").on('click',function(e){
	e.preventDefault();
	$("body").attr( "id",'lang-'+$(this).attr('lang'));
});
*/