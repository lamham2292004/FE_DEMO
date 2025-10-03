import Link from "next/link"
import { Search, ShoppingCart, Menu, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="font-sans text-xl font-semibold text-foreground">LearnHub</span>
        </Link>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden flex-1 max-w-md mx-8 md:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input type="search" placeholder="Tìm kiếm khóa học..." className="w-full pl-10" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-4">
          <Link
            href="/courses"
            className="hidden text-sm font-medium text-foreground hover:text-primary transition-colors md:inline-block"
          >
            Khóa học
          </Link>
          <Link
            href="/about"
            className="hidden text-sm font-medium text-foreground hover:text-primary transition-colors md:inline-block"
          >
            Về chúng tôi
          </Link>

          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-medium">
                2
              </span>
            </Button>
          </Link>

          <Button variant="outline" size="sm" className="hidden md:inline-flex bg-transparent">
            Đăng nhập
          </Button>
          <Button size="sm" className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground">
            Đăng ký
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </nav>
      </div>

      {/* Mobile Search */}
      <div className="border-t px-4 py-3 md:hidden">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input type="search" placeholder="Tìm kiếm khóa học..." className="w-full pl-10" />
        </div>
      </div>
    </header>
  )
}
