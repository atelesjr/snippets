'use client'

import { useFormState } from 'react-dom'
import * as actions from '@/actions'

export default function SnippetCreatePage() {
  const { createSnippet } = actions
  const [formState, action] = useFormState(createSnippet, { message: '' })

  return (
    <form action={action}>
      <h3 className="font-bold m-3">Create Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">Title</label>
          <input 
            name="title" 
            className="border rouded p-2 w-full"
            id='title' 
          />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">Code</label>
          <textarea 
            name="code" 
            className="border rouded p-2 w-full"
            id='code' 
          />
        </div>

        {
          formState.message 
          ? (
            <div className='my-2 bg-red-200  p-1 border rounded border-red-400'>
              {formState.message}
            </div>
          ) 
          : null
        }


        <button type="submit" className="rouded p-2 bg-blue-200">
          Create
        </button>
      </div>

    </form>
  )
}