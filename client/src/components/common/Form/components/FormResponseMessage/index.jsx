import { StyledFormResponseMessageContainer } from './style';
import './styles.css';

const FormResponseMessage = ({ children, type, ...props }) => {
  return (
    children && (
      <StyledFormResponseMessageContainer $type={type} {...props}>
        <p className="form-response-message">{children}</p>
      </StyledFormResponseMessageContainer>
    )
  );
};

export default FormResponseMessage;
