'use client';

import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { setCredentials } from "@/redux/features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { setTheme } = useTheme();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      //@ts-ignore
      const user = JSON.parse(localStorage.getItem('user'));
      const accessToken = localStorage.getItem('accessToken') as string;
      const refreshToken = localStorage.getItem('refreshToken') as string;
      dispatch(setCredentials({
        user,
        accessToken,
        refreshToken,
        isAuthenticated: true,
      }))
    }
  }, [])


  return (
    <div className="w-full bg-background z-10 shadow-sm">
      <div className="py-2 border-b-[1px] border-mute">
        <Container>
          <div
            className="
              flex
              items-center
              justify-between
              gap-3
              md:gap-0
            "
          >
            <Logo />
            <div className="flex justify-between items-center gap-5">
              <UserMenu />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Header;
