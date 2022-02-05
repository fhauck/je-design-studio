var language = window.navigator.userLanguage || window.navigator.language;
// Browser-Sprache auslesen
if(language.indexOf('de') !== -1) {
	testsprache = 'de';
} else {
	testsprache = 'en';
}
// Browser-Sprache an den Body anhängen
$('body').attr( "id",'lang-'+testsprache);
// Sprache wechseln (hier mit jquery auf bestimmte Links)
$(".lang-switch").on('click',function(e){
	e.preventDefault();
$("body").attr( "id",'lang-'+$(this).attr('lang'));
});