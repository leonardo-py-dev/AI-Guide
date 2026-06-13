import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CheatsheetPage } from "@/components/cheatsheet/CheatsheetPage"
import { testChecklist, testSteps } from "@/data/cheatsheets"

export function Testes() {
  return (
    <CheatsheetPage
      title="Testes com IA"
      description="Aprenda a usar a IA para criar testes que garantem que seu código funciona — e entenda o que está testando em cada caso."
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          {testSteps.map((step) => (
            <Card key={step.title}>
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
          <h2 className="mb-3 text-xl font-semibold">
            Checklist de cobertura mínima
          </h2>
          <ul className="flex flex-col gap-2">
            {testChecklist.map((item) => (
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
