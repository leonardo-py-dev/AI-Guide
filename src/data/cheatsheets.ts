import {
  BookOpen,
  BookOpenText,
  BrainCircuit,
  Bug,
  Compass,
  FolderGit2,
  GitBranch,
  Lightbulb,
  Monitor,
  Terminal,
  type LucideIcon,
} from "lucide-react"

export interface Shortcut {
  keys: string
  description: string
}

export interface Tool {
  name: string
  url: string
  description: string
  pricing: string
  whenToUse: string
  pros: string[]
  limitations: string[]
  install?: string
  shortcuts?: Shortcut[]
}

export interface Command {
  command: string
  description: string
  example?: string
}

export interface CommandSection {
  title: string
  description?: string
  commands: Command[]
}

export interface GuideStep {
  title: string
  description: string
  tips?: string[]
}

export interface CheatsheetLink {
  title: string
  description: string
  path: string
  icon: LucideIcon
}

export interface ComparisonRow {
  aspect: string
  local: string
  cloud: string
}

export const navItems: CheatsheetLink[] = [
  {
    title: "Início",
    description: "Visão geral e fluxo de estudo",
    path: "/",
    icon: BookOpen,
  },
  {
    title: "IDEs com IA",
    description: "Editores com IA integrada",
    path: "/ides",
    icon: Monitor,
  },
  {
    title: "Modelos Open Source",
    description: "Modelos locais e gateways",
    path: "/modelos",
    icon: Compass,
  },
  {
    title: "CLIs Open Source",
    description: "Agentes no terminal",
    path: "/clis",
    icon: Terminal,
  },
  {
    title: "Guia GitHub",
    description: "Repositórios e colaboração",
    path: "/github",
    icon: BookOpenText,
  },
  {
    title: "Comandos Git",
    description: "Referência rápida de Git",
    path: "/git",
    icon: GitBranch,
  },
  {
    title: "Prompting",
    description: "Peça melhor para a IA",
    path: "/prompting",
    icon: BrainCircuit,
  },
  {
    title: "Debug",
    description: "Resolva erros com método",
    path: "/debug",
    icon: Bug,
  },
  {
    title: "Testes",
    description: "Confira se funciona",
    path: "/testes",
    icon: Lightbulb,
  },
  {
    title: "Projetos",
    description: "Planeje e entregue melhor",
    path: "/projetos",
    icon: FolderGit2,
  },
]

export interface NavSection {
  title: string
  items: CheatsheetLink[]
}

export const navSections: NavSection[] = [
  {
    title: "Ferramentas",
    items: navItems.filter((item) =>
      ["/ides", "/modelos", "/clis", "/github", "/git"].includes(item.path)
    ),
  },
  {
    title: "Guias de Estudo",
    items: navItems.filter((item) =>
      ["/prompting", "/debug", "/testes", "/projetos"].includes(item.path)
    ),
  },
]

export const homeCheatsheets = navItems.filter((item) => item.path !== "/")

export const learningPath = [
  {
    step: 1,
    title: "Escolher uma IDE com IA",
    description: "Selecione um editor com IA integrada para começar a programar.",
    path: "/ides",
    icon: Monitor,
  },
  {
    step: 2,
    title: "Configurar um modelo",
    description: "Escolha entre modelo local (Ollama) ou gateways na nuvem (OpenRouter).",
    path: "/modelos",
    icon: Compass,
  },
  {
    step: 3,
    title: "Explorar CLIs no terminal",
    description: "Use agentes de codificação como OpenCode e OpenClaude no terminal.",
    path: "/clis",
    icon: Terminal,
  },
  {
    step: 4,
    title: "Pedir melhor para a IA",
    description: "Aprenda a transformar uma ideia solta em um pedido claro para a IA.",
    path: "/prompting",
    icon: BrainCircuit,
  },
  {
    step: 5,
    title: "Resolver erros com calma",
    description: "Use um roteiro simples para entender mensagens de erro e pedir ajuda.",
    path: "/debug",
    icon: Bug,
  },
  {
    step: 6,
    title: "Testar antes de confiar",
    description: "Verifique se o resultado da IA realmente funciona no seu projeto.",
    path: "/testes",
    icon: Lightbulb,
  },
  {
    step: 7,
    title: "Planejar projetos pequenos",
    description: "Divida ideias em partes simples e entregue uma versão funcional.",
    path: "/projetos",
    icon: FolderGit2,
  },
  {
    step: 8,
    title: "Versionar com Git",
    description: "Registre a evolução do código e volte atrás com segurança.",
    path: "/git",
    icon: GitBranch,
  },
  {
    step: 9,
    title: "Publicar no GitHub",
    description: "Crie repositórios, colabore e monte seu portfólio de projetos.",
    path: "/github",
    icon: BookOpenText,
  },
]

