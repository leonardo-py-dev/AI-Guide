import { CheatsheetPage } from "@/components/cheatsheet/CheatsheetPage"
import { ToolCard } from "@/components/cheatsheet/ToolCard"
import { aiIdes } from "@/data/cheatsheets"

export function AiIdes() {
  return (
    <CheatsheetPage
      title="IDEs com IA Nativa"
      description="Editores de código com inteligência artificial integrada. Cada um tem pontos fortes diferentes — escolha conforme seu orçamento, sistema operacional e estilo de trabalho."
    >
      <div className="grid gap-6 lg:grid-cols-1">
        {aiIdes.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </CheatsheetPage>
  )
}
