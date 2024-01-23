import styled from 'styled-components';

const StyledNavbarMenu = styled.ul`
	display: inline-flex;
	gap: 2em;
	margin: 0;
	padding: 0;

	@media screen and (max-width: 768px) {
		position: absolute;
		flex-direction: column;
		gap: 0;
		top: 3.875em;
		left: 0;
		background-color: white;
		width: 100%;
		text-align: center;
		min-height: calc(100vh - 3.875em);
		z-index: 1;
	}
`;

export default StyledNavbarMenu;
