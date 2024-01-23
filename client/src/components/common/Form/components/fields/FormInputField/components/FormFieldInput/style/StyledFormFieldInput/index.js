import styled, { css } from 'styled-components';
import StyledInput from 'style/StyledInput';

const StyledFormFieldInput = styled(StyledInput)`
  ${({ $isInvalid }) => css`
    width: 100%;

    ${$isInvalid &&
    css`
      border-color: red;
    `}
  `}
`;

export default StyledFormFieldInput;
