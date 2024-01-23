import { createContext, useContext } from 'react';

const DropdownContext = createContext();

export const useDropdownContext = () => {
	const dropdownContext = useContext(DropdownContext);

	if (!dropdownContext) {
		throw new Error(
			'Dropdown.* component must be rendered as child of Dropdown component'
		);
	}

	return dropdownContext;
};

export default DropdownContext;
