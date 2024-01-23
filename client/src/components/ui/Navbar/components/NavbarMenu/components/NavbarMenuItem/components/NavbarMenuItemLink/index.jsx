import { StyledNavbarMenuItemLink } from './style';
import { useNavbarContext } from './hooks';

const NavbarMenuItemLink = ({ children, to, ...props }) => {
	const { closeMobileNavbar } = useNavbarContext();

	return (
		<StyledNavbarMenuItemLink to={to} onClick={closeMobileNavbar} {...props}>
			{children}
		</StyledNavbarMenuItemLink>
	);
};

export default NavbarMenuItemLink;
