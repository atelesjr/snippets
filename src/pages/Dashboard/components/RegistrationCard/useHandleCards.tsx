import { deleteUser, putUser } from "~/services";
import { useDashboadStore } from "../../store";
import { useModalStore } from "~/components/Modal/store";
import { statusLabel } from './interfaces'
import { User } from "~/services/interfaces";

export const useHandleCards = (data:User) => {
  const { setIsUpdated, setIsLoadingAPI } = useDashboadStore()
  const { setIsModalOpened, setMessageModal } = useModalStore()
  
  const handleCards = async(
    action: 'CHANGE_STATUS' | 'DELETE' , 
    id: string, 
    status?:'REVIEW' | 'REPROVED' | 'APPROVED'
  ) => {
    setIsLoadingAPI(true)

    if(action === 'CHANGE_STATUS' && status) {
      const body = { ...data,  status }
      const response = await putUser(id, body)
      console.log('PUT response', response)
      setMessageModal(`Registro atualizado com status: ${statusLabel[status]}`)
    }

    if(action === 'DELETE') {
      const response = await deleteUser(id)
      console.log('DELETE response', response)
      setMessageModal('Registro apagado com sucesso!')
    }

    setIsUpdated(true)

    setTimeout(() => {
      setIsLoadingAPI(false) 
      setIsModalOpened(true)
    }, 500);
  
  }

  return { handleCards }

}