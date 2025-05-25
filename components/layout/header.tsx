"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const isActive = (path: string) => {
    if (path === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(path);
  };

  const navItems = [
    { href: "/dashboard", label: "Tableau de bord" },
    // { href: "/dashboard-v2", label: "Tableau de bord 2" },
    { href: "/dashboard/missions", label: "Missions" },
    { href: "/dashboard/gestions", label: "Gestions" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isSticky ? "px-0 shadow-md" : "p-5 px-10"
      }`}
    >
      <div
        className={`transition-all bg-white duration-300 p-4 ${
          isSticky ? "rounded-none" : "rounded-3xl"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Image
              src="https://media.licdn.com/dms/image/v2/C4E0BAQGJJJx2GrKkmQ/company-logo_200_200/company-logo_200_200/0/1647521160562/orange_bank_logo?e=1753315200&v=beta&t=ZFWVzwPQT8S0FCcZcf05sHWDXVb-_5iTKguG070wpe0"
              alt="logo cash deal"
              width={60}
              height={1}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:justify-center space-x-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={`px-4 xl:px-6 py-2 rounded-full font-medium transition-all text-sm xl:text-base ${
                    isActive(item.href)
                      ? "bg-orange-600 text-white hover:bg-orange-700"
                      : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                  }`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <User className="h-5 w-5 text-gray-600" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className={`w-full justify-start px-4 py-2 rounded-full font-medium transition-all ${
                      isActive(item.href)
                        ? "bg-orange-600 text-white hover:bg-orange-700"
                        : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                    }`}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
