import NavbarMenu from 'components/ui/Navbar/components/NavbarMenu';
import Dropdown from 'components/ui/Dropdown';
import NewGuideModalButton from 'features/guides/components/NewGuideModalButton';
import { userMenuLinks } from './config';
import './styles.css';

const UserMenu = ({ username }) => {
	return (
		<NavbarMenu>
			<NavbarMenu.Item className="root-layout-header-user-menu__link--desktop">
				<NewGuideModalButton />
			</NavbarMenu.Item>
			<NavbarMenu.Item className="root-layout-header-user-menu__link--desktop">
				<Dropdown label={username}>
					{userMenuLinks.slice(0, -1).map((link) => {
						return (
							<Dropdown.Item key={link.url + '-desktop'}>
								<Dropdown.Item.Link to={link.url}>
									{link.title}
								</Dropdown.Item.Link>
							</Dropdown.Item>
						);
					})}
					<Dropdown.Separator />
					<Dropdown.Item>
						<Dropdown.Item.Link to="/logout">Log out</Dropdown.Item.Link>
					</Dropdown.Item>
				</Dropdown>
			</NavbarMenu.Item>
			{userMenuLinks.map((link) => {
				return (
					<NavbarMenu.Item
						key={link.url + '-mobile'}
						className="root-layout-header-user-menu__link--mobile"
					>
						<NavbarMenu.Item.Link to={link.url}>
							{link.title}
						</NavbarMenu.Item.Link>
					</NavbarMenu.Item>
				);
			})}
		</NavbarMenu>
	);
};

export default UserMenu;
