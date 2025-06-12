function toggleMenu() {
  const links = document.getElementById('nav-links');
  links.classList.toggle('show');
}

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

// Add tabindex to make li focusable on mobile
document.querySelectorAll('.category li').forEach(item => {
  item.setAttribute('tabindex', '0');
});

// Toggle description on click and touchstart
document.querySelectorAll('.category li').forEach(item => {
  const toggleDescription = (e) => {
    if (e.target.tagName.toLowerCase() === 'a') return;
    e.preventDefault(); // prevent default touch behavior
    item.classList.toggle('show-description');
  };

  item.addEventListener('click', toggleDescription);
  item.addEventListener('touchstart', toggleDescription);
});

// Close descriptions when clicking or touching outside
const closeDescriptions = (e) => {
  if (!e.target.closest('.category li')) {
    document.querySelectorAll('.category li.show-description').forEach(item => {
      item.classList.remove('show-description');
    });
  }
};

document.addEventListener('click', closeDescriptions);
document.addEventListener('touchstart', closeDescriptions);
