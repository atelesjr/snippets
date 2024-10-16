import { User } from "./interfaces"

const APIurl = 'http://localhost:3000'

export const getUsers = () => {
  const response = fetch(`${APIurl}/registrations`)
  .then(res => res.json())
  .catch(error => console.log('Error com API Get REgistrations', error) )

  return response
}

export const putUser = (id:string, body: any) => {
  const fetchOptions = {
    method: 'PUT',
    body: JSON.stringify(body)
  }

  const response = fetch(`${APIurl}/registrations/${id}`, fetchOptions)
  .then(res => {res.json()})
 
  .catch(error => console.log('Error com API PUT REgistrations', error) )

  return response
}

export const deleteUser = (id: string) => {
  const fetchOptions = {
    method: 'DELETE',
  }

  const response = fetch(`${APIurl}/registrations/${id}`, fetchOptions)
  .then(res => res.json())
  .catch(error => console.log('Error com API DELETE REgistrations', error) )

  return response
}

export const postUser = (user:User) => {
  const fetchOptions = {
    method: 'POST',
    body: JSON.stringify(user)
  }
  const response = fetch(`${APIurl}/registrations`, fetchOptions)
  .then(res => res.json())
  .catch(error => console.log('Error com API POST REgistrations', error) )

  return response

}