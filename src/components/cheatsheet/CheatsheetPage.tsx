import type { ReactNode } from "react"

interface CheatsheetPageProps {
  title: string
  description: string
  children: ReactNode
}

export function CheatsheetPage({
  title,
  description,
  children,
}: CheatsheetPageProps) {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="max-w-3xl text-muted-foreground">{description}</p>
      </header>
      {children}
    </div>
  )
}
