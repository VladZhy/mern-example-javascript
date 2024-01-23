import { NavbarMenu } from './components';
import { StyledNavbar } from './style';
import NavbarContext from './context';

const Navbar = ({
	children,
	isMobileNavbarExpanded,
	closeMobileNavbar,
	...props
}) => {
	return (
		<StyledNavbar $isMobileNavbarExpanded={isMobileNavbarExpanded} {...props}>
			<NavbarContext.Provider value={{ closeMobileNavbar }}>
				{children}
			</NavbarContext.Provider>
		</StyledNavbar>
	);
};

Navbar.Menu = NavbarMenu;

export default Navbar;
