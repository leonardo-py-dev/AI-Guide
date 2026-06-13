import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CheatsheetPage } from "@/components/cheatsheet/CheatsheetPage"
import { CodeBlock } from "@/components/cheatsheet/CodeBlock"
import { promptChecklist, promptExamples } from "@/data/cheatsheets"

const sections = [
  {
    title: "Contexto é tudo",
    description:
      "Antes de pedir código, conte para a IA o cenário completo: o que você está construindo, qual linguagem e quais ferramentas. Um pedido sem contexto gera código genérico que não se encaixa no seu projeto.",
    tips: [
      "\"Estou fazendo um site de receitas em React com TypeScript\" funciona melhor que \"Faz um site para mim\"",
      "Informe a versão da biblioteca se for relevante",
      "Diga se está começando do zero ou editando algo existente",
    ],
  },
  {
    title: "Seja específico sobre o resultado",
    description:
      "Descreva exatamente o que a função ou componente deve fazer: o que recebe, o que devolve e qual o comportamento esperado. Evite pedidos vagos.",
    tips: [
      "Em vez de \"Faz uma tela de login\", diga \"Crie um formulário de login com campos de email e senha, validação básica e botão de submit\"",
      "Quanto mais detalhes, mais útil será a resposta",
    ],
  },
  {
    title: "Tipos de prompt que você vai usar",
    description:
      "Domine quatro categorias principais. Cada uma tem um jeito certo de perguntar.",
    tips: [
      "Explicar: \"Explique o que este código faz, linha por linha\"",
      "Debugar: \"Estou recebendo o erro X na linha Y. O código é: ...\"",
      "Refatorar: \"Como posso simplificar esta função sem mudar o resultado?\"",
      "Gerar: \"Crie uma função que receba [entrada] e devolva [saída], usando [tecnologia]\"",
    ],
  },
]

export function Prompting() {
  return (
    <CheatsheetPage
      title="Prompting para Programação"
      description="Aprenda a conversar com a IA de forma clara para obter código que realmente funciona no seu projeto. O segredo não é pedir mais, é pedir melhor."
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          {sections.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <CardTitle className="text-lg">{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              {section.tips && section.tips.length > 0 ? (
                <CardContent>
                  <ul className="flex flex-col gap-2">
                    {section.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-sm">
                        <Badge variant="outline" className="mt-0.5 shrink-0">
                          Dica
                        </Badge>
                        <span className="text-muted-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              ) : null}
            </Card>
          ))}
        </div>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Ruim vs. Bom</h2>
          <p className="text-sm text-muted-foreground">
            Compare pedidos vagos com versões melhores e entenda a diferença.
          </p>
          <div className="flex flex-col gap-4">
            {promptExamples.map((example) => (
              <Card key={example.scenario}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="rounded-full">
                      {example.scenario}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-red-600">
                      Ruim
                    </p>
                    <CodeBlock code={example.bad} />
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-green-600">
                      Bom
                    </p>
                    <CodeBlock code={example.good} />
                  </div>
                  <div className="rounded-lg bg-muted/50 p-3">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Por quê?
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {example.why}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="rounded-lg border bg-muted/30 p-6">
          <h2 className="mb-3 text-xl font-semibold">
            Checklist antes de aceitar código
          </h2>
          <ul className="flex flex-col gap-2">
            {promptChecklist.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-0.5 size-5 shrink-0 rounded-full border border-primary/30 bg-primary/10 text-center text-xs leading-5 text-primary">
                  ?
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </CheatsheetPage>
  )
}
