import * as yup from 'yup';

export const requirementValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  questionnaire_id: yup.string().nullable().required(),
});
