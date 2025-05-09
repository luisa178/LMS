"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; //hook para obtener la ruta
import { useState } from "react"; //hook para manejar el estado
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";
import { DarkModeToggle } from "./DarkModeToggle";
import { BookOpen, Code2, Laptop, Menu } from "lucide-react";
import { cn } from "@/lib/utils"; //funcion para combinar clases
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SearchInput } from "./SearchInput"; //componente de busqueda
// Elementos de navegacion con etiquetas, rutas y iconos

const navItems = [
  {label: "Cursos", href: "/cursos", icon: BookOpen },
  {label: "Retos", href: "/retos", icon: Code2, baadge: "Muy pronto" },
  {label: "Proyectos", href: "/Proyectos", icon: Laptop },
]
export default function Header() {
  const pathname = usePathname(); //obtenemos la ruta actual
  const [isOpen, setIsOpen] = useState(false); //estado para manejar el menu desplegable
  
  return(
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      {/* contenedor principal */}
      <div className="container flex h-16 items-center justify-between">
      {/*logo y navegacion*/}
      <div className="flex items-center gap-2">
        {/*logo*/}
        <Link href="/" className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground">
          <Code2 className="h-5 w-5"/>
        </div>
        <span className="text-xl font-bold sm:block hidden">Academia ADSO</span>
        <span className="rounded-md bg-muted px-1.5 py-0.5 text-xs font-medium text-muted-foreground ">BETA</span>
        </Link>

        {/*Navegacion*/}
        <nav className="hidden md:flex md:gap-6">
          {navItems.map((item) => (
            <Link 
            key={item.label}
            href={item.href}
            className={cn(
              "flex items-center gap-1.5 text-sm  font-medium transition-colors hover:text-foreground/80",
              pathname === item.href 
              ? "text-foreground" //si la ruta actual es igual a la ruta del item, se le aplica el color de texto foreground
              : "text-foreground/60" //si no, se le aplica el color de texto foreground/60
            )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
              {item.baadge && (
                <span className="ml-1 rounded-full bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground ">
                  {item.baadge}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>
      {/*Control del modo oscuro*/}
      <div className="flex items-center gap-4">
        {/*Barra de busqueda*/}
        <SearchInput/>
        <DarkModeToggle />
        {/*Boton de inicio de sesion*/}
        <SignedIn>
          <UserButton/>
        </SignedIn>

        <SignedOut>
          <SignInButton mode="modal">
            <Button variant="outline" className="hidden md:inline-flex">Iniciar Sesion</Button>
          </SignInButton>
        </SignedOut>

        {/*Navegacion movil*/}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
  <SheetTrigger asChild className="md:hidden">
    <Button variant="ghost" className="md:hidden">
      <Menu className="h-5 w-5" />
      <span className="sr-only">Abrir Menú</span>
    </Button>
  </SheetTrigger>
  <SheetContent side="right" className="w-[300px]">
    <nav className="flex flex-col gap-4 p-4">
      {navItems.map((item) => (
        <Link 
          key={item.label}
          href={item.href}
          className={cn(
            "flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-foreground/80",
            pathname === item.href ? "text-foreground" : "text-foreground/60"
          )}
         
        >
          <item.icon className="h-4 w-4" />
          {item.label}
        </Link>
      ))}
    </nav>
    {/*Boton para iniciar sesion mobile*/}
  
      <SignedOut>
        <SignInButton mode="modal">
          <Button variant="outline" className="w-full">Iniciar Sesion</Button>
        </SignInButton>
      </SignedOut>

  </SheetContent>
</Sheet>


      </div>

      </div>
    </header>
  );
}


