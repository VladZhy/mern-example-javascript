import { StyledFormFieldCharacterCountdown } from './style';

const FormFieldCharacterCountdown = ({
  maxCharacters,
  inputValue,
  ...props
}) => {
  return (
    <StyledFormFieldCharacterCountdown {...props}>
      {maxCharacters - inputValue.length} characters left
    </StyledFormFieldCharacterCountdown>
  );
};

export default FormFieldCharacterCountdown;
