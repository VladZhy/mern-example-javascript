import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  outline: none;
  border: 0.125em solid black;
  border-radius: 0.625em;
  background-color: white;
  padding: 0.75em;
  resize: none;
  text-align: justify;
  color: black;

  &:focus {
    border-color: blue;
  }

  &::-webkit-scrollbar {
    width: 0.75em;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 0.375em rgba(0, 0, 0, 0.3);
    -webkit-border-radius: 0.625em;
    border-radius: 0.625em;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 0.625em;
    border-radius: 0.625em;
    background-color: black;
  }
`;

export default StyledTextarea;