export const aiIdes: Tool[] = [
  {
    name: "Cursor",
    url: "https://cursor.com",
    description:
      "IDE baseada no VS Code com IA nativa: chat, agente autônomo, autocomplete inteligente e suporte a MCP.",
    pricing: "Freemium",
    whenToUse:
      "Ideal para estudantes que já usam VS Code e querem um assistente profundo no contexto do projeto, com agentes que editam vários arquivos.",
    pros: [
      "Interface familiar para quem conhece VS Code",
      "Modo Agent para tarefas complexas em múltiplos arquivos",
      "Regras (.cursor/rules) e skills para personalizar o comportamento",
      "Suporte a MCP para conectar ferramentas externas",
      "Tab completion contextual",
    ],
    limitations: [
      "Plano Pro necessário para uso intensivo",
      "Requer conexão com internet para modelos em nuvem",
    ],
    install: "# Baixe em cursor.com/download\n# Importa extensões e configurações do VS Code",
    shortcuts: [
      { keys: "Ctrl+L", description: "Abrir chat com IA" },
      { keys: "Ctrl+I", description: "Abrir modo Agent (Composer)" },
      { keys: "Tab", description: "Aceitar sugestão de código" },
      { keys: "Ctrl+K", description: "Editar código inline com IA" },
    ],
  },
  {
    name: "Google Antigravity",
    url: "https://antigravity.google",
    description:
      "Plataforma agentic do Google com IDE integrada e Agent Manager standalone para orquestrar múltiplos agentes em paralelo.",
    pricing: "Gratuito (preview)",
    whenToUse:
      "Bom para quem quer experimentar desenvolvimento orientado a agentes, com modelos Gemini, Claude e GPT, e fluxos que envolvem editor, terminal e browser.",
    pros: [
      "Agentes autônomos que planejam e executam tarefas complexas",
      "Acesso a Gemini 3 Pro, Claude Sonnet e GPT com limites generosos",
      "Artifacts: screenshots, planos e relatórios do agente",
      "CLI (agy) para uso no terminal",
      "Disponível para Windows, macOS e Linux",
    ],
    limitations: [
      "Ecossistema em evolução (IDE e Agent Manager são produtos separados)",
      "Curva de aprendizado maior que um editor tradicional",
    ],
    install: "# Baixe em antigravity.google/download\n# Escolha Antigravity IDE ou Agent Manager 2.0",
    shortcuts: [
      { keys: "Ctrl+Shift+A", description: "Abrir painel do agente" },
      { keys: "Ctrl+`", description: "Abrir terminal integrado" },
    ],
  },
  {
    name: "Trae",
    url: "https://www.trae.ai",
    description:
      "IDE com IA da ByteDance, fork do VS Code, com tier gratuito generoso e modos Builder/SOLO para criar projetos inteiros.",
    pricing: "Gratuito",
    whenToUse:
      "Excelente para estudantes com orçamento limitado que querem acesso a modelos premium (Claude, GPT) sem pagar assinatura.",
    pros: [
      "Tier gratuito com acesso a modelos avançados",
      "Builder/SOLO mode: descreva o app e a IA implementa",
      "Compatível com extensões do VS Code",
      "Suporte a MCP e agentes customizados",
      "Bom para prototipagem rápida",
    ],
    limitations: [
      "Limites de taxa no plano gratuito em horários de pico",
      "Menos maduro que Cursor em projetos corporativos grandes",
    ],
    install: "# Baixe em trae.ai\n# Importe configurações do VS Code na primeira execução",
    shortcuts: [
      { keys: "Ctrl+L", description: "Abrir chat com IA" },
      { keys: "Ctrl+Shift+B", description: "Ativar Builder mode" },
    ],
  },
]

