import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Toaster } from "sonner"

import { AppLayout } from "@/components/layout/AppLayout"
import { AiClis } from "@/pages/AiClis"
import { AiIdes } from "@/pages/AiIdes"
import { GitCommands } from "@/pages/GitCommands"
import { GithubGuide } from "@/pages/GithubGuide"
import { Home } from "@/pages/Home"
import { OpenModels } from "@/pages/OpenModels"

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
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <Toaster position="bottom-right" richColors />
    </BrowserRouter>
  )
}
