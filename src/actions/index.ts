'use server'
import { revalidatePath } from 'next/cache'
import { db } from '@/db'
import { redirect } from 'next/navigation'

export async function editSnippet(id:number, code:string) {
  await db.snippet.update({
    where: { id },
    data: { code }
  })

revalidatePath(`/snippets/${id}`)
  redirect(`/snippets/${id}`)
}


export const deleteSnippet = async (id:number) => {
  await db.snippet.delete({
    where: { id }

  })

  revalidatePath('/')
  redirect('/');
  
}

export const createSnippet = async (
  formState: { message: string},
  formData: FormData, 
) => {
  try {
    // check the user's inputs and make sure they're valid
    console.log('formmData', formData)
    const title = formData.get('title')
    const code = formData.get('code')

    if(typeof title !== 'string' || title.length < 3) {
      return { 
        message: 'Title must be longer'
      }
    }

    if(typeof code !== 'string' || code.length < 10) {
      return { 
        message: 'Code must be longer'
      }
    }
    //TO FORCE HANDLING ERROR MESSAGES
    //throw new Error('Failed to save to databse')

    //Create a new record in the database
    await db.snippet.create({
      data: {
        title,
        code
      }
    })

  } catch(error: unknown) {
    console.log('error', error)
    if(error instanceof Error) {
      return {
        message: error.message
      }
    }

    return {message: 'Something went wrong...'}
  }

  revalidatePath('/')
  // Redirect the user back to the root source
  redirect('/');
}