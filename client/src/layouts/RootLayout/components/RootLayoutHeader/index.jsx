import MobileNavbarButton from 'components/ui/buttons/MobileNavbarButton';
import { GuestMenu, UserMenu } from './components';
import { useSelector } from 'react-redux';
import { ReactComponent as LogoIcon } from 'assets/icons/logo.svg';
import { Link } from 'react-router-dom';
import { useRootLayoutHeader } from './hooks';
import './styles.css';
import Navbar from 'components/ui/Navbar';

const RootLayoutHeader = () => {
	const { isMobileNavbarExpanded, openMobileNavbar, closeMobileNavbar } =
		useRootLayoutHeader();
	const { userInfo } = useSelector((state) => state.auth);

	return (
		<header>
			<Link
				to="/"
				title="Home"
				onClick={isMobileNavbarExpanded ? closeMobileNavbar : null}
				className="root-layout-header__logo-link"
			>
				<LogoIcon alt="Logo" className="root-layout-header__logo" />
			</Link>
			<MobileNavbarButton
				isExpanded={isMobileNavbarExpanded}
				onOpen={openMobileNavbar}
				onClose={closeMobileNavbar}
				className="root-layout-header__mobile-navbar-button"
			/>
			<Navbar
				isMobileNavbarExpanded={isMobileNavbarExpanded}
				closeMobileNavbar={closeMobileNavbar}
			>
				{userInfo ? (
					<UserMenu
						username={userInfo.username}
						className="root-layout-header__navbar-menu"
					/>
				) : (
					<GuestMenu className="root-layout-header__navbar-menu" />
				)}
			</Navbar>
		</header>
	);
};

export default RootLayoutHeader;
