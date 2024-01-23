import * as Yup from 'yup';
import { IS_BASE64_IMAGE_REGEX, IMAGE_PROCESSING_ERROR } from './config';

const ThumbnailSchema = Yup.string()
  .nonNullable()
  .matches(IS_BASE64_IMAGE_REGEX, IMAGE_PROCESSING_ERROR);

export default ThumbnailSchema;
