import { NavbarMenuItem } from './components';
import { StyledNavbarMenu } from './style';

const NavbarMenu = ({ children, ...props }) => {
	return <StyledNavbarMenu {...props}>{children}</StyledNavbarMenu>;
};

NavbarMenu.Item = NavbarMenuItem;

export default NavbarMenu;
