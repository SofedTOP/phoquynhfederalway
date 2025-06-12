function toggleMenu() {
  const links = document.getElementById('nav-links');
  links.classList.toggle('show');
}

// Expand/collapse menu categories
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

// Make items focusable
document.querySelectorAll('.category li').forEach(item => {
  item.setAttribute('tabindex', '0');
});

// Toggle item on tap/click, one open at a time
document.querySelectorAll('.category li').forEach(item => {
  item.addEventListener('pointerdown', (e) => {
    if (e.target.tagName.toLowerCase() === 'a') return;

    // Close all others
    document.querySelectorAll('.category li.show-description').forEach(other => {
      if (other !== item) other.classList.remove('show-description');
    });

    // Toggle current item
    item.classList.toggle('show-description');

    e.stopPropagation(); // Prevent closing by outside listener
  });
});

// Close all if tapping outside
document.addEventListener('pointerdown', (e) => {
  if (!e.target.closest('.category li')) {
    document.querySelectorAll('.category li.show-description').forEach(item => {
      item.classList.remove('show-description');
    });
  }
});
