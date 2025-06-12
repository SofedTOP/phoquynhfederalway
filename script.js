function toggleMenu() {
  const links = document.getElementById('nav-links');
  links.classList.toggle('show');
}

// Menu category toggle
document.querySelectorAll('.menu-cate > li > h1').forEach(h1 => {
  h1.style.cursor = 'pointer';
  h1.addEventListener('click', () => {
    const categoryList = h1.nextElementSibling;
    if (categoryList) {
      categoryList.classList.toggle('collapsed');
    }
    h1.parentElement.classList.toggle('active');
  });
});

// Only run this part on touch devices
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
  document.querySelectorAll('.category li').forEach(item => {
    item.setAttribute('tabindex', '0');
    
    item.addEventListener('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'a') return;

      const alreadyOpen = item.classList.contains('show-description');

      // Close all first
      document.querySelectorAll('.category li.show-description').forEach(el => {
        el.classList.remove('show-description');
      });

      // If not already open, open this one
      if (!alreadyOpen) {
        item.classList.add('show-description');
      }

      e.stopPropagation();
    });
  });

  // Close all on outside tap
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.category li')) {
      document.querySelectorAll('.category li.show-description').forEach(item => {
        item.classList.remove('show-description');
      });
    }
  });
}
document.querySelectorAll('.category li').forEach(item => {
  item.addEventListener('touchstart', () => {
    item.style.transform = 'scale(0.97)';
  });

  item.addEventListener('touchend', () => {
    item.style.transform = '';
  });
});