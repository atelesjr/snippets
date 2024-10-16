import { User } from "~/services/interfaces";

export type AllColumns = {
  status:  'REVIEW' | 'REPROVED' | 'APPROVED'
  title: string
}

export type CollunnsProps = {
  registrations: User[];
};

export type RenderCollumsProps = {
  registrations?: User[];
  collumStatus: 'REVIEW' | 'REPROVED' | 'APPROVED'
}