export const openModels: Tool[] = [
  {
    name: "Ollama",
    url: "https://ollama.com",
    description:
      "Execute modelos de linguagem localmente no seu computador. Privacidade total — o código nunca sai da máquina.",
    pricing: "Gratuito / Open Source",
    whenToUse:
      "Quando você precisa de privacidade, quer trabalhar offline (após baixar o modelo), ou não tem budget para APIs pagas.",
    pros: [
      "100% local — dados não saem do computador",
      "Instalação simples com um comando",
      "Modelos populares: Llama, Qwen, DeepSeek, Mistral",
      "Integração com OpenCode, OpenClaude e outras ferramentas",
      "Sem custo por token",
    ],
    limitations: [
      "Requer hardware adequado (RAM/GPU) para modelos maiores",
      "Modelos locais podem ser menos capazes que os de nuvem",
      "Download inicial dos modelos pode ser grande",
    ],
    install: "# Windows (PowerShell)\nwinget install Ollama.Ollama\n\n# macOS / Linux\ncurl -fsSL https://ollama.com/install.sh | sh",
    shortcuts: [
      { keys: "ollama pull llama3.2", description: "Baixar um modelo" },
      { keys: "ollama run llama3.2", description: "Iniciar chat com modelo" },
      { keys: "ollama list", description: "Listar modelos instalados" },
    ],
  },
  {
    name: "OpenRouter",
    url: "https://openrouter.ai",
    description:
      "Gateway unificado que dá acesso a 200+ modelos de IA via uma única API key — incluindo modelos gratuitos.",
    pricing: "Pay-per-use + modelos free",
    whenToUse:
      "Quando você quer flexibilidade para testar vários modelos (Claude, GPT, Llama, Gemini) sem criar conta em cada provedor.",
    pros: [
      "Uma API key para centenas de modelos",
      "Modelos gratuitos disponíveis para testes",
      "Funciona com CLIs, IDEs e scripts customizados",
      "Comparativo de preços entre modelos",
      "Sem vendor lock-in",
    ],
    limitations: [
      "Requer internet e API key",
      "Custos variam por modelo — monitore o uso",
      "Dados são enviados para provedores na nuvem",
    ],
    install: "# 1. Crie conta em openrouter.ai\n# 2. Gere uma API key\n# 3. Configure na sua ferramenta:\nexport OPENROUTER_API_KEY=sk-or-v1-...",
  },
]

export const modelComparison: ComparisonRow[] = [
  {
    aspect: "Privacidade",
    local: "Código fica na sua máquina (Ollama)",
    cloud: "Dados enviados para servidores externos",
  },
  {
    aspect: "Custo",
    local: "Gratuito (custo de hardware)",
    cloud: "Pago por uso ou assinatura",
  },
  {
    aspect: "Qualidade",
    local: "Boa com modelos 7B–70B locais",
    cloud: "Melhor com modelos flagship (GPT-4, Claude)",
  },
  {
    aspect: "Velocidade",
    local: "Depende do seu hardware",
    cloud: "Geralmente rápida com boa conexão",
  },
  {
    aspect: "Offline",
    local: "Sim, após baixar o modelo",
    cloud: "Não — requer internet",
  },
]

