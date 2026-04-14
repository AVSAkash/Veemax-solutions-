document.addEventListener('DOMContentLoaded', function () {

  /* ── TAB FILTER ── */
  window.filterCat = function (cat, btn) {
    document.querySelectorAll('.ftab').forEach(function (b) {
      b.classList.remove('active');
    });
    btn.classList.add('active');

    document.querySelectorAll('.pcard').forEach(function (card) {
      card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
    });
  };

  /* ── MODAL FUNCTIONS (MAKE GLOBAL) ── */
  window.openModalFromCard = function(btn) {
  const card = btn.closest('.pcard');

  // Get full detail HTML
  const detailHTML = card.querySelector('.pcard-detail').innerHTML;

  // Inject into modal
  document.getElementById("modalBody").innerHTML = detailHTML;

  // Show modal
  document.body.classList.add("modal-open");
  document.getElementById("productModal").style.display = "flex";
};

  window.openModal = function (title, description) {
    document.body.classList.add("modal-open");
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;
    document.getElementById("productModal").style.display = "flex";
  };

  window.closeModal = function () {
    document.body.classList.remove("modal-open");
    document.getElementById("productModal").style.display = "none";
  };

  /* ── CLICK OUTSIDE TO CLOSE ── */
  window.onclick = function (e) {
    const modal = document.getElementById("productModal");
    if (e.target === modal) {
      closeModal(); // ✅ FIXED
    }
  };

  /* ── READ URL PARAM ?cat=xxx ── */
  var cat = new URLSearchParams(window.location.search).get('cat');
  if (cat) {
    var btn = document.querySelector('.ftab[data-cat="' + cat + '"]');
    if (btn) filterCat(cat, btn);
  }

});