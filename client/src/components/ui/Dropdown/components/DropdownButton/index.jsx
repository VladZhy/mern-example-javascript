import { StyledDropdownButton } from './style';
import { FaAngleDown } from 'react-icons/fa';
import './styles.css';

const DropdownButton = ({ children, ...props }) => {
	return (
		<StyledDropdownButton {...props}>
			<span className="dropdown-button__label">{children}</span>
			<FaAngleDown className="dropdown-button__icon" />
		</StyledDropdownButton>
	);
};

export default DropdownButton;
