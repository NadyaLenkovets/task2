const headerBurger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header-nav');
const headerNavLinks = document.querySelectorAll('.header-nav__link');


headerBurger.addEventListener('click', function(e) {
   document.body.classList.toggle('lock');
   headerNav.classList.toggle('active');
   headerBurger.classList.toggle('active');
})


headerNavLinks.forEach(headerNavLink => {
   headerNavLink.addEventListener('click', onHeaderNavLinkClick);
})


function onHeaderNavLinkClick(e) {
   const headerNavLink = e.target;
   if (headerBurger.classList.contains('active')) {
      document.body.classList.remove('lock');
      headerNav.classList.remove('active');
      headerBurger.classList.remove('active');
   }
}

