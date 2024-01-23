import { StyledMobileNavbarButton } from './style';
import { LuMenu, LuX } from 'react-icons/lu';
import './styles.css';

const MobileNavbarButton = ({ isExpanded, onOpen, onClose, ...props }) => {
	return !isExpanded ? (
		<StyledMobileNavbarButton title="Open menu" onClick={onOpen} {...props}>
			<LuMenu alt="Open menu" className="mobile-navbar-button__icon" />
		</StyledMobileNavbarButton>
	) : (
		<StyledMobileNavbarButton title="Close menu" onClick={onClose} {...props}>
			<LuX alt="Close menu" className="mobile-navbar-button__icon" />
		</StyledMobileNavbarButton>
	);
};

export default MobileNavbarButton;
