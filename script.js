document.addEventListener('DOMContentLoaded', () => {
  // Toggle nav menu (optional, if you have a button)
  function toggleMenu() {
    const links = document.getElementById('nav-links');
    links.classList.toggle('show');
  }
  const menuBtn = document.querySelector('.menu-btn');
  if (menuBtn) menuBtn.addEventListener('click', toggleMenu);

  // Initially collapse all category lists
  document.querySelectorAll('.category').forEach(cat => {
    cat.classList.add('collapsed');
  });

  // Toggle category collapse on category header (h1) click
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

  // For touch devices: toggle item description on tap
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    document.querySelectorAll('.category li').forEach(item => {
      item.setAttribute('tabindex', '0');
      
      item.addEventListener('click', (e) => {
        // Ignore clicks on links inside item
        if (e.target.tagName.toLowerCase() === 'a') return;

        const isOpen = item.classList.contains('show-description');

        // Close all open descriptions
        document.querySelectorAll('.category li.show-description').forEach(el => {
          el.classList.remove('show-description');
        });

        // Toggle current if it was closed
        if (!isOpen) {
          item.classList.add('show-description');
        }

        e.stopPropagation();
      });
    });

    // Close descriptions if tap outside items
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.category li')) {
        document.querySelectorAll('.category li.show-description').forEach(item => {
          item.classList.remove('show-description');
        });
      }
    });
  }
});
