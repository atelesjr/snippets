import { ButtonSmall } from "~/components/Buttons";
import * as S from "./styles";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";
import { useHandleCards } from './useHandleCards'
import { RegistrationCardProps } from "./interfaces";

const RegistrationCard = (props: RegistrationCardProps) => {
  const { employeeName , email, admissionDate, status, id} = props.data;
  const { handleCards } = useHandleCards(props.data)

  return (
    <S.Card>
      <S.IconAndText>
        <HiOutlineUser />
        <h3>{ employeeName }</h3>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineMail />
        <p>{ email }</p>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{ admissionDate }</span>
      </S.IconAndText>
      <S.Actions>
        {
          (status === 'REVIEW') && (
            <>
              <ButtonSmall 
                $bgcolor="rgb(255, 145, 154)"
                onClick={() => handleCards('CHANGE_STATUS', id, 'REPROVED')}
              >
                Reprovar
              </ButtonSmall>

              <ButtonSmall 
                $bgcolor="rgb(155, 229, 155)"
                onClick={() => handleCards('CHANGE_STATUS', id, 'APPROVED')}
              >
                Aprovar
              </ButtonSmall>
            </>
          )
        }
        
        { status !== 'REVIEW' && (
          <ButtonSmall 
            $bgcolor="#ff8858" 
            onClick={() => handleCards('CHANGE_STATUS',id, 'REVIEW')}
          >
            Revisar novamente
          </ButtonSmall>
        )}
        
        <HiOutlineTrash onClick={() => handleCards('DELETE',id)} />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
