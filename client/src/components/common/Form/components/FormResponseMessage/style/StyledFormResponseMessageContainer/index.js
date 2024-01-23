import styled, { css } from 'styled-components';

const StyledFormResponseMessageContainer = styled.div.attrs(({ $type }) => ({
  $borderColor:
    $type === 'error' ? 'red' : $type === 'success' ? 'green' : null,
}))`
  ${({ $borderColor }) => css`
    border: 0.1875em ${$borderColor} solid;
  `}
`;

export default StyledFormResponseMessageContainer;
