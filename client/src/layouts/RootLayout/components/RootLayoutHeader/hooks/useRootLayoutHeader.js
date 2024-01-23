import { useCallback, useState } from 'react';

const useRootLayoutHeader = () => {
	const [isMobileNavbarExpanded, setIsMobileNavbarExpanded] = useState(false);

	const openMobileNavbar = useCallback(() => {
		setIsMobileNavbarExpanded(true);
	}, []);

	const closeMobileNavbar = useCallback(() => {
		setIsMobileNavbarExpanded(false);
	}, []);

	return { isMobileNavbarExpanded, openMobileNavbar, closeMobileNavbar };
};

export default useRootLayoutHeader;
