
   $(document).ready(function(){
$('#dropdownSpeise li').click(function() {
    $('#dropdownSpeise li.active').removeClass('active');
    $('#dropdownGetraenke li.active').removeClass('active');
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


   $(document).ready(function(){
$('#dropdownGetraenke li').click(function() {
    $('#dropdownGetraenke li.active').removeClass('active');
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

function dropdownGetraenk() {
	var anfahrt = document.getElementById('anfahrt');
	var speiseNavi = document.getElementById('dropdownSpeise');
	var getraenkNavi = document.getElementById('dropdownGetraenke');
getraenkNavi.style.display = 'none';

if (getraenkNavi.style.display == 'none') {
	anfahrt.style.display = 'none';
	getraenkNavi.style.display = 'inline';
	speiseNavi.style.display = 'none';
}}


function openAnfahrt() {
	var anfahrt = document.getElementById('anfahrt');
	var getraenkNavi = document.getElementById('dropdownGetraenke');
	var speiseNavi = document.getElementById('dropdownSpeise');
	var element = document.body;
	document.getElementById('maki').style.display = 'none';
	document.getElementById('nigiri').style.display = 'none';
	document.getElementById('sashimi').style.display = 'none';
	document.getElementById('insideout').style.display = 'none';
	document.getElementById('tempura').style.display = 'none';
	document.getElementById('veggie').style.display = 'none';
	document.getElementById('futomaki').style.display = 'none';
	document.getElementById('mixbox').style.display = 'none';
	document.getElementById('bowl').style.display = 'none';
	document.getElementById('nudelbox').style.display = 'none';
	document.getElementById('logo').style.display = 'block';
	document.getElementById('logoBubbleTea').style.display = 'none';
	document.getElementById('gradient').style.opacity = '1';
	document.getElementById('gradientBubble').style.opacity = '0';
	anfahrt.style.display = 'none';
if (anfahrt.style.display == 'none') {
	anfahrt.style.display = 'inline';
	speiseNavi.style.display = 'none';
	getraenkNavi.style.display = 'none';
	element.classList.remove("bubbleTea-mode");
	element.classList.add("background");
}}

function openImpressum() {
	var impressum = document.getElementById('impressum');
	var anfahrt = document.getElementById('anfahrt');
	var getraenkNavi = document.getElementById('dropdownGetraenke');
	var speiseNavi = document.getElementById('dropdownSpeise');
	var element = document.body;
	document.getElementById('maki').style.display = 'none';
	document.getElementById('nigiri').style.display = 'none';
	document.getElementById('sashimi').style.display = 'none';
	document.getElementById('insideout').style.display = 'none';
	document.getElementById('tempura').style.display = 'none';
	document.getElementById('veggie').style.display = 'none';
	document.getElementById('futomaki').style.display = 'none';
	document.getElementById('mixbox').style.display = 'none';
	document.getElementById('bowl').style.display = 'none';
	document.getElementById('nudelbox').style.display = 'none';
	document.getElementById('logo').style.display = 'block';
	document.getElementById('logoBubbleTea').style.display = 'none';
	document.getElementById('bubbletea').style.display = 'none';
	document.getElementById('circleBack').style.display = 'block';
	document.getElementById('circleBackBubble').style.display = 'none';
	document.getElementById('gradient').style.opacity = '1';
	document.getElementById('gradientBubble').style.opacity = '0';
	anfahrt.style.display = 'none';
	speiseNavi.style.display = 'none';
	getraenkNavi.style.display = 'none';
	impressum.style.display = 'inline';
	element.classList.remove("bubbleTea-mode");
	element.classList.add("background");
}

function openMaki() {
	var naviMaki = document.getElementById('maki');
	var element = document.body;
	document.getElementById('maki').style.display = 'none';
	document.getElementById('nigiri').style.display = 'none';
	document.getElementById('sashimi').style.display = 'none';
	document.getElementById('insideout').style.display = 'none';
	document.getElementById('tempura').style.display = 'none';
	document.getElementById('veggie').style.display = 'none';
	document.getElementById('futomaki').style.display = 'none';
	document.getElementById('mixbox').style.display = 'none';
	document.getElementById('bowl').style.display = 'none';
	document.getElementById('nudelbox').style.display = 'none';
	document.getElementById('impressum').style.display = 'none';
	document.getElementById('bubbletea').style.display = 'none';
	document.getElementById('logo').style.display = 'block';
	document.getElementById('logoBubbleTea').style.display = 'none';
	document.getElementById('circleBack').style.display = 'block';
	document.getElementById('circleBackBubble').style.display = 'none';
	document.getElementById('gradient').style.opacity = '1';
	document.getElementById('gradientBubble').style.opacity = '0';
if (naviMaki.style.display == 'none') {
	naviMaki.style.display = 'inline';
	element.classList.remove("bubbleTea-mode");
	element.classList.add("background");
}};

function openFutoMaki() {
	var naviFutoMaki = document.getElementById('futomaki');
	var element = document.body;
	document.getElementById('maki').style.display = 'none';
	document.getElementById('nigiri').style.display = 'none';
	document.getElementById('sashimi').style.display = 'none';
	document.getElementById('insideout').style.display = 'none';
	document.getElementById('tempura').style.display = 'none';
	document.getElementById('veggie').style.display = 'none';
	document.getElementById('futomaki').style.display = 'none';
	document.getElementById('mixbox').style.display = 'none';
	document.getElementById('bowl').style.display = 'none';
	document.getElementById('nudelbox').style.display = 'none';
	document.getElementById('impressum').style.display = 'none';
	document.getElementById('bubbletea').style.display = 'none';
	document.getElementById('logo').style.display = 'block';
	document.getElementById('logoBubbleTea').style.display = 'none';
	document.getElementById('circleBack').style.display = 'block';
	document.getElementById('circleBackBubble').style.display = 'none';
	document.getElementById('gradient').style.opacity = '1';
	document.getElementById('gradientBubble').style.opacity = '0';
if (naviFutoMaki.style.display == 'none') {
	naviFutoMaki.style.display = 'inline';
	element.classList.remove("bubbleTea-mode");
	element.classList.add("background");
}};

function openNigiri() {
	var naviNigiri = document.getElementById('nigiri');
	var element = document.body;
	document.getElementById('maki').style.display = 'none';
	document.getElementById('nigiri').style.display = 'none';
	document.getElementById('sashimi').style.display = 'none';
	document.getElementById('insideout').style.display = 'none';
	document.getElementById('tempura').style.display = 'none';
	document.getElementById('veggie').style.display = 'none';
	document.getElementById('futomaki').style.display = 'none';
	document.getElementById('mixbox').style.display = 'none';
	document.getElementById('bowl').style.display = 'none';
	document.getElementById('nudelbox').style.display = 'none';
	document.getElementById('impressum').style.display = 'none';
	document.getElementById('bubbletea').style.display = 'none';
	document.getElementById('logo').style.display = 'block';
	document.getElementById('logoBubbleTea').style.display = 'none';
	document.getElementById('circleBack').style.display = 'block';
	document.getElementById('circleBackBubble').style.display = 'none';
	document.getElementById('gradient').style.opacity = '1';
	document.getElementById('gradientBubble').style.opacity = '0';
if (naviNigiri.style.display == 'none') {
	naviNigiri.style.display = 'inline';
	element.classList.remove("bubbleTea-mode");
	element.classList.add("background");
}};

function openSashimi() {
	var naviSashimi = document.getElementById('sashimi');
	var element = document.body;
	document.getElementById('maki').style.display = 'none';
	document.getElementById('nigiri').style.display = 'none';
	document.getElementById('sashimi').style.display = 'none';
	document.getElementById('insideout').style.display = 'none';
	document.getElementById('tempura').style.display = 'none';
	document.getElementById('veggie').style.display = 'none';
	document.getElementById('futomaki').style.display = 'none';
	document.getElementById('mixbox').style.display = 'none';
	document.getElementById('bowl').style.display = 'none';
	document.getElementById('nudelbox').style.display = 'none';
	document.getElementById('impressum').style.display = 'none';
	document.getElementById('bubbletea').style.display = 'none';
	document.getElementById('logo').style.display = 'block';
	document.getElementById('logoBubbleTea').style.display = 'none';
	document.getElementById('circleBack').style.display = 'block';
	document.getElementById('circleBackBubble').style.display = 'none';
	document.getElementById('gradient').style.opacity = '1';
	document.getElementById('gradientBubble').style.opacity = '0';
if (naviSashimi.style.display == 'none') {
	naviSashimi.style.display = 'inline';
	element.classList.remove("bubbleTea-mode");
	element.classList.add("background");
}};

function openInsideOut() {
	var naviInsideOut = document.getElementById('insideout');
	var element = document.body;
	document.getElementById('maki').style.display = 'none';
	document.getElementById('nigiri').style.display = 'none';
	document.getElementById('sashimi').style.display = 'none';
	document.getElementById('insideout').style.display = 'none';
	document.getElementById('tempura').style.display = 'none';
	document.getElementById('veggie').style.display = 'none';
	document.getElementById('futomaki').style.display = 'none';
	document.getElementById('mixbox').style.display = 'none';
	document.getElementById('bowl').style.display = 'none';
	document.getElementById('nudelbox').style.display = 'none';
	document.getElementById('impressum').style.display = 'none';
	document.getElementById('bubbletea').style.display = 'none';
	document.getElementById('logo').style.display = 'block';
	document.getElementById('logoBubbleTea').style.display = 'none';
	document.getElementById('circleBack').style.display = 'block';
	document.getElementById('circleBackBubble').style.display = 'none';
	document.getElementById('gradient').style.opacity = '1';
	document.getElementById('gradientBubble').style.opacity = '0';
if (naviInsideOut.style.display == 'none') {
	naviInsideOut.style.display = 'inline';
	element.classList.remove("bubbleTea-mode");
	element.classList.add("background");
}};

function openTempura() {
	var naviTempura = document.getElementById('tempura');
	var element = document.body;
	document.getElementById('maki').style.display = 'none';
	document.getElementById('nigiri').style.display = 'none';
	document.getElementById('sashimi').style.display = 'none';
	document.getElementById('insideout').style.display = 'none';
	document.getElementById('tempura').style.display = 'none';
	document.getElementById('veggie').style.display = 'none';
	document.getElementById('futomaki').style.display = 'none';
	document.getElementById('mixbox').style.display = 'none';
	document.getElementById('bowl').style.display = 'none';
	document.getElementById('nudelbox').style.display = 'none';
	document.getElementById('impressum').style.display = 'none';
	document.getElementById('bubbletea').style.display = 'none';
	document.getElementById('logo').style.display = 'block';
	document.getElementById('logoBubbleTea').style.display = 'none';
	document.getElementById('circleBack').style.display = 'block';
	document.getElementById('circleBackBubble').style.display = 'none';
	document.getElementById('gradient').style.opacity = '1';
	document.getElementById('gradientBubble').style.opacity = '0';
if (naviTempura.style.display == 'none') {
	naviTempura.style.display = 'inline';
	element.classList.remove("bubbleTea-mode");
	element.classList.add("background"); 
}};

function openVeggie() {
	var veggie = document.getElementById('veggie');
	var element = document.body;
	document.getElementById('maki').style.display = 'none';
	document.getElementById('nigiri').style.display = 'none';
	document.getElementById('sashimi').style.display = 'none';
	document.getElementById('insideout').style.display = 'none';
	document.getElementById('tempura').style.display = 'none';
	document.getElementById('veggie').style.display = 'none';
	document.getElementById('futomaki').style.display = 'none';
	document.getElementById('mixbox').style.display = 'none';
	document.getElementById('bowl').style.display = 'none';
	document.getElementById('nudelbox').style.display = 'none';
	document.getElementById('impressum').style.display = 'none';
	document.getElementById('bubbletea').style.display = 'none';
	document.getElementById('logo').style.display = 'block';
	document.getElementById('logoBubbleTea').style.display = 'none';
	document.getElementById('circleBack').style.display = 'block';
	document.getElementById('circleBackBubble').style.display = 'none';
	document.getElementById('gradient').style.opacity = '1';
	document.getElementById('gradientBubble').style.opacity = '0';
if (veggie.style.display == 'none') {
	veggie.style.display = 'inline';
	element.classList.remove("bubbleTea-mode");
	element.classList.add("background"); 
}};

function openMixbox() {
	var naviMixbox = document.getElementById('mixbox');
	var element = document.body;
	document.getElementById('maki').style.display = 'none';
	document.getElementById('nigiri').style.display = 'none';
	document.getElementById('sashimi').style.display = 'none';
	document.getElementById('insideout').style.display = 'none';
	document.getElementById('tempura').style.display = 'none';
	document.getElementById('veggie').style.display = 'none';
	document.getElementById('futomaki').style.display = 'none';
	document.getElementById('mixbox').style.display = 'none';
	document.getElementById('bowl').style.display = 'none';
	document.getElementById('nudelbox').style.display = 'none';
	document.getElementById('impressum').style.display = 'none';
	document.getElementById('bubbletea').style.display = 'none';
	document.getElementById('logo').style.display = 'block';
	document.getElementById('logoBubbleTea').style.display = 'none';
	document.getElementById('circleBack').style.display = 'block';
	document.getElementById('circleBackBubble').style.display = 'none';
	document.getElementById('gradient').style.opacity = '1';
	document.getElementById('gradientBubble').style.opacity = '0';
if (naviMixbox.style.display == 'none') {
	naviMixbox.style.display = 'inline'; 
	element.classList.remove("bubbleTea-mode");
	element.classList.add("background");
}};

function openBowl() {
	var naviBowl = document.getElementById('bowl');
	var element = document.body;
	document.getElementById('maki').style.display = 'none';
	document.getElementById('nigiri').style.display = 'none';
	document.getElementById('sashimi').style.display = 'none';
	document.getElementById('insideout').style.display = 'none';
	document.getElementById('tempura').style.display = 'none';
	document.getElementById('veggie').style.display = 'none';
	document.getElementById('futomaki').style.display = 'none';
	document.getElementById('mixbox').style.display = 'none';
	document.getElementById('bowl').style.display = 'none';
	document.getElementById('nudelbox').style.display = 'none';
	document.getElementById('impressum').style.display = 'none';
	document.getElementById('bubbletea').style.display = 'none';
	document.getElementById('logo').style.display = 'block';
	document.getElementById('logoBubbleTea').style.display = 'none';
	document.getElementById('circleBack').style.display = 'block';
	document.getElementById('circleBackBubble').style.display = 'none';
	document.getElementById('gradient').style.opacity = '1';
	document.getElementById('gradientBubble').style.opacity = '0';
if (naviBowl.style.display == 'none') {
	naviBowl.style.display = 'inline';
	element.classList.remove("bubbleTea-mode");
	element.classList.add("background");
}};

function openNudelbox() {
	var naviNudelbox = document.getElementById('nudelbox');
	var element = document.body;
	document.getElementById('maki').style.display = 'none';
	document.getElementById('nigiri').style.display = 'none';
	document.getElementById('sashimi').style.display = 'none';
	document.getElementById('insideout').style.display = 'none';
	document.getElementById('tempura').style.display = 'none';
	document.getElementById('veggie').style.display = 'none';
	document.getElementById('futomaki').style.display = 'none';
	document.getElementById('mixbox').style.display = 'none';
	document.getElementById('bowl').style.display = 'none';
	document.getElementById('nudelbox').style.display = 'none';
	document.getElementById('impressum').style.display = 'none';
	document.getElementById('bubbletea').style.display = 'none';
	document.getElementById('logo').style.display = 'block';
	document.getElementById('logoBubbleTea').style.display = 'none';
	document.getElementById('circleBack').style.display = 'block';
	document.getElementById('circleBackBubble').style.display = 'none';
	document.getElementById('gradient').style.opacity = '1';
	document.getElementById('gradientBubble').style.opacity = '0';
if (naviNudelbox.style.display == 'none') {
	naviNudelbox.style.display = 'inline';
	element.classList.remove("bubbleTea-mode");
	element.classList.add("background");
}};

function openBubbleTea() {
	var naviBubbleTea = document.getElementById('bubbletea');
	var element = document.body;
	document.getElementById('maki').style.display = 'none';
	document.getElementById('nigiri').style.display = 'none';
	document.getElementById('sashimi').style.display = 'none';
	document.getElementById('insideout').style.display = 'none';
	document.getElementById('tempura').style.display = 'none';
	document.getElementById('veggie').style.display = 'none';
	document.getElementById('futomaki').style.display = 'none';
	document.getElementById('mixbox').style.display = 'none';
	document.getElementById('bowl').style.display = 'none';
	document.getElementById('nudelbox').style.display = 'none';
	document.getElementById('impressum').style.display = 'none';
	document.getElementById('bubbletea').style.display = 'none';
	document.getElementById('logo').style.display = 'none';
	document.getElementById('logoBubbleTea').style.display = 'block';
	document.getElementById('circleBack').style.display = 'none';
	document.getElementById('circleBackBubble').style.display = 'block';
	document.getElementById('gradient').style.opacity = '0';
	document.getElementById('gradientBubble').style.opacity = '1';
if (naviBubbleTea.style.display == 'none') {
	naviBubbleTea.style.display = 'inline';
	element.classList.remove("background");
	element.classList.add("bubbleTea-mode");

}};


   $(document).ready(function(){
$('#dropdownSpeiseZwei li').click(function() {
    $('#dropdownSpeiseZwei li.activeBubbleTea').removeClass('activeBubbleTea');
    $(this).addClass('activeBubbleTea');
	}); 
});

function openAnfahrt() {
	var anfahrt = document.getElementById('anfahrt');
	var speiseNavi = document.getElementById('dropdownSpeiseZwei');
	document.getElementById('milkTea').style.display = 'none';
	document.getElementById('fruitMilk').style.display = 'none';
	document.getElementById('fruitTea').style.display = 'none';
	document.getElementById('fruitYogurt').style.display = 'none';
	document.getElementById('flavouredJuice').style.display = 'none';
	document.getElementById('special').style.display = 'none';
	anfahrt.style.display = 'none';
if (anfahrt.style.display == 'none') {
	anfahrt.style.display = 'inline';
	speiseNavi.style.display = 'none';
}}

function openmilkTea() {
	var navimilkTea = document.getElementById('milkTea');
	document.getElementById('milkTea').style.display = 'none';
	document.getElementById('fruitMilk').style.display = 'none';
	document.getElementById('fruitTea').style.display = 'none';
	document.getElementById('fruitYogurt').style.display = 'none';
	document.getElementById('flavouredJuice').style.display = 'none';
	document.getElementById('special').style.display = 'none';
if (navimilkTea.style.display == 'none') {
	navimilkTea.style.display = 'inline';
}};

function openfruitMilk() {
	var navifruitMilk = document.getElementById('fruitMilk');
	document.getElementById('milkTea').style.display = 'none';
	document.getElementById('fruitMilk').style.display = 'none';
	document.getElementById('fruitTea').style.display = 'none';
	document.getElementById('fruitYogurt').style.display = 'none';
	document.getElementById('flavouredJuice').style.display = 'none';
	document.getElementById('special').style.display = 'none';
if (navifruitMilk.style.display == 'none') {
	navifruitMilk.style.display = 'inline';
}};

function openfruitTea() {
	var navifruitTea = document.getElementById('fruitTea');
	document.getElementById('milkTea').style.display = 'none';
	document.getElementById('fruitMilk').style.display = 'none';
	document.getElementById('fruitTea').style.display = 'none';
	document.getElementById('fruitYogurt').style.display = 'none';
	document.getElementById('flavouredJuice').style.display = 'none';
	document.getElementById('special').style.display = 'none';
if (navifruitTea.style.display == 'none') {
	navifruitTea.style.display = 'inline';
}};

function openfruitYogurt() {
	var navifruitYogurt = document.getElementById('fruitYogurt');
	document.getElementById('milkTea').style.display = 'none';
	document.getElementById('fruitMilk').style.display = 'none';
	document.getElementById('fruitTea').style.display = 'none';
	document.getElementById('fruitYogurt').style.display = 'none';
	document.getElementById('flavouredJuice').style.display = 'none';
	document.getElementById('special').style.display = 'none';
if (navifruitYogurt.style.display == 'none') {
	navifruitYogurt.style.display = 'inline'; 
}};

function openflavouredJuice() {
	var naviflavouredJuice = document.getElementById('flavouredJuice');
	document.getElementById('milkTea').style.display = 'none';
	document.getElementById('fruitMilk').style.display = 'none';
	document.getElementById('fruitTea').style.display = 'none';
	document.getElementById('fruitYogurt').style.display = 'none';
	document.getElementById('flavouredJuice').style.display = 'none';
	document.getElementById('special').style.display = 'none';
if (naviflavouredJuice.style.display == 'none') {
	naviflavouredJuice.style.display = 'inline';
}};

function openSpecial() {
	var naviSpecial = document.getElementById('special');
	document.getElementById('milkTea').style.display = 'none';
	document.getElementById('fruitMilk').style.display = 'none';
	document.getElementById('fruitTea').style.display = 'none';
	document.getElementById('fruitYogurt').style.display = 'none';
	document.getElementById('flavouredJuice').style.display = 'none';
	document.getElementById('special').style.display = 'none';
if (naviSpecial.style.display == 'none') {
	naviSpecial.style.display = 'inline'; 
}};


