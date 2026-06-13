import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CheatsheetPage } from "@/components/cheatsheet/CheatsheetPage"
import { debugChecklist, debugSteps } from "@/data/cheatsheets"

export function Debug() {
  return (
    <CheatsheetPage
      title="Debug Assistido por IA"
      description="Um roteiro simples para usar a IA como aliada na hora de resolver erros — sem entrar em pânico e sem dependência cega."
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          {debugSteps.map((step) => (
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
            Checklist do debug
          </h2>
          <ul className="flex flex-col gap-2">
            {debugChecklist.map((item) => (
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
