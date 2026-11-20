// Curtain intro: Kumo's preloader timeline scaled to 2.5s, then the hero text and nav in 2s.
(function () {
  var root = document.documentElement;
  if (!root.classList.contains('intro')) return;

  var curtain = document.querySelector('.curtain');
  var hero = document.querySelector('.hero');
  var title = document.querySelector('.hero__title');
  var nav = document.querySelector('.nav');
  var titleHTML = title.innerHTML;

  // Kumo's curtain is fully open at 3.22s. Every Kumo time below is scaled by this.
  var K = 2.5 / 3.22;

  function cleanup() {
    clearTimeout(window.__introFailsafe);
    root.classList.remove('intro', 'intro-lock');
    if (curtain) curtain.remove();
  }

  if (!window.gsap) { cleanup(); return; }

  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);

  function splitTitle() {
    var label = title.textContent.replace(/\s+/g, ' ').trim();
    var hey = title.firstChild;
    var im = title.querySelector('.im');
    var mt = title.querySelector('.mt');

    var heySpan = document.createElement('span');
    heySpan.className = 'ix ix-hey';
    heySpan.textContent = hey.nodeValue.trim();
    title.insertBefore(heySpan, hey);
    hey.nodeValue = ' ';

    im.classList.add('ix');
    mt.innerHTML = mt.textContent.split('').map(function (c) { return '<span class="ix ix-ch">' + c + '</span>'; }).join('');

    title.setAttribute('aria-label', label);
    title.classList.add('is-split');
    return { hey: heySpan, im: im, letters: mt.querySelectorAll('.ix-ch') };
  }

  function restoreTitle() {
    title.innerHTML = titleHTML;
    title.classList.remove('is-split');
    title.removeAttribute('aria-label');
  }

  function play() {
    if (!root.classList.contains('intro')) { if (curtain) curtain.remove(); return; } // failsafe already revealed the page
    clearTimeout(window.__introFailsafe);
    var parts = splitTitle();
    var tl = gsap.timeline({ onComplete: cleanup });
    window.__introTimeline = tl;

    // Curtain: same targets, order and eases as Kumo
    var open = 1.72 * K;
    tl.to('.curtain__name', { yPercent: -100, duration: 0.8 * K, ease: 'circ.inOut' }, 0.64 * K);
    tl.to('.curtain__logo', { yPercent: 20, duration: 0.8 * K, ease: 'circ.inOut' }, 0.64 * K);
    tl.to('.curtain__logo', { opacity: 0, duration: 0.5 * K, ease: 'circ.inOut' }, 1.5 * K);
    tl.to('.curtain__bg--left', { xPercent: -100, duration: 1.5 * K, ease: 'expo.inOut' }, open);
    tl.to('.curtain__bg--right', { xPercent: 100, duration: 1.5 * K, ease: 'expo.inOut' }, open);
    tl.call(function () { root.classList.remove('intro-lock'); }, null, open);

    // Hero text starts as the curtain lands, as Kumo's headline does, and everything is done 2s later
    var t = 2.91 * K;
    var drop = parts.hey.getBoundingClientRect().bottom - hero.getBoundingClientRect().top + 24; // starts fully above the hero
    tl.from(parts.hey, { y: -drop, rotation: -7, duration: 0.62, ease: 'bounce.out' }, t);
    tl.from(parts.im, { rotation: -62, transformOrigin: '0% 0%', autoAlpha: 0, duration: 0.6, ease: 'back.out(2.2)' }, t + 0.24);
    tl.from(parts.letters, { yPercent: 75, scale: 0.4, autoAlpha: 0, duration: 0.42, ease: 'back.out(3)', stagger: 0.075 }, t + 0.44);
    tl.call(restoreTitle, null, t + 1.12);

    tl.call(function () { hero.classList.add('notes-in'); }, null, t + 0.72);

    tl.fromTo(nav, { yPercent: -100 }, { yPercent: 0, duration: 0.5, ease: 'power3.out', clearProps: 'transform' }, t + 1.5);
  }

  // Like Kumo: wait for the page and fonts so nothing shifts mid-animation, but never hang on a slow network
  var started = false;
  function start() { if (started) return; started = true; void root.offsetHeight; play(); }
  function ready() { (document.fonts ? document.fonts.ready : Promise.resolve()).then(start, start); }
  if (document.readyState === 'complete') ready(); else window.addEventListener('load', ready);
  setTimeout(start, 2500);
})();
