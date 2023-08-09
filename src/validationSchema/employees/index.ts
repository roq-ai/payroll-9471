import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  earnings: yup.number().integer().required(),
  deductions: yup.number().integer().required(),
  federal_tax: yup.number().integer().required(),
  local_tax: yup.number().integer().required(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
