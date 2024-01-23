import styled, { css } from 'styled-components';

const StyledNavbar = styled.nav`
	${({ $isMobileNavbarExpanded }) => css`
		@media screen and (max-width: 768px) {
			display: ${$isMobileNavbarExpanded ? 'block' : 'none'};
			margin: 0;
		}
	`}
`;

export default StyledNavbar;
