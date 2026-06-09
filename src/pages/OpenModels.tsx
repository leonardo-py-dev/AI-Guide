import { CheatsheetPage } from "@/components/cheatsheet/CheatsheetPage"
import { CodeBlock } from "@/components/cheatsheet/CodeBlock"
import { ToolCard } from "@/components/cheatsheet/ToolCard"
import { modelComparison, openModels } from "@/data/cheatsheets"

export function OpenModels() {
  return (
    <CheatsheetPage
      title="Modelos Open Source e Gateways"
      description="Execute modelos localmente com Ollama ou acesse centenas de modelos na nuvem via OpenRouter. Entenda quando usar cada abordagem."
    >
      <div className="flex flex-col gap-8">
        <div className="grid gap-6">
          {openModels.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Local vs Nuvem</h2>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium">Aspecto</th>
                  <th className="px-4 py-3 text-left font-medium">Local (Ollama)</th>
                  <th className="px-4 py-3 text-left font-medium">Nuvem (OpenRouter)</th>
                </tr>
              </thead>
              <tbody>
                {modelComparison.map((row) => (
                  <tr key={row.aspect} className="border-b last:border-0">
                    <td className="px-4 py-3 font-medium">{row.aspect}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.local}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.cloud}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Exemplo: Ollama com OpenCode</h2>
          <p className="text-sm text-muted-foreground">
            Depois de instalar o Ollama e baixar um modelo, configure o OpenCode
            para usá-lo localmente:
          </p>
          <CodeBlock
            language="bash"
            code={`# Baixar modelo
ollama pull qwen2.5-coder:7b

# No OpenCode, conecte via /connect ou configure:
# ~/.config/opencode/opencode.json`}
          />
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Exemplo: OpenRouter com OpenClaude</h2>
          <CodeBlock
            language="bash"
            code={`# Configure a variável de ambiente
export OPENROUTER_API_KEY=sk-or-v1-sua-chave

# No OpenClaude, use /provider para selecionar OpenRouter`}
          />
        </section>
      </div>
    </CheatsheetPage>
  )
}
