import styled from 'styled-components';

const StyledButtonWrapper = styled.button.attrs(() => ({
	type: 'button'
}))`
	border: none;
	background-color: transparent;
	padding: 0;
	line-height: 0;
`;

export default StyledButtonWrapper;
