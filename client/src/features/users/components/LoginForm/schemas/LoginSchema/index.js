import * as Yup from 'yup';
import { USERNAME_REQUIRED_ERROR, PASSWORD_REQUIRED_ERROR } from './config';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required(USERNAME_REQUIRED_ERROR),
  password: Yup.string().required(PASSWORD_REQUIRED_ERROR),
});

export default LoginSchema;
