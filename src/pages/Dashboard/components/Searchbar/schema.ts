import { z } from 'zod'

export const SearchSchema = z.object({
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
}).transform((field) => ({
  cpf: field.cpf,
}))

export type Search = z.infer<typeof SearchSchema>