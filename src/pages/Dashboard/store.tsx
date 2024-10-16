import { create } from 'zustand';
import { User } from '~/services/interfaces'

export type UseDashboardStore = {
  isUpdated: boolean;
  isLoadingAPI: boolean;
  users: User[]
  searchUsers: User[] | undefined
  setIsUpdated: (isUpdated:boolean) => void;
  setIsLoadingAPI: (isLoading: boolean) => void;
  setUsers: (users: User[]) => void
  setSearchUsers: (user: User[] | undefined) => void
}


export const useDashboadStore = create<UseDashboardStore>((set) => ({
  users: [],
  isUpdated: true,
  isLoadingAPI: false,
  searchUsers: undefined,
  setUsers: (users: User[]) =>  set(() => (({ users }))) ,
  setIsUpdated: (isUpdated:boolean) => set(() => (({ isUpdated  }))),
  setIsLoadingAPI: (isLoadingAPI: boolean) => set(() => ({ isLoadingAPI  })),
  setSearchUsers: (searchUsers: User[] | undefined) => set(() => ({ searchUsers  }))
}))