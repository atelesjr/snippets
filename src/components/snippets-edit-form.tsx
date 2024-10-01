'use client'

import type { Snippet } from "@prisma/client"
import  Editor from "@monaco-editor/react"
import { useState } from "react"
import * as actions from '@/actions'
import Link from "next/link"


interface SnippetEditFormProps {
  snippet: Snippet
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps){
  const [code, setCode] = useState('');
  const { id } = snippet
  
  const handleEditorChange = (value: string = "") => {
    setCode(value)
  }

  const editSnippetAction = actions.editSnippet.bind(null, id, code)

  return (
    <div className="pt-4">
      <Editor
        height={'40vh'}
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{
          minimap: { enabled: false }
        }}
        onChange={handleEditorChange}
      />
      <div className="flex gap-4 mt-4">
        <form action={editSnippetAction}>
          <button type="submit" className="p-2 border rounded">Save</button>
        </form>
        <Link className="p-2 border rounded" href={`/snippets/${snippet.id}`}>Cancelar</Link>
      </div>
    </div>
  )

}