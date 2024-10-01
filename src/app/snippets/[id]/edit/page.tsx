import { findSnippets } from "@/services/findSnippet"
import { notFound } from "next/navigation"
import SnippetEditForm from "@/components/snippets-edit-form"

interface SnippetsEditPageProps {
  params: {
    id: string
  }
}

export default async function SnippetsEditPage (props: SnippetsEditPageProps) {
  const snippet = await findSnippets(+props.params.id)

  if(!snippet) {
    return notFound()
  }

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
)
}