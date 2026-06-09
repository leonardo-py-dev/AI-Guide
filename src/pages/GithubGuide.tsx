import { CheatsheetPage } from "@/components/cheatsheet/CheatsheetPage"
import { CodeBlock } from "@/components/cheatsheet/CodeBlock"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { githubGuide, githubRepoStructure } from "@/data/cheatsheets"

export function GithubGuide() {
  return (
    <CheatsheetPage
      title="Guia GitHub"
      description="Passo a passo para criar, organizar e manter repositórios no GitHub. Boas práticas essenciais para estudantes e projetos de portfólio."
    >
      <div className="flex flex-col gap-8">
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Estrutura recomendada</h2>
          <CodeBlock code={githubRepoStructure} language="text" />
        </section>

        <div className="flex flex-col gap-4">
          {githubGuide.map((step, index) => (
            <Card key={step.title} className={index === 7 ? "print-break" : ""}>
              <CardHeader>
                <CardTitle className="text-lg">{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
              {step.tips && step.tips.length > 0 ? (
                <CardContent>
                  <ul className="flex flex-col gap-2">
                    {step.tips.map((tip) => (
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

        <section className="rounded-lg border bg-muted/30 p-6">
          <h2 className="mb-2 text-xl font-semibold">Jornada completa</h2>
          <p className="text-sm text-muted-foreground">
            Este guia é o último passo do fluxo de estudo do AI Guide: escolha
            uma IDE com IA, configure um modelo, experimente CLIs no terminal,
            versione com Git e publique no GitHub. Com essa base, você tem tudo
            para desenvolver projetos com IA de forma organizada e profissional.
          </p>
        </section>
      </div>
    </CheatsheetPage>
  )
}
