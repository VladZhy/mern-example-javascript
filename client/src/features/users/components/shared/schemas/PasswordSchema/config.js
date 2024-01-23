const MIN_CHARACTERS = 8;
const MAX_CHARACTERS = 16;
const CONTAINS_UPPERCASE_LETTER_REGEX = /(?=.*[A-Z])/;
const CONTAINS_LOWERCASE_LETTER_REGEX = /(?=.*[a-z])/;
const CONTAINS_NUMBER_REGEX = /(?=.*\d)/;
const CONTAINS_SPECIAL_CHARACTER_REGEX = /(?=.*[-+_!@#$%^&*.,?])/;
const CONTAINS_NO_SPACES_REGEX = /^\S*$/;

const MIN_CHARACTERS_ERROR = 'Password must be at least 8 characters long';
const MAX_CHARACTERS_ERROR = 'Password cannot exceed 16 characters';
const NO_UPPERCASE_LETTER_ERROR =
  'Password must contain at least one uppercase letter';
const NO_LOWERCASE_LETTER_ERROR =
  'Password must contain at least one lowercase letter';
const NO_NUMBER_ERROR = 'Password must contain at least one number';
const NO_SPECIAL_CHARACTER_ERROR =
  'Password must contain at least one special character';
const HAS_SPACES_ERROR = 'Password cannot contain spaces';

export {
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
};
