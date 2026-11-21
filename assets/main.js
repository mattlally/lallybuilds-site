// Shared behaviour: hero notes load-in, construction tape drift, reveal, form, copy Part 2.
(function () {
  var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // hero notes: text and arrows animate in within about a second of load
  var hero = document.querySelector('.hero');
  if (hero) requestAnimationFrame(function () { setTimeout(function () { hero.classList.add('is-in'); }, 120); });

  // reveal on scroll
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { threshold: 0.25 });
    reveals.forEach(function (el) { io.observe(el); });
  } else reveals.forEach(function (el) { el.classList.add('is-in'); });

  // construction tape slides in opposite directions as you scroll
  var build = document.querySelector('.build');
  var runs = document.querySelectorAll('.tape__run');
  if (build && runs.length && !reduced) {
    var ticking = false;
    var update = function () {
      ticking = false;
      var r = build.getBoundingClientRect();
      var p = (innerHeight - r.top) / (innerHeight + r.height); // 0 → 1 across the section
      p = Math.max(0, Math.min(1, p));
      runs[0].style.transform = 'translate3d(' + (-p * 30) + '%,0,0)';
      if (runs[1]) runs[1].style.transform = 'translate3d(' + (-30 + p * 30) + '%,0,0)';
    };
    addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  // mobile menu: the burger opens the links panel
  var navEl = document.querySelector('.nav'), menuBtn = document.querySelector('.menu-btn');
  if (navEl && menuBtn) {
    var setMenu = function (open) { navEl.classList.toggle('is-open', open); menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false'); menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Menu'); };
    menuBtn.addEventListener('click', function () { setMenu(!navEl.classList.contains('is-open')); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
    document.addEventListener('click', function (e) { if (!navEl.contains(e.target)) setMenu(false); });
    addEventListener('resize', function () { if (innerWidth > 760) setMenu(false); });
  }

  // contact form: Web3Forms via fetch; without JS it posts and redirects to contact/thanks/
  var form = document.querySelector('form[data-contact]');
  if (form) form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var status = form.querySelector('.status');
    var btn = form.querySelector('button[type=submit]');
    btn.disabled = true; status.textContent = 'Sending...';
    var data = new FormData(form); data.delete('redirect');
    fetch(form.action, { method: 'POST', headers: { 'Accept': 'application/json' }, body: data })
      .then(function (r) { return r.json(); })
      .then(function (j) { if (!j.success) throw 0; form.reset(); status.textContent = 'Sent. I\'ll get back to you soon.'; })
      .catch(function () { status.textContent = 'That didn\'t send. Please try again in a minute.'; })
      .then(function () { btn.disabled = false; });
  });

  // copy Part 2 of the guide
  var copyBtn = document.querySelector('[data-copy-part2]');
  if (copyBtn) copyBtn.addEventListener('click', function () {
    var text = document.getElementById('part2').textContent.replace(/^\n/, '');
    var done = function () { var s = document.querySelector('.copied'); s.textContent = 'Copied. Paste it into Claude Code.'; setTimeout(function () { s.textContent = ''; }, 4000); };
    var fallback = function () {
      var ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); done(); } catch (e) {} ta.remove();
    };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, fallback); else fallback();
  });
})();
