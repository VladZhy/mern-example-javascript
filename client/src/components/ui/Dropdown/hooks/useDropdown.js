import { useCallback, useEffect, useRef, useState } from 'react';

const useDropdown = () => {
	const menuRef = useRef(null);
	const [isExpanded, setIsExpanded] = useState(false);

	const openMenu = useCallback(() => {
		setIsExpanded(true);
	}, []);

	const closeMenu = useCallback(() => {
		setIsExpanded(false);
	}, []);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (
				isExpanded &&
				!menuRef.current.contains(e.target) &&
				!e.target.closest('.dropdown__button')
			) {
				closeMenu();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	});

	return { menuRef, isExpanded, openMenu, closeMenu };
};

export default useDropdown;
