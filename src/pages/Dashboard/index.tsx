import * as S from "./styles";
import { useFecth } from "~/hooks/useFetch";
import Collumns from "./components/Columns";
import { SearchBar } from "./components/Searchbar";
import { useDashboadStore } from "./store";

const DashboardPage = () => {
  useFecth();
  const { users, searchUsers } = useDashboadStore()
  const data = !searchUsers ? users : searchUsers
  
  return (
    <S.Container>
      <SearchBar />
      <Collumns registrations={data} />
    </S.Container>
  );
};
export default DashboardPage;
