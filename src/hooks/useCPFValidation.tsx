import { useEffect, useState } from "react"
import { isValidCpf } from "~/util/isValidCPF";

export const useCPFValidation = (cpf:string ) => {
  const [ isValidCPF , setIsValidCPF ] = useState<string | undefined>(undefined)

  useEffect(() => {
    const isValid = isValidCpf(cpf)
    
    if(!isValid && cpf.length > 0) {
      setIsValidCPF('Este CPF não é válido')
    } else {
      setIsValidCPF(undefined)
    }
  }, [cpf])

  return { isValidCPF }
}