export const aiClis: Tool[] = [
  {
    name: "OpenCode",
    url: "https://opencode.ai",
    description:
      "Agente de codificação open source no terminal com suporte a 75+ provedores de LLM, incluindo Ollama local.",
    pricing: "Gratuito / Open Source",
    whenToUse:
      "Para fluxos agenticos no terminal: refatorar projetos, explorar codebases desconhecidos ou automatizar tarefas com scripts.",
    pros: [
      "TUI bonita e produtiva no terminal",
      "Agentes build (edição) e plan (somente leitura)",
      "Suporte a Ollama, OpenRouter, Copilot e mais",
      "Comando não-interativo: opencode run",
      "Servidor HTTP e SDK para automação",
    ],
    limitations: [
      "Curva de aprendizado se você não usa terminal",
      "Custo depende do provedor de modelo escolhido",
    ],
    install: "# Instalação rápida\ncurl -fsSL https://opencode.ai/install | bash\n\n# Ou via npm\nnpm i -g opencode-ai",
    shortcuts: [
      { keys: "opencode", description: "Iniciar interface no terminal" },
      { keys: "opencode run \"...\"", description: "Executar prompt sem interação" },
      { keys: "/connect", description: "Conectar provedor de modelo" },
      { keys: "/init", description: "Analisar projeto e criar AGENTS.md" },
      { keys: "Tab", description: "Alternar entre agentes build e plan" },
    ],
  },
  {
    name: "OpenClaude",
    url: "https://github.com/Gitlawb/openclaude",
    description:
      "CLI open source de agente de codificação multi-provedor. Funciona com OpenAI, Gemini, Ollama e 200+ modelos.",
    pricing: "Gratuito / Open Source",
    whenToUse:
      "Quando você quer um fluxo estilo Claude Code mas com liberdade para trocar de modelo e rodar localmente via Ollama.",
    pros: [
      "Um CLI para cloud e modelos locais",
      "Perfis de provedor salvos com /provider",
      "Ferramentas: bash, arquivos, grep, MCP, web",
      "Extensão VS Code incluída",
      "Comunidade ativa no GitHub",
    ],
    limitations: [
      "Projeto independente — não é da Anthropic",
      "Requer Node.js para instalação via npm",
    ],
    install: "npm install -g @gitlawb/openclaude@latest",
    shortcuts: [
      { keys: "openclaude", description: "Iniciar o CLI" },
      { keys: "/provider", description: "Configurar provedor de modelo" },
      { keys: "/help", description: "Listar comandos disponíveis" },
    ],
  },
]

export const cliComparison = [
  {
    feature: "Interface",
    opencode: "TUI no terminal + app desktop + extensão IDE",
    openclaude: "CLI no terminal + extensão VS Code",
  },
  {
    feature: "Provedores",
    opencode: "75+ provedores, Ollama, Copilot",
    openclaude: "OpenAI, Gemini, Ollama, OpenRouter e mais",
  },
  {
    feature: "Modo não-interativo",
    opencode: "opencode run \"prompt\"",
    openclaude: "Via scripts e pipes",
  },
  {
    feature: "Agentes",
    opencode: "build (edição) e plan (leitura)",
    openclaude: "Agentes e sub-agentes com MCP",
  },
  {
    feature: "Instalação",
    opencode: "curl, npm, brew, scoop",
    openclaude: "npm install -g",
  },
]

