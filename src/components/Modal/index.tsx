import * as S from './styles'
import Glass from '~/components/Glass';
import { useModalStore } from './store'

const Modal = () => {
  const { setIsModalOpened, messageModal, setMessageModal } = useModalStore();

  const handleClose = () => {
    setMessageModal('')
    setIsModalOpened(false)
  }

  return (
    <Glass>
      <S.Modal>
        <div className="message">
          {messageModal}
        </div>
        <div className="close" onClick={() => handleClose()}/>
      </S.Modal>
    </Glass>
  )
}

export default Modal