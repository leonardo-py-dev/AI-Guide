import { Check, Copy } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language?: string
  className?: string
}

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      toast.success("Comando copiado!")
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error("Não foi possível copiar o comando.")
    }
  }

  return (
    <div className={cn("group relative rounded-lg border bg-muted", className)}>
      {language ? (
        <div className="border-b px-3 py-1.5 text-xs text-muted-foreground">
          {language}
        </div>
      ) : null}
      <pre className="overflow-x-auto p-4 text-sm">
        <code>{code}</code>
      </pre>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2 size-8 opacity-0 transition-opacity group-hover:opacity-100"
        onClick={handleCopy}
        aria-label="Copiar comando"
      >
        {copied ? <Check /> : <Copy />}
      </Button>
    </div>
  )
}
