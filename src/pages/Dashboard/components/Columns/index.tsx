
import * as S from "./styles";
import Column from "../Column";
import { CollunnsProps } from "../../interfaces";
import { allColumns } from "../../constants";

const Collumns = (props: CollunnsProps) => {

  return (
    <S.Container>
      {allColumns.map((collum) => {
        return (
          <S.Column $status={collum.status} key={collum.title}>
            <>
              <S.TitleColumn $status={collum.status}>
                {collum.title}
              </S.TitleColumn>

              <Column 
                collumStatus={collum.status} 
                registrations={props.registrations} 
              />
            </>
          </S.Column>
        );
      })}
    </S.Container>
  );
};
export default Collumns;
