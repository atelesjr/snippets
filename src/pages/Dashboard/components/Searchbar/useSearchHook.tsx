import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { SearchSchema } from "./schema"
import { cpfMask } from "~/util/inputMasks"

import { useDashboadStore } from "../../store"
import { useCPFValidation } from "~/hooks/useCPFValidation"

export const useSearch = () => {
  const { users, searchUsers, setSearchUsers } = useDashboadStore()


  const { 
    register, 
    watch, 
    setValue, 
    formState: { errors } 
  } = useForm({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(SearchSchema),
    defaultValues:{
      cpf: ''
    }
  })
  const cpf = watch('cpf')
  const { isValidCPF } = useCPFValidation(cpf)

  useEffect(() => {
    setValue('cpf', cpfMask(cpf))
    console.log('cpf length', cpf.length)

    //const isValid  = isValidCpf(cpf)
    if(cpf.length > 0) {
      const result = users.filter((user) => user.cpf.includes(cpf))
      setSearchUsers(result)
    } else {
      setSearchUsers(undefined)
    }

  }, [cpf])

  useEffect(() => {
    console.log('Search', searchUsers)
  }, [searchUsers])
  


  return {register, watch, setValue, errors, isValidCPF }
}

