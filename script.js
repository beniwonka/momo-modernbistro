
   $(document).ready(function(){
$('#dropdownSpeise li').click(function() {
    $('#dropdownSpeise li.active').removeClass('active');
    $(this).addClass('active');
	}); 
$('.naviGator button').click(function() {
    $('.naviGator button.activeNavi').removeClass('activeNavi');
    $(this).addClass('activeNavi');
    });
$('.footerInhaltInhaltInhalt p').click(function() {
    $('.naviGator button.activeNavi').removeClass('activeNavi');
    $('#dropdownSpeise li.active').removeClass('active');
    });
});

function dropdownSpeise() {
	var anfahrt = document.getElementById('anfahrt');
	var speiseNavi = document.getElementById('dropdownSpeise');
	var getraenkNavi = document.getElementById('dropdownGetraenke');
speiseNavi.style.display = 'none';
if (speiseNavi.style.display == 'none') {
	anfahrt.style.display = 'none';
	speiseNavi.style.display = 'inline';
	getraenkNavi.style.display = 'none';
}}

function openAnfahrt() {
	var anfahrt = document.getElementById('anfahrt');
	var speiseNavi = document.getElementById('dropdownSpeise');
	document.getElementById('maki').style.display = 'none';
	document.getElementById('nigiri').style.display = 'none';
	document.getElementById('sashimi').style.display = 'none';
	document.getElementById('insideout').style.display = 'none';
	document.getElementById('tempura').style.display = 'none';
	document.getElementById('veggie').style.display = 'none';
	anfahrt.style.display = 'none';
if (anfahrt.style.display == 'none') {
	anfahrt.style.display = 'inline';
	speiseNavi.style.display = 'none';
}}

function openImpressum() {
	var impressum = document.getElementById('impressum');
	var anfahrt = document.getElementById('anfahrt');
	var speiseNavi = document.getElementById('dropdownSpeise');
	document.getElementById('maki').style.display = 'none';
	document.getElementById('nigiri').style.display = 'none';
	document.getElementById('sashimi').style.display = 'none';
	document.getElementById('insideout').style.display = 'none';
	document.getElementById('tempura').style.display = 'none';
	document.getElementById('veggie').style.display = 'none';
	anfahrt.style.display = 'none';
	speiseNavi.style.display = 'inline';
	impressum.style.display = 'inline';
}

function openMaki() {
	var naviMaki = document.getElementById('maki');
	document.getElementById('maki').style.display = 'none';
	document.getElementById('nigiri').style.display = 'none';
	document.getElementById('sashimi').style.display = 'none';
	document.getElementById('insideout').style.display = 'none';
	document.getElementById('tempura').style.display = 'none';
	document.getElementById('veggie').style.display = 'none';
	document.getElementById('impressum').style.display = 'none';
if (naviMaki.style.display == 'none') {
	naviMaki.style.display = 'inline';
}};

function openFutoMaki() {
	var naviFutoMaki = document.getElementById('nigiri');
	document.getElementById('maki').style.display = 'none';
	document.getElementById('nigiri').style.display = 'none';
	document.getElementById('sashimi').style.display = 'none';
	document.getElementById('insideout').style.display = 'none';
	document.getElementById('tempura').style.display = 'none';
	document.getElementById('veggie').style.display = 'none';
	document.getElementById('impressum').style.display = 'none';
if (naviFutoMaki.style.display == 'none') {
	naviFutoMaki.style.display = 'inline';
}};

function openNigiri() {
	var naviNigiri = document.getElementById('sashimi');
	document.getElementById('maki').style.display = 'none';
	document.getElementById('nigiri').style.display = 'none';
	document.getElementById('sashimi').style.display = 'none';
	document.getElementById('insideout').style.display = 'none';
	document.getElementById('tempura').style.display = 'none';
	document.getElementById('veggie').style.display = 'none';
	document.getElementById('impressum').style.display = 'none';
if (naviNigiri.style.display == 'none') {
	naviNigiri.style.display = 'inline';
}};

function openSashimi() {
	var naviSashimi = document.getElementById('insideout');
	document.getElementById('maki').style.display = 'none';
	document.getElementById('nigiri').style.display = 'none';
	document.getElementById('sashimi').style.display = 'none';
	document.getElementById('insideout').style.display = 'none';
	document.getElementById('tempura').style.display = 'none';
	document.getElementById('veggie').style.display = 'none';
	document.getElementById('impressum').style.display = 'none';
if (naviSashimi.style.display == 'none') {
	naviSashimi.style.display = 'inline'; 
}};

function openInsideOut() {
	var naviInsideOut = document.getElementById('tempura');
	document.getElementById('maki').style.display = 'none';
	document.getElementById('nigiri').style.display = 'none';
	document.getElementById('sashimi').style.display = 'none';
	document.getElementById('insideout').style.display = 'none';
	document.getElementById('tempura').style.display = 'none';
	document.getElementById('veggie').style.display = 'none';
	document.getElementById('impressum').style.display = 'none';
if (naviInsideOut.style.display == 'none') {
	naviInsideOut.style.display = 'inline';
}};

function openTempura() {
	var naviTempura = document.getElementById('veggie');
	document.getElementById('maki').style.display = 'none';
	document.getElementById('nigiri').style.display = 'none';
	document.getElementById('sashimi').style.display = 'none';
	document.getElementById('insideout').style.display = 'none';
	document.getElementById('tempura').style.display = 'none';
	document.getElementById('veggie').style.display = 'none';
	document.getElementById('impressum').style.display = 'none';
if (naviTempura.style.display == 'none') {
	naviTempura.style.display = 'inline'; 
}};
