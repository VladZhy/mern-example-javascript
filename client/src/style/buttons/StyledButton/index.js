import styled from 'styled-components';

const StyledButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  border-color: black;
  background-color: white;
  color: black;
`;

export default StyledButton;
