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

// Make menu items focusable for accessibility
document.querySelectorAll('.category li').forEach(item => {
  item.setAttribute('tabindex', '0');
});

// Toggle description on click/tap (with pointerdown for instant mobile response)
document.querySelectorAll('.category li').forEach(item => {
  item.addEventListener('pointerdown', (e) => {
    if (e.target.tagName.toLowerCase() === 'a') return;

    // Toggle only the clicked item
    item.classList.toggle('show-description');

    // Optional: close others when opening one
    // document.querySelectorAll('.category li').forEach(other => {
    //   if (other !== item) other.classList.remove('show-description');
    // });

    e.stopPropagation(); // Prevent bubbling to document
  });
});

// Close all if clicking/tapping outside
document.addEventListener('pointerdown', (e) => {
  if (!e.target.closest('.category li')) {
    document.querySelectorAll('.category li.show-description').forEach(item => {
      item.classList.remove('show-description');
    });
  }
});