export const gitSections: CommandSection[] = [
  {
    title: "Configuração inicial",
    description: "Configure sua identidade antes do primeiro commit.",
    commands: [
      {
        command: "git config --global user.name \"Seu Nome\"",
        description: "Define seu nome para aparecer nos commits.",
      },
      {
        command: "git config --global user.email \"email@exemplo.com\"",
        description: "Define seu e-mail (use o mesmo do GitHub).",
      },
      {
        command: "git config --global init.defaultBranch main",
        description: "Define 'main' como branch padrão em novos repositórios.",
      },
    ],
  },
  {
    title: "Repositório",
    commands: [
      {
        command: "git init",
        description: "Cria um novo repositório Git na pasta atual.",
      },
      {
        command: "git clone <url>",
        description: "Copia um repositório remoto para sua máquina.",
        example: "git clone https://github.com/usuario/projeto.git",
      },
      {
        command: "git status",
        description: "Mostra arquivos modificados, staged e não rastreados.",
      },
      {
        command: "git log --oneline --graph",
        description: "Histórico de commits em formato compacto com grafo.",
      },
    ],
  },
  {
    title: "Trabalho diário",
    commands: [
      {
        command: "git add <arquivo>",
        description: "Adiciona arquivo ao staging (prepara para commit).",
        example: "git add .\n# Adiciona todos os arquivos modificados",
      },
      {
        command: "git commit -m \"mensagem\"",
        description: "Salva as mudanças staged com uma mensagem descritiva.",
        example: "git commit -m \"feat: adiciona página de login\"",
      },
      {
        command: "git diff",
        description: "Mostra diferenças entre working directory e staging.",
      },
      {
        command: "git stash",
        description: "Guarda mudanças temporariamente sem commitar.",
        example: "git stash pop\n# Restaura as mudanças guardadas",
      },
    ],
  },
  {
    title: "Branches",
    commands: [
      {
        command: "git branch",
        description: "Lista branches locais.",
      },
      {
        command: "git switch -c <nome>",
        description: "Cria e muda para uma nova branch.",
        example: "git switch -c feature/login",
      },
      {
        command: "git switch <nome>",
        description: "Muda para uma branch existente.",
      },
      {
        command: "git merge <branch>",
        description: "Integra mudanças de outra branch na atual.",
      },
      {
        command: "git rebase <branch>",
        description: "Reaplica commits da branch atual sobre outra base.",
      },
    ],
  },
  {
    title: "Remoto",
    commands: [
      {
        command: "git remote -v",
        description: "Lista repositórios remotos configurados.",
      },
      {
        command: "git remote add origin <url>",
        description: "Conecta repositório local a um remoto no GitHub.",
      },
      {
        command: "git fetch",
        description: "Baixa mudanças do remoto sem aplicar.",
      },
      {
        command: "git pull",
        description: "Baixa e integra mudanças do remoto na branch atual.",
      },
      {
        command: "git push -u origin <branch>",
        description: "Envia commits locais para o remoto.",
        example: "git push -u origin main",
      },
    ],
  },
  {
    title: "Desfazer mudanças",
    commands: [
      {
        command: "git restore <arquivo>",
        description: "Descarta mudanças não commitadas em um arquivo.",
      },
      {
        command: "git reset --soft HEAD~1",
        description: "Desfaz o último commit mantendo as mudanças staged.",
      },
      {
        command: "git reset --hard HEAD~1",
        description: "Desfaz o último commit e descarta todas as mudanças.",
      },
      {
        command: "git revert <commit>",
        description: "Cria um novo commit que desfaz um commit anterior (seguro para histórico público).",
      },
    ],
  },
]

export const studentGitFlow = [
  "git clone https://github.com/usuario/projeto.git",
  "cd projeto",
  "git switch -c minha-feature",
  "# ... faça suas alterações ...",
  "git add .",
  "git commit -m \"feat: descreva o que fez\"",
  "git push -u origin minha-feature",
  "# Abra um Pull Request no GitHub",
]

