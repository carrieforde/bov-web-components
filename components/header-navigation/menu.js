/**
 * Menu JS
 */
(function (window) {
	
	var navMenu = document.querySelector('.nav-menu');

	/**
	 * Visibly opens submenus on tabpress.
	 * 
	 * @param {any} event
	 */
	var tabNavigation = function (event) {

		var el      = event.target,
			subMenu = el.nextElementSibling,
			lastItem;

		// Show submenu once parent has been selected.
		if (subMenu && subMenu.classList.contains('menu__sub-menu')) {
			el.parentElement.classList.add('is-toggled');
		}

		// If we're in a sub-menu, toggle it closed once we've tabbed away from the last menu item.
		if (subMenu) {
			lastItem = subMenu.querySelectorAll('li');
			lastItem = lastItem[lastItem.length - 1].firstElementChild;

			lastItem.onblur = function () {
				el.parentElement.classList.remove('is-toggled');
			}
		}

		// If we Shift + Tab away from the parent with a sub-menu, close the sub-menu.
		if (!subMenu && el.parentElement.nextElementSibling) {
			if (el.parentElement.nextElementSibling.classList.contains('is-toggled')) {
				el.parentElement.nextElementSibling.classList.remove('is-toggled');
			}
		}

		// If we Shift + Tab back to the last item of a sub-menu, open the sub-menu.
		if (!subMenu && el.parentElement.parentElement.classList.contains('menu__sub-menu')) {
			subMenu = el.parentElement.parentElement;
			subMenu.parentElement.classList.add('is-toggled');
		}
	};

	navMenu.addEventListener('keyup', tabNavigation);
})(window);
