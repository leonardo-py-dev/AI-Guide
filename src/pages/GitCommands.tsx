import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheatsheetPage } from "@/components/cheatsheet/CheatsheetPage"
import { CodeBlock } from "@/components/cheatsheet/CodeBlock"
import { CommandTable } from "@/components/cheatsheet/CommandTable"
import { gitSections, studentGitFlow } from "@/data/cheatsheets"

export function GitCommands() {
  return (
    <CheatsheetPage
      title="Comandos Git"
      description="Referência rápida dos comandos Git mais usados por estudantes. Clique em cada seção para expandir e use o botão copiar nos exemplos."
    >
      <div className="flex flex-col gap-8">
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Fluxo típico do estudante</h2>
          <p className="text-sm text-muted-foreground">
            Sequência completa: clonar repositório, criar branch, commitar e
            abrir Pull Request.
          </p>
          <CodeBlock code={studentGitFlow.join("\n")} language="bash" />
        </section>

        <Accordion type="multiple" defaultValue={["item-0"]} className="w-full">
          {gitSections.map((section, index) => (
            <AccordionItem key={section.title} value={`item-${index}`}>
              <AccordionTrigger className="text-base font-medium">
                {section.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4">
                  {section.description ? (
                    <p className="text-sm text-muted-foreground">
                      {section.description}
                    </p>
                  ) : null}
                  <CommandTable commands={section.commands} />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </CheatsheetPage>
  )
}
