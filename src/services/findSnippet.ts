import { db } from '@/db'

export const findSnippets = async (id:number) => {
  return await db.snippet.findFirst({
    where: { id }
  })

}
 
