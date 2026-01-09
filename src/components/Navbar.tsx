import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur-xl supports-backdrop-filter:bg-background/60 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="h-9 w-9 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                SyncBoard
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-sm font-medium text-foreground/90 transition-all duration-200 hover:text-primary hover:scale-105"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-foreground/90 transition-all duration-200 hover:text-primary hover:scale-105"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-foreground/90 transition-all duration-200 hover:text-primary hover:scale-105"
            >
              Testimonials
            </a>
            <a
              href="#"
              className="text-sm font-medium text-foreground/90 transition-all duration-200 hover:text-primary hover:scale-105"
            >
              Documentation
            </a>
            <a
              href="#"
              className="text-sm font-medium text-foreground/90 transition-all duration-200 hover:text-primary hover:scale-105"
            >
              Blog
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="hover-lift">
              Sign In
            </Button>
            <Button size="sm" className="gradient-primary hover-lift shadow-md">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-accent/20"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden glass-effect border-t border-border/20 mt-1",
            isMenuOpen
              ? "block animate-in slide-in-from-top-2"
              : "hidden animate-out slide-out-to-top-2"
          )}
        >
          <div className="space-y-2 pb-4 pt-4">
            <a
              href="#features"
              className="block px-4 py-3 text-sm font-medium text-foreground/90 transition-colors hover:text-primary hover:bg-accent/20 rounded-lg"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block px-4 py-3 text-sm font-medium text-foreground/90 transition-colors hover:text-primary hover:bg-accent/20 rounded-lg"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="block px-4 py-3 text-sm font-medium text-foreground/90 transition-colors hover:text-primary hover:bg-accent/20 rounded-lg"
            >
              Testimonials
            </a>
            <a
              href="#"
              className="block px-4 py-3 text-sm font-medium text-foreground/90 transition-colors hover:text-primary hover:bg-accent/20 rounded-lg"
            >
              Documentation
            </a>
            <a
              href="#"
              className="block px-4 py-3 text-sm font-medium text-foreground/90 transition-colors hover:text-primary hover:bg-accent/20 rounded-lg"
            >
              Blog
            </a>
            <div className="flex flex-col space-y-2 px-4 py-3">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-center"
              >
                Sign In
              </Button>
              <Button
                size="sm"
                className="w-full gradient-primary justify-center shadow-md"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
