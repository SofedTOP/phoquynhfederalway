function toggleMenu() {
  const links = document.getElementById('nav-links');
  links.classList.toggle('show');
}

// Handle category collapse
document.querySelectorAll('.menu-cate > li > h1').forEach(h1 => {
  h1.style.cursor = 'pointer'; 
  h1.addEventListener('click', () => {
    const categoryList = h1.nextElementSibling; 
    if (categoryList) {
      categoryList.classList.toggle('collapsed');
    }
  });
});
document.querySelectorAll('.category').forEach(cat => cat.classList.add('collapsed'));

const headers = document.querySelectorAll('.menu-cate > li > h1');
headers.forEach(header => {
  header.addEventListener('click', () => {
    const li = header.parentElement;
    li.classList.toggle('active');
  });
});

// Make items focusable
document.querySelectorAll('.category li').forEach(item => {
  item.setAttribute('tabindex', '0');
});

// ✅ Use pointerdown for instant response on tap or click
document.querySelectorAll('.category li').forEach(item => {
  item.addEventListener('pointerdown', (e) => {
    if (e.target.tagName.toLowerCase() === 'a') return;
    item.classList.toggle('show-description');
    e.stopPropagation(); // Prevent bubbling to document
  });
});

// Close if tapping outside
document.addEventListener('pointerdown', (e) => {
  if (!e.target.closest('.category li')) {
    document.querySelectorAll('.category li.show-description').forEach(item => {
      item.classList.remove('show-description');
    });
  }
});
