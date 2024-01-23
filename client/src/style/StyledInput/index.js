import styled from 'styled-components';

const StyledInput = styled.input`
  outline: none;
  border: 0.125em solid black;
  border-radius: 0.625em;
  background-color: white;
  padding: 0.75em;
  text-align: justify;
  color: black;

  &:focus {
    border-color: blue;
  }
`;

export default StyledInput;
