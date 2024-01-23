import { DropdownButton, DropdownItem, DropdownSeparator } from './components';
import { StyledDropdownMenu } from './style';
import { useDropdown } from './hooks';
import DropdownContext from './context';

const Dropdown = ({ children, label, ...props }) => {
	const { menuRef, isExpanded, openMenu, closeMenu } = useDropdown();

	return (
		<div {...props}>
			{!isExpanded ? (
				<DropdownButton
					title="Open menu"
					onClick={openMenu}
					className="dropdown__button"
				>
					{label}
				</DropdownButton>
			) : (
				<DropdownButton
					title="Close menu"
					onClick={closeMenu}
					className="dropdown__button"
				>
					{label}
				</DropdownButton>
			)}

			<StyledDropdownMenu ref={menuRef} $isExpanded={isExpanded}>
				<DropdownContext.Provider value={{ closeMenu }}>
					{children}
				</DropdownContext.Provider>
			</StyledDropdownMenu>
		</div>
	);
};

Dropdown.Item = DropdownItem;
Dropdown.Separator = DropdownSeparator;

export default Dropdown;
