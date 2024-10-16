import { User } from "~/services/interfaces"

export type RegistrationCardProps = {
  data: User
}

type StatusLabel = {
  [label: string]: string
}

export const statusLabel: StatusLabel = {
  REVIEW: 'Para revisão!',
  APPROVED: 'Aprovado!',
  REPROVED: 'Reprovado!'
}
