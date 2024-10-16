import * as S from "./styles";
import { HiOutlineArrowLeft } from "react-icons/hi";
import routes from "~/router/routes";
import { useHistory } from "react-router-dom";
import Button from "~/components/Buttons";
import { IconButton } from "~/components/Buttons/IconButton";
import { useNewUser } from "./useNewUserHook";
import TextField from "~/components/TextField";

const NewUserPage = () => {
  const { handleSubmit, onSubmit, register, errors,  isValid, isDirty, isValidCPF } = useNewUser()
  const history = useHistory();

  const goToHome = () => {
    history.push(routes.dashboard);
  };
  
  return (
    <S.Container>
      <S.Card onSubmit={handleSubmit(onSubmit)}>
        <IconButton onClick={() => goToHome()} aria-label="back">
          <HiOutlineArrowLeft size={24} />
        </IconButton>
        <TextField 
          placeholder="Nome" 
          label="Nome" 
          {...register('employeeName')}
          $error={ errors.employeeName && errors.employeeName.message}
        />
        <TextField 
          placeholder="Email" 
          label="Email" 
          type="email" 
          {...register('email')} 
          $error={errors.email &&  errors.email.message }
        />
        <TextField 
          placeholder="CPF" 
          label="CPF" {...register('cpf')} 
          $error={ (errors.cpf && errors.cpf.message) || isValidCPF && isValidCPF}
          maxLength={14}
        />
        <TextField 
          label="Data de admissão" 
          type="date" 
          {...register('admissionDate')} 
          $error={ errors.admissionDate && errors.admissionDate.message}
        />
        <Button type='Submit' aria-label="cadastrar" disabled={!isDirty || !isValid || isValidCPF}>Cadastrar</Button>
      </S.Card>
    </S.Container>
  );
};

export default NewUserPage
