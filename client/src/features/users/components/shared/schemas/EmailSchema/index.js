import * as Yup from 'yup';
import { INVALID_EMAIL_ERROR } from './config';

const EmailSchema = Yup.string().email(INVALID_EMAIL_ERROR);

export default EmailSchema;
