import * as Yup from 'yup';
import YupFieldValidationService from 'services/YupFieldValidationService';
import { UsernameSchema, EmailSchema, PasswordSchema } from './schemas';
import {
  USERNAME_REQUIRED_ERROR,
  EMAIL_REQUIRED_ERROR,
  PASSWORDS_MISMATCH_ERROR,
  PASSWORD_CONFIRMATION_REQUIRED_ERROR,
} from './config';

const AccountSettingsSchema = Yup.object().shape({
  username: UsernameSchema.required(USERNAME_REQUIRED_ERROR),
  email: EmailSchema.required(EMAIL_REQUIRED_ERROR),
  password: PasswordSchema,
  confirmPassword: Yup.string().when('password', {
    is: YupFieldValidationService.isNotEmpty,
    then: (schema) =>
      schema
        .oneOf([Yup.ref('password')], PASSWORDS_MISMATCH_ERROR)
        .required(PASSWORD_CONFIRMATION_REQUIRED_ERROR),
  }),
});

export default AccountSettingsSchema;
