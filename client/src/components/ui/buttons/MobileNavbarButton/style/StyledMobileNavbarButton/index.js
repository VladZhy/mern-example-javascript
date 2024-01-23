import styled from 'styled-components';
import StyledButtonWrapper from 'style/buttons/StyledButtonWrapper';

const StyledMobileNavbarButton = styled(StyledButtonWrapper)`
	display: none;

	@media screen and (max-width: 768px) {
		display: inline-block;
		user-select: none;
		cursor: pointer;
		transition: 0.3s;
	}
`;

export default StyledMobileNavbarButton;
