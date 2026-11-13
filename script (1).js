const filterBtns = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('lightbox-caption');

let visibleItems = Array.from(items);
let currentIndex = 0;

// Filtering
filterBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    filterBtns.forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    items.forEach(function (item) {
      const show = filter === 'all' || item.getAttribute('data-category') === filter;
      item.classList.toggle('hide', !show);
      item.style.display = show ? '' : 'none';
    });

    visibleItems = Array.from(items).filter(function (item) {
      return !item.classList.contains('hide');
    });
  });
});

// Lightbox
function showImage(index) {
  currentIndex = (index + visibleItems.length) % visibleItems.length;
  const img = visibleItems[currentIndex].querySelector('img');
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  caption.textContent = img.alt;
}

items.forEach(function (item) {
  item.addEventListener('click', function () {
    currentIndex = visibleItems.indexOf(item);
    showImage(currentIndex);
    lightbox.classList.add('open');
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
}

document.getElementById('close').addEventListener('click', closeLightbox);
document.getElementById('next').addEventListener('click', function () { showImage(currentIndex + 1); });
document.getElementById('prev').addEventListener('click', function () { showImage(currentIndex - 1); });

lightbox.addEventListener('click', function (e) {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', function (e) {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
});
