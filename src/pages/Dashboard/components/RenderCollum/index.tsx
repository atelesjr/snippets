import { RenderCollumsProps } from "../../interfaces";
import * as S from "../Columns/styles";
import RegistrationCard from "../RegistrationCard";
const Collum = ({ registrations, collumStatus }:RenderCollumsProps) => {

  return (
    <S.CollumContent>
    {registrations?.map((registration) =>  {
      if(registration.status === collumStatus) {
        return (
          <RegistrationCard
            data={registration}
            key={registration.id}
          />
        )
      };
      return;
    })}
  </S.CollumContent>
  )
}

export default Collum;