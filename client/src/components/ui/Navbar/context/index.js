import { createContext, useContext } from 'react';

const NavbarContext = createContext();

const useNavbarContext = () => {
	const navbarContext = useContext(NavbarContext);

	if (!navbarContext) {
		throw new Error(
			'Navbar.* component must be rendered as child of Navbar component'
		);
	}

	return navbarContext;
};

export default NavbarContext;

export { useNavbarContext };
