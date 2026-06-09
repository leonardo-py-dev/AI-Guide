import { Menu } from "lucide-react"
import { useState } from "react"
import { Outlet } from "react-router-dom"

import { AppSidebar } from "@/components/layout/AppSidebar"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useIsMobile } from "@/hooks/use-mobile"

export function AppLayout() {
  const isMobile = useIsMobile()
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-screen">
      {!isMobile ? <AppSidebar /> : null}

      <div className="flex min-w-0 flex-1 flex-col">
        {isMobile ? (
          <header className="no-print flex items-center gap-3 border-b px-4 py-3">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Abrir menu">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 p-0">
                <SheetHeader className="sr-only">
                  <SheetTitle>Menu de navegação</SheetTitle>
                </SheetHeader>
                <div onClick={() => setOpen(false)}>
                  <AppSidebar />
                </div>
              </SheetContent>
            </Sheet>
            <span className="font-semibold">AI Guide</span>
          </header>
        ) : null}

        <main className="flex-1 overflow-auto p-6 md:p-8 lg:p-10">
          <div className="mx-auto max-w-4xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
