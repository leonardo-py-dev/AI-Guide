import { CheatsheetPage } from "@/components/cheatsheet/CheatsheetPage"
import { ToolCard } from "@/components/cheatsheet/ToolCard"
import { aiClis, cliComparison } from "@/data/cheatsheets"

export function AiClis() {
  return (
    <CheatsheetPage
      title="CLIs Open Source"
      description="Agentes de codificação no terminal. OpenCode e OpenClaude permitem fluxos autônomos com múltiplos provedores de IA, incluindo modelos locais via Ollama."
    >
      <div className="flex flex-col gap-8">
        <div className="grid gap-6">
          {aiClis.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Comparativo rápido</h2>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium">Recurso</th>
                  <th className="px-4 py-3 text-left font-medium">OpenCode</th>
                  <th className="px-4 py-3 text-left font-medium">OpenClaude</th>
                </tr>
              </thead>
              <tbody>
                {cliComparison.map((row) => (
                  <tr key={row.feature} className="border-b last:border-0">
                    <td className="px-4 py-3 font-medium">{row.feature}</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {row.opencode}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {row.openclaude}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </CheatsheetPage>
  )
}
