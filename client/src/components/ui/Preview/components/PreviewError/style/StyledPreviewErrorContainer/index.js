import styled from 'styled-components';
import StyledPreviewItemContainer from '../../../shared/style/StyledPreviewItemContainer';

const StyledPreviewErrorContainer = styled(StyledPreviewItemContainer)`
	display: flex;
	flex-direction: column;
	border-color: red;
	justify-content: center;
	align-items: center;
	color: red;
`;

export default StyledPreviewErrorContainer;
