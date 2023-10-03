import * as yup from 'yup';

export const iterationValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  requirement_id: yup.string().nullable().required(),
});
