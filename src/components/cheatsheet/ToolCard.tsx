import { ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CodeBlock } from "@/components/cheatsheet/CodeBlock"
import type { Tool } from "@/data/cheatsheets"

interface ToolCardProps {
  tool: Tool
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-2">
          <CardTitle className="text-xl">{tool.name}</CardTitle>
          <Badge variant="secondary">{tool.pricing}</Badge>
        </div>
        <CardDescription>{tool.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div>
          <h4 className="mb-2 text-sm font-medium">Quando usar</h4>
          <p className="text-sm text-muted-foreground">{tool.whenToUse}</p>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-medium">Pontos fortes</h4>
          <ul className="flex flex-col gap-1 text-sm text-muted-foreground">
            {tool.pros.map((pro) => (
              <li key={pro} className="list-inside list-disc">
                {pro}
              </li>
            ))}
          </ul>
        </div>

        {tool.limitations.length > 0 ? (
          <div>
            <h4 className="mb-2 text-sm font-medium">Limitações</h4>
            <ul className="flex flex-col gap-1 text-sm text-muted-foreground">
              {tool.limitations.map((limitation) => (
                <li key={limitation} className="list-inside list-disc">
                  {limitation}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {tool.shortcuts && tool.shortcuts.length > 0 ? (
          <div>
            <h4 className="mb-2 text-sm font-medium">Atalhos principais</h4>
            <ul className="flex flex-col gap-1 text-sm">
              {tool.shortcuts.map((shortcut) => (
                <li key={shortcut.keys} className="flex gap-2">
                  <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                    {shortcut.keys}
                  </code>
                  <span className="text-muted-foreground">
                    {shortcut.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {tool.install ? (
          <div>
            <h4 className="mb-2 text-sm font-medium">Instalação</h4>
            <CodeBlock code={tool.install} />
          </div>
        ) : null}
      </CardContent>
      <CardFooter>
        <Button variant="outline" asChild>
          <a href={tool.url} target="_blank" rel="noopener noreferrer">
            Site oficial
            <ExternalLink />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
