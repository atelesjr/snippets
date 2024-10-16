import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import Button from "~/components/Buttons";
import { IconButton } from "~/components/Buttons/IconButton";
import TextField from "~/components/TextField";
import routes from "~/router/routes";
import * as S from "./styles";
import {useSearch} from './useSearchHook'

export const SearchBar = () => {
  const history = useHistory();
  const { register, errors, isValidCPF } = useSearch()
 
  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  return (
    <S.Container>
      <TextField  
        placeholder="Digite um CPF válido" 
        {...register('cpf')}
        $error={(errors.cpf?.message && errors.cpf.message )|| isValidCPF && isValidCPF}
      />
      {/* teste */}

      <S.Actions>
        <IconButton aria-label="refetch">
          <HiRefresh />
        </IconButton>
        <Button 
          onClick={() => goToNewAdmissionPage()}
        >
          Nova Admissão
        </Button>
      </S.Actions>
    </S.Container>
  );
};
