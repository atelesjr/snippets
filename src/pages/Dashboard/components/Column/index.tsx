import { RenderCollumsProps } from "../../interfaces";
import * as S from "../Columns/styles";
import RegistrationCard from "../RegistrationCard";

const Column = ({registrations, collumStatus}:RenderCollumsProps) => {
  return (
    <S.CollumContent>
      {registrations?.map((registration) =>  {
        if(registration.status === collumStatus) {
          console.log('data',registration)
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

export default Column;