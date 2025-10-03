import Link from "next/link"
import { BookOpen, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-sans text-xl font-semibold text-foreground">LearnHub</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Nền tảng học trực tuyến hàng đầu với hàng nghìn khóa học chất lượng cao từ các chuyên gia.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Khóa học */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Khóa học</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                  Tất cả khóa học
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=development"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Lập trình
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=design"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Thiết kế
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=business"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Kinh doanh
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=marketing"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Hỗ trợ */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Hỗ trợ</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-primary transition-colors">
                  Trung tâm trợ giúp
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Điều khoản sử dụng
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Chính sách bảo mật
                </Link>
              </li>
            </ul>
          </div>

          {/* Về chúng tôi */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Về chúng tôi</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/instructors" className="text-muted-foreground hover:text-primary transition-colors">
                  Trở thành giảng viên
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-muted-foreground hover:text-primary transition-colors">
                  Đối tác
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 LearnHub. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
