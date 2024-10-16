import { z } from 'zod'

export const NewUserSchema = z.object({
  employeeName: z
    .string({ required_error: 'Nome é obrigatório.'})
    .regex(/^[a-z]{2,}( [a-z]+)*?( [a-z]{2,}){1,}$/i, {message: 'Insira nome completo'}),
  email: z
    .string({ required_error: 'Email é obrigatório.'})
    .email({ message: "Endereço de e-mail inválido" }).toLowerCase(),
  cpf: z
    .string({ required_error: 'CPF é obrigatório.'})
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, '');
      return !!Number(replacedDoc);
    }, 'CPF deve conter apenas números.')
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, '');
      return replacedDoc.length === 11;
    }, 'CPF deve conter 11 caracteres.'),
  admissionDate: z
    .string({ required_error: 'Data de admissão é obrigatório.'})
}).transform((field) => ({
  employeeName: field.employeeName,
  email: field.email,
  cpf: field.cpf.replace(/[^\d]+/g, ''),
  admissionDate: field.admissionDate
}))

export type NewUser = z.infer<typeof NewUserSchema>