import { StyledDropdownItemLink } from './style';
import { useDropdownContext } from '../../../../context';

const DropdownItemLink = ({ children, to, onClick, ...props }) => {
	const { closeMenu } = useDropdownContext();

	return (
		<StyledDropdownItemLink to={to} onClick={closeMenu} {...props}>
			{children}
		</StyledDropdownItemLink>
	);
};

export default DropdownItemLink;
