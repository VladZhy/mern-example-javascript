import styled from 'styled-components';
import spin from 'style/animations/spin';

const StyledLoader = styled.div`
  border-style: solid;
  border-color: lightgrey;
  border-top-color: black;
  border-radius: 50%;
  animation: ${spin} 2s linear infinite;
  -webkit-animation: ${spin} 2s linear infinite;
`;

export default StyledLoader;
