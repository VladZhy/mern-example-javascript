import styled, { css } from 'styled-components';
import StyledTextarea from 'style/StyledTextarea';

const StyledFormFieldTextarea = styled(StyledTextarea)`
  ${({ $isInvalid }) => css`
    display: block;
    height: 10em;
    width: 100%;

    ${$isInvalid &&
    css`
      border-color: red;
    `}
  `}
`;

export default StyledFormFieldTextarea;
