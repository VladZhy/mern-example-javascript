import * as Yup from 'yup';
import { ThumbnailSchema } from './schemas';
import { TITLE_REQUIRED_ERROR } from './config';

const NewGuideSchema = Yup.object().shape({
  title: Yup.string().required(TITLE_REQUIRED_ERROR),
  description: Yup.string(),
  thumbnail: Yup.array().of(ThumbnailSchema),
});

export default NewGuideSchema;
