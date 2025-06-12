function toggleMenu() {
  const links = document.getElementById('nav-links');
  links.classList.toggle('show');
}
document.querySelectorAll('.menu-cate > li > h1').forEach(h1 => {
    h1.style.cursor = 'pointer';  // show pointer cursor on hover
    h1.addEventListener('click', () => {
      const categoryList = h1.nextElementSibling; // the .category ol
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