"use client";
import { Menu } from "@headlessui/react";
import Link from "next/link";

import { useUser } from "@auth0/nextjs-auth0/client";
import { Package2, Search, CircleUser, Home } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from  "../ui/dropdown-menu";
import { Sheet, SheetTrigger, SheetContent } from  "../ui/sheet";

export default function Header2() {
  const { user } = useUser();

  return (
    <div id="header" data-testid="header" className="bg-[#9ab6d1] fixed top-0 z-30 w-full duration-500 transition-all">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Home className="h-6 w-6" />
            <span className="sr-only">Rick and Morty</span>
          </Link>
          <Link
            href="/evaluation"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Información de Rick and Morty
          </Link>
         
          <Link
            href="/resources"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Mis me gusta
          </Link>
        </nav>
        <div className="flex items-center justify-end w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          {/* <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full bg-white hover:text-[#23A28B]"
              >
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                {user ? (
                  <Link href="/account">Mi cuenta</Link>
                ) : ( 
                  <a href="/api/auth/login">Login</a>
                )}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Configuración</DropdownMenuItem>
              <DropdownMenuItem>Soporte</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <a href="/api/auth/logout">Logout</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  );
}
