
// Wrap every letter in a span
/*
var textWrapper = document.querySelector('.letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "&lt;span class='letter'&gt;$&amp;&lt;/span&gt;");

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "&lt;span class='letter'&gt;$&amp;&lt;/span&gt;");
*/
/*
anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letters',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) =&gt; 70 * (i+1)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
*/