import { NavLink } from "react-router-dom"

import { navItems } from "@/data/cheatsheets"
import { cn } from "@/lib/utils"

export function AppSidebar() {
  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r bg-card">
      <div className="flex flex-col gap-1 border-b p-4">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span className="text-sm font-bold">AI</span>
          </div>
          <div>
            <p className="text-sm font-semibold">AI Guide</p>
            <p className="text-xs text-muted-foreground">Material para estudantes</p>
          </div>
        </div>
      </div>
      <nav className="flex flex-1 flex-col gap-1 p-3">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )
            }
          >
            <item.icon className="size-4 shrink-0" />
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