export const githubGuide: GuideStep[] = [
  {
    title: "1. Criar o repositório",
    description:
      "No GitHub, clique em New repository. Escolha um nome claro, adicione descrição, marque README, .gitignore (Node, Python, etc.) e licença (MIT é comum para projetos de estudo).",
    tips: [
      "Prefira repositórios públicos para portfólio",
      "Use nomes em kebab-case: meu-projeto-ia",
    ],
  },
  {
    title: "2. Estrutura mínima do projeto",
    description:
      "Todo repositório deve ter pelo menos: README.md, .gitignore, licença e estrutura de pastas organizada (src/, docs/, etc.).",
    tips: [
      "README explica o que é, como instalar e como rodar",
      "Nunca commite node_modules/ ou arquivos de build",
    ],
  },
  {
    title: "3. Commits semânticos",
    description:
      "Use mensagens claras no formato: tipo(escopo): descrição. Tipos comuns: feat, fix, docs, refactor, test, chore.",
    tips: [
      "feat: adiciona autenticação com JWT",
      "fix: corrige validação do formulário",
      "docs: atualiza README com instruções de deploy",
    ],
  },
  {
    title: "4. Branches e Pull Requests",
    description:
      "Trabalhe em branches separadas (feature/nome, fix/nome). Quando terminar, abra um Pull Request para revisão antes de mergear na main.",
    tips: [
      "Uma branch = uma funcionalidade ou correção",
      "Descreva o que mudou no PR e como testar",
    ],
  },
  {
    title: "5. Issues e organização",
    description:
      "Use Issues para registrar bugs, tarefas e ideias. Labels (bug, enhancement, documentation) ajudam a organizar.",
    tips: [
      "Referencie issues nos commits: fix: resolve validação (#12)",
      "Projetos (Projects) ajudam em trabalhos em grupo",
    ],
  },
  {
    title: "6. GitHub Actions (conceito)",
    description:
      "Actions automatizam tarefas: rodar testes, fazer build, deploy. Um workflow básico roda a cada push ou PR.",
    tips: [
      "Comece com um workflow que roda npm test",
      "Arquivos ficam em .github/workflows/",
    ],
  },
  {
    title: "7. Boas práticas de segurança",
    description:
      "Nunca commite senhas, API keys ou tokens. Use variáveis de ambiente e arquivos .env.example como referência.",
    tips: [
      "Adicione .env ao .gitignore",
      "Se vazar um secret, revogue imediatamente no provedor",
      "Use GitHub Secrets para CI/CD",
    ],
  },
  {
    title: "8. Checklist de manutenção semanal",
    description:
      "Revise seu repositório regularmente para mantê-lo saudável e apresentável.",
    tips: [
      "README está atualizado?",
      "Dependências têm vulnerabilidades? (Dependabot)",
      "Issues abertas foram triadas?",
      "Branches antigas foram removidas?",
      "O projeto ainda builda sem erros?",
    ],
  },
]

// --- Prompting (Guia 1) ---

export interface PromptExample {
  scenario: string
  bad: string
  good: string
  why: string
}

export const promptExamples: PromptExample[] = [
  {
    scenario: "Criar um formulário",
    bad: "Faz uma tela de login",
    good:
      "Cria um formulário de login em React com TypeScript. Deve ter campos de email e senha, validação se os campos não estão vazios e um botão de submit que chama uma função onLogin(email, senha).",
    why: "O prompt bom diz onde (React + TypeScript), o que (formulário com validação) e como (função de callback).",
  },
  {
    scenario: "Pedir ajuda com erro",
    bad: "Meu código não funciona",
    good:
      "Estou recebendo 'TypeError: Cannot read properties of undefined' na linha 15 de App.tsx quando clico no botão de submit. O código é: [código]. O que pode estar causando isso?",
    why: "O prompt bom informa o erro exato, a localização e o código relevante. A IA consegue investigar de verdade.",
  },
  {
    scenario: "Pedir explicação",
    bad: "O que isso faz?",
    good:
      "Explique esta função linha por linha: o que cada parte faz, o que a função recebe e o que ela devolve. Código: [código]",
    why: "O prompt bom pede uma explicação estruturada. Você entende o fluxo completo, não um resumo vago.",
  },
]

export const promptChecklist: string[] = [
  "Entendi o que cada parte do código faz?",
  "O código se encaixa no resto do meu projeto?",
  "Testei com valores diferentes do exemplo?",
  "Consigo explicar para outra pessoa como funciona?",
  "Sei quais partes manter e quais adaptar?",
]

// --- Debug (Guia 4) ---

