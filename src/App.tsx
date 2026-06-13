import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Toaster } from "sonner"

import { AppLayout } from "@/components/layout/AppLayout"
import { AiClis } from "@/pages/AiClis"
import { AiIdes } from "@/pages/AiIdes"
import { Debug } from "@/pages/Debug"
import { GitCommands } from "@/pages/GitCommands"
import { GithubGuide } from "@/pages/GithubGuide"
import { Home } from "@/pages/Home"
import { OpenModels } from "@/pages/OpenModels"
import { Projetos } from "@/pages/Projetos"
import { Prompting } from "@/pages/Prompting"
import { Testes } from "@/pages/Testes"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ides" element={<AiIdes />} />
          <Route path="/modelos" element={<OpenModels />} />
          <Route path="/clis" element={<AiClis />} />
          <Route path="/git" element={<GitCommands />} />
          <Route path="/github" element={<GithubGuide />} />
          <Route path="/prompting" element={<Prompting />} />
          <Route path="/debug" element={<Debug />} />
          <Route path="/testes" element={<Testes />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <Toaster position="bottom-right" richColors />
    </BrowserRouter>
  )
}
