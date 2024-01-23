import styled, { css } from 'styled-components';

const StyledDropdownMenu = styled.ul`
	${({ $isExpanded }) => css`
		user-select: none;
		position: absolute;
		display: ${$isExpanded ? 'block' : 'none'};
		top: 6.25em;
		right: 4.25em;
		border: 0.1875em solid black;
		padding: 0;
		background-color: white;
		border-radius: 0.3125em;

		&::before {
			position: absolute;
			top: -0.75em;
			right: 0.75em;
			width: 1.25em;
			height: 1.25em;
			border-top: 0.125em solid black;
			border-left: 0.125em solid black;
			background: black;
			content: '';
			transform: rotate(45deg);
			z-index: -1;
		}
	`}
`;

export default StyledDropdownMenu;