export const debugSteps: GuideStep[] = [
  {
    title: "1. Leia o erro com calma",
    description:
      "A mensagem de erro não é sua inimiga. Ela diz exatamente o que deu errado, em qual linha e muitas vezes até sugere a causa. Copie o erro completo, não só a última linha.",
    tips: [
      "Preste atenção ao tipo do erro: TypeError, ReferenceError, SyntaxError — cada um tem uma causa diferente",
      "Veja o número da linha e o arquivo indicado. É por onde você começa",
    ],
  },
  {
    title: "2. Descreva o erro para a IA",
    description:
      "Conte o contexto: o que você esperava que acontecesse, o que aconteceu de fato, em qual arquivo e linha, e quais dados estavam envolvidos.",
    tips: [
      "\"Esperava que o botão mudasse de cor ao clicar, mas nada acontece\" é melhor que \"Não funciona\"",
      "Inclua só o código relevante, não o arquivo inteiro",
    ],
  },
  {
    title: "3. Isole o problema",
    description:
      "Se você comentar uma linha e o erro sumir, você achou o culpado. Teste uma hipótese de cada vez para não se perder.",
    tips: [
      "Mude uma coisa por vez e teste novamente",
      "Pergunte à IA: 'Se eu comentar esta linha e o erro sumir, o que isso significa?'",
    ],
  },
  {
    title: "4. Use logs como farol",
    description:
      "Coloque console.log antes e depois da linha suspeita para ver o valor das variáveis. Compare o que esperava com o que realmente está chegando.",
    tips: [
      "Log não é gambiarra — é a ferramenta mais eficiente de diagnóstico",
      "Exemplo: console.log('valor antes:', variavel) antes da linha que dá erro",
    ],
  },
  {
    title: "5. Peça diagnóstico, não solução",
    description:
      "Em vez de 'Conserta pra mim', pergunte 'O que pode estar causando isso?'. Entender a causa é mais importante que a correção imediata.",
    tips: [
      "Quando você entende a causa, aprende a evitar o mesmo erro no futuro",
      "Depois de entender, você mesmo pode propor a correção com mais confiança",
    ],
  },
]

export const debugChecklist: string[] = [
  "Copiei a mensagem de erro completa?",
  "Descrevi o contexto (arquivo, linha, o que estava fazendo)?",
  "Testei isolar o problema comentando partes do código?",
  "Coloquei logs estratégicos para ver valores?",
  "Entendi a causa antes de aplicar a correção?",
]

// --- Testes (Guia 5) ---

export const testSteps: GuideStep[] = [
  {
    title: "1. Por que testar?",
    description:
      "Testes não são burocracia — são sua rede de segurança. Um teste bom avisa quando você quebra algo sem querer. Com IA, criar testes fica mais rápido, mas você ainda precisa entender o que cada teste verifica.",
    tips: [
      "Testes dão confiança para refatorar sem medo de quebrar",
      "Um projeto com testes é mais profissional e fácil de manter",
    ],
  },
  {
    title: "2. Como pedir testes para a IA",
    description:
      "Mostre o código para a IA e diga o que ele deveria fazer. Peça casos de teste específicos: valores normais, valores vazios e entradas inesperadas.",
    tips: [
      "Inclua o código completo da função ou componente",
      "Diga: 'Teste se funciona com valores normais, com valores vazios e com entradas erradas'",
      "Peça também: 'Explique o que cada teste verifica'",
    ],
  },
  {
    title: "3. Exemplo: testar uma função",
    description:
      "Para uma função soma(a, b), peça testes com números positivos, negativos, zero e decimais. Veja se os testes realmente passam quando você executa.",
    tips: [
      "Caminho feliz: soma(2, 3) deve retornar 5",
      "Borda: soma(0, 0) e soma(-1, 1)",
      "Erro: se a função espera números, o que acontece se passar texto?",
    ],
  },
  {
    title: "4. Exemplo: testar um componente",
    description:
      "Para um componente de botão que conta cliques, os testes verificam se ele renderiza e se o contador incrementa ao clicar.",
    tips: [
      "Teste de renderização: o botão aparece na tela?",
      "Teste de interação: clicar aumenta o contador?",
      "Peça à IA: 'Crie testes para este componente React' e revise o que ela gerou",
    ],
  },
]

