import { ReactElement } from 'react';
import { create } from 'zustand';

type MessageModal = string | ReactElement

export type UseModalStore = {
  isModalOpened: boolean;
  messageModal: MessageModal
  setIsModalOpened: (isModalOpened:boolean) => void;
  setMessageModal: (messageModal: MessageModal) => void;
}


export const useModalStore = create<UseModalStore>((set) => ({
  isModalOpened: false,
  messageModal: 'Operação realizada com sucesso!',
  setIsModalOpened: (isModalOpened:boolean) => set(() => ({ isModalOpened  })),
  setMessageModal: (messageModal: MessageModal) => set(() => ({ messageModal  })),
}))