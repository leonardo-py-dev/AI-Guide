import type { Command } from "@/data/cheatsheets"
import { CodeBlock } from "@/components/cheatsheet/CodeBlock"

interface CommandTableProps {
  commands: Command[]
}

export function CommandTable({ commands }: CommandTableProps) {
  return (
    <div className="flex flex-col gap-4">
      {commands.map((command) => (
        <div
          key={command.command}
          className="rounded-lg border p-4"
        >
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <code className="rounded bg-muted px-2 py-1 text-sm font-semibold">
              {command.command}
            </code>
          </div>
          <p className="mb-3 text-sm text-muted-foreground">
            {command.description}
          </p>
          {command.example ? (
            <CodeBlock code={command.example} />
          ) : null}
        </div>
      ))}
    </div>
  )
}
