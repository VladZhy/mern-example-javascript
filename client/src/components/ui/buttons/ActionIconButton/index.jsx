import { StyledActionIconButton, StyledIcon } from './style';
import './styles.css';

const ActionIconButton = ({ children, label, ...props }) => {
  return (
    <StyledActionIconButton {...props}>
      <StyledIcon className="icon-button__icon">{children}</StyledIcon>
      <span className="icon-button__label">{label}</span>
    </StyledActionIconButton>
  );
};

export default ActionIconButton;
