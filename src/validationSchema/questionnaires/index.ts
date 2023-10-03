import * as yup from 'yup';

export const questionnaireValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  deadline: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
