import { NavbarMenuItemLink } from './components';
import { StyledNavbarMenuItem } from './style';

const NavbarMenuItem = ({ children, ...props }) => {
	return <StyledNavbarMenuItem {...props}>{children}</StyledNavbarMenuItem>;
};

NavbarMenuItem.Link = NavbarMenuItemLink;

export default NavbarMenuItem;
