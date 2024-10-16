import { useEffect } from "react"
import { useDashboadStore } from "~/pages/Dashboard/store"
import { getUsers } from "~/services"

export const useFecth = () => {
  const{ isUpdated, setIsUpdated, setIsLoadingAPI, setUsers } = useDashboadStore()

  const getData = async() => {
    setIsLoadingAPI(true)
    const users = await getUsers()
   
    setTimeout(() => {
      setUsers(users)
      setIsLoadingAPI(false)
    }, 1000);

    console.log('Get Reg', users)
  }

  useEffect(() => {
    if(isUpdated) {
      getData()
      setIsUpdated(false)
    }
  }, [isUpdated])


  return 
}

