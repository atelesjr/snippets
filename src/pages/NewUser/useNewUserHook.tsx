import { useEffect } from "react";
import { useForm } from "react-hook-form";
import routes from "~/router/routes";
import { useHistory } from "react-router-dom";
import { NewUserSchema, NewUser } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { postUser } from "~/services";
import { cpfMask } from '~/util/inputMasks';
import { useDashboadStore } from '~/pages/Dashboard/store';

import { useModalStore } from "~/components/Modal/store";
import { useCPFValidation } from "~/hooks/useCPFValidation";

export const useNewUser = () => {
  const history = useHistory()
  const { setIsUpdated, setIsLoadingAPI } = useDashboadStore()
  const { setIsModalOpened, setMessageModal } = useModalStore()
  const { 
    register, 
    handleSubmit,
     watch, 
     setValue, 
     reset, 
     formState: { errors,  isValid, isDirty, isSubmitSuccessful }
    } = useForm<NewUser>({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(NewUserSchema),
    defaultValues: {
      employeeName: '',
      email: '',
      cpf: '',
      admissionDate: ''
    }
  })
  const cpf = watch('cpf')
  const { isValidCPF } = useCPFValidation(cpf)

  const onSubmit = async(data:NewUser) => {
    setIsLoadingAPI(true)
    const id = Date.now()
    const user = {
      ...data, 
      id: id.toString(),
      status: 'REVIEW'
    }
  
    const response = await postUser(user)
    console.log('submit', response)

    setTimeout(() => {
      setIsUpdated(true)
      setIsLoadingAPI(false) 
      setMessageModal(`O usuário ${user.employeeName} foi incluso com sucesso!`)
      setIsModalOpened(true)
      history.push(routes.dashboard)
    }, 500);
  }

  useEffect(() => {
    setValue('cpf', cpfMask(cpf))
  }, [cpf])

  useEffect(() => {
    if (!isSubmitSuccessful) { return }
  
    reset({
      employeeName: '',
      email: '',
      cpf: '',
      admissionDate: ''
    })
  }, [isSubmitSuccessful])

  return { handleSubmit, onSubmit, register, errors,  isValid, isDirty, isValidCPF}
}