import NavbarMenu from 'components/ui/Navbar/components/NavbarMenu';
import './styles.css';

const GuestMenu = () => {
	return (
		<NavbarMenu>
			<NavbarMenu.Item>
				<NavbarMenu.Item.Link to="/login">Log in</NavbarMenu.Item.Link>
			</NavbarMenu.Item>
			<NavbarMenu.Item>
				<NavbarMenu.Item.Link
					to="/sign-up"
					id="root-layout-header-guest-menu__sign-up-link"
				>
					Sign up
				</NavbarMenu.Item.Link>
			</NavbarMenu.Item>
		</NavbarMenu>
	);
};

export default GuestMenu;
