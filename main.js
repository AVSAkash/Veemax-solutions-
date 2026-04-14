/* =============================================
   main.js — shared across all pages
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ── MOBILE MENU ── */
  window.openMob = function () {
    document.getElementById('mobNav').classList.add('open');
    document.getElementById('mobOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  window.closeMob = function () {
    document.getElementById('mobNav').classList.remove('open');
    document.getElementById('mobOverlay').classList.remove('open');
    document.body.style.overflow = '';
  };

  /* ── SCROLL: back-to-top visibility ── */
  window.addEventListener('scroll', function () {
    var bt = document.getElementById('backTop');
    if (bt) bt.classList.toggle('visible', window.scrollY > 400);
  });

  /* ── FADE-UP on scroll ── */
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) e.target.classList.add('in');
    });
  }, { threshold: 0.07 });
  document.querySelectorAll('.fade-up').forEach(function (el) { obs.observe(el); });

});
