import * as Yup from 'yup';
import {
  MIN_CHARACTERS,
  MAX_CHARACTERS,
  MIN_CHARACTERS_ERROR,
  MAX_CHARACTERS_ERROR,
} from './config';

const UsernameSchema = Yup.string()
  .min(MIN_CHARACTERS, MIN_CHARACTERS_ERROR)
  .max(MAX_CHARACTERS, MAX_CHARACTERS_ERROR);

export default UsernameSchema;
