import styled, { css } from 'styled-components';

const StyledDropzoneContainer = styled.div.attrs(
  ({ $isFocused, $isDragAccept, $isDragReject }) => ({
    $color: $isFocused
      ? 'blue'
      : $isDragAccept
      ? 'green'
      : $isDragReject
      ? 'red'
      : 'black',
  })
)`
  ${({ $color }) => css`
    border: 0.125em ${$color} dashed;
    border-radius: 0.625em;
    color: ${$color};
    cursor: pointer;
    transition: border 0.24s ease-in-out;
  `}
`;

export default StyledDropzoneContainer;
