function toggleMenu() {
  const links = document.getElementById('nav-links');
  links.classList.toggle('show');
}

// Expand/collapse sections
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

// Focusable items
document.querySelectorAll('.category li').forEach(item => {
  item.setAttribute('tabindex', '0');
});

// Show description on tap/click (mobile & PC), one at a time
document.querySelectorAll('.category li').forEach(item => {
  item.addEventListener('pointerdown', (e) => {
    if (e.target.tagName.toLowerCase() === 'a') return;

    const isAlreadyOpen = item.classList.contains('show-description');

    // Close all
    document.querySelectorAll('.category li.show-description').forEach(other => {
      other.classList.remove('show-description');
    });

    // If not already open, open it
    if (!isAlreadyOpen) {
      item.classList.add('show-description');
    }

    e.stopPropagation();
  });
});

// Close if clicked outside
document.addEventListener('pointerdown', (e) => {
  if (!e.target.closest('.category li')) {
    document.querySelectorAll('.category li.show-description').forEach(item => {
      item.classList.remove('show-description');
    });
  }
});