export const testChecklist: string[] = [
  "Testei o caminho feliz (funciona como esperado)?",
  "Testei bordas (valores vazios, extremos, negativos)?",
  "Testei erros (comportamento quando algo dá errado)?",
  "Entendo o que cada teste verifica?",
  "Os testes realmente passam quando executo?",
]

// --- Projetos (Guia 7) ---

export interface ProjectIdea {
  name: string
  description: string
  difficulty: string
}

export const projectSteps: GuideStep[] = [
  {
    title: "1. Da ideia ao plano",
    description:
      "Toda ideia vira um plano quando você lista as funcionalidades mínimas. Pergunte à IA: 'Quais são as funcionalidades essenciais para um app que faz X?'.",
    tips: [
      "Comece com o mínimo que funciona — depois você incrementa",
      "Uma landing page precisa só de: header, seção principal, rodapé",
      "Um app de tarefas precisa: listar, adicionar e remover tarefas",
    ],
  },
  {
    title: "2. Quebre em tarefas pequenas",
    description:
      "Uma tarefa pequena é algo que você termina em uma sentada (30 min a 2 horas). Cada pedaço vira um prompt específico e fica mais fácil de testar.",
    tips: [
      "\"Criar tela de login\" se divide em: formulário → validação → chamada API → feedback de erro",
      "Tarefa pequena = prompt direto para a IA",
    ],
  },
  {
    title: "3. Use a IA em cada etapa",
    description:
      "A IA ajuda em todas as fases: planejamento, implementação e revisão. Use como assistente, não como substituta.",
    tips: [
      "Planejar: 'Quais arquivos preciso criar para este projeto?'",
      "Implementar: 'Crie um componente de formulário com validação'",
      "Revisar: 'Este código segue boas práticas? O que melhorar?'",
      "Testar: 'Que testes devo escrever para esta função?'",
    ],
  },
  {
    title: "4. Entregue versões funcionais",
    description:
      "Não tente fazer tudo de uma vez. Primeiro faça algo que funciona — mesmo que simples. Depois melhore. Um projeto entregue é melhor que um projeto perfeito pela metade.",
    tips: [
      "Versão 1: funciona (mesmo que a apresentação não seja ideal)",
      "Versão 2: funciona bem e está organizado",
      "Versão 3: funciona, organizado e com boa aparência",
    ],
  },
]

export const projectIdeas: ProjectIdea[] = [
  {
    name: "Calculadora com histórico",
    description: "Operações básicas e um painel mostrando contas anteriores.",
    difficulty: "Iniciante",
  },
  {
    name: "Landing page pessoal",
    description: "Página com apresentação, projetos e contato. Ótimo para portfólio.",
    difficulty: "Iniciante",
  },
  {
    name: "App de tarefas (To-Do)",
    description: "Adicionar, concluir e remover tarefas. Pode salvar no navegador.",
    difficulty: "Iniciante",
  },
  {
    name: "Dashboard com dados estáticos",
    description: "Cards e gráficos com dados fixos para praticar layout.",
    difficulty: "Intermediário",
  },
  {
    name: "Conversor de moedas",
    description: "Converte valores entre moedas usando uma API pública.",
    difficulty: "Intermediário",
  },
]

export const githubRepoStructure = `meu-projeto/
├── README.md          # Documentação principal
├── .gitignore         # Arquivos ignorados pelo Git
├── LICENSE            # Licença do projeto
├── .env.example       # Exemplo de variáveis (sem secrets!)
├── src/               # Código-fonte
├── docs/              # Documentação extra
└── .github/
    └── workflows/     # Automações CI/CD`
