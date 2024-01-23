import { DropdownItemLink } from './components';
import { StyledDropdownItem } from './style';

const DropdownItem = ({ children, ...props }) => {
	return <StyledDropdownItem {...props}>{children}</StyledDropdownItem>;
};

DropdownItem.Link = DropdownItemLink;

export default DropdownItem;
