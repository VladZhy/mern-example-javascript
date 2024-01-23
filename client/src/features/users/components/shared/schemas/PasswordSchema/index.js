import * as Yup from 'yup';
import {
  MIN_CHARACTERS,
  MAX_CHARACTERS,
  CONTAINS_UPPERCASE_LETTER_REGEX,
  CONTAINS_LOWERCASE_LETTER_REGEX,
  CONTAINS_NUMBER_REGEX,
  CONTAINS_SPECIAL_CHARACTER_REGEX,
  CONTAINS_NO_SPACES_REGEX,
  MIN_CHARACTERS_ERROR,
  MAX_CHARACTERS_ERROR,
  NO_UPPERCASE_LETTER_ERROR,
  NO_LOWERCASE_LETTER_ERROR,
  NO_NUMBER_ERROR,
  NO_SPECIAL_CHARACTER_ERROR,
  HAS_SPACES_ERROR,
} from './config';

const PasswordSchema = Yup.string()
  .min(MIN_CHARACTERS, MIN_CHARACTERS_ERROR)
  .max(MAX_CHARACTERS, MAX_CHARACTERS_ERROR)
  .matches(CONTAINS_UPPERCASE_LETTER_REGEX, NO_UPPERCASE_LETTER_ERROR)
  .matches(CONTAINS_LOWERCASE_LETTER_REGEX, NO_LOWERCASE_LETTER_ERROR)
  .matches(CONTAINS_NUMBER_REGEX, NO_NUMBER_ERROR)
  .matches(CONTAINS_SPECIAL_CHARACTER_REGEX, NO_SPECIAL_CHARACTER_ERROR)
  .matches(CONTAINS_NO_SPACES_REGEX, HAS_SPACES_ERROR);

export default PasswordSchema;
