
var menuNode = document.querySelector('.js-menu-list');
var togglerNode = document.querySelector('.js-menu-button');

menuNode.classList.add('main-nav__list--closed');
togglerNode.classList.add('main-nav__toggler--closed');

togglerNode.addEventListener('click', function() {
  menuNode.classList.toggle('main-nav__list--closed');
  togglerNode.classList.toggle('main-nav__toggler--closed');
});
