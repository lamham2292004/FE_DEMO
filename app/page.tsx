"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CourseCard } from "@/components/course-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Code,
  Palette,
  TrendingUp,
  Megaphone,
  Camera,
  Music,
  ArrowRight,
  Star,
  Users,
  Award,
  BookOpen,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { type FormEvent, useState } from "react"

export default function HomePage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/courses?search=${encodeURIComponent(searchQuery.trim())}`)
    } else {
      router.push("/courses")
    }
  }

  const featuredCourses = [
    {
      id: "1",
      title: "Lập trình Web Full-Stack với Next.js và TypeScript",
      instructor: "Nguyễn Văn A",
      price: 1990000,
      originalPrice: 2990000,
      rating: 4.8,
      students: 12543,
      duration: "24 giờ",
      level: "Trung cấp" as const,
      image: "/web-development-coding.png",
      isFree: false,
    },
    {
      id: "2",
      title: "Thiết kế UI/UX từ cơ bản đến nâng cao với Figma",
      instructor: "Trần Thị B",
      price: 0,
      rating: 4.9,
      students: 8932,
      duration: "18 giờ",
      level: "Cơ bản" as const,
      image: "/ui-ux-design-figma.jpg",
      isFree: true,
    },
    {
      id: "3",
      title: "Digital Marketing và SEO cho người mới bắt đầu",
      instructor: "Lê Văn C",
      price: 1490000,
      originalPrice: 2490000,
      rating: 4.7,
      students: 15678,
      duration: "20 giờ",
      level: "Cơ bản" as const,
      image: "/digital-marketing-seo.jpg",
      isFree: false,
    },
    {
      id: "4",
      title: "Python cho Data Science và Machine Learning",
      instructor: "Phạm Thị D",
      price: 2490000,
      originalPrice: 3490000,
      rating: 4.9,
      students: 9876,
      duration: "32 giờ",
      level: "Nâng cao" as const,
      image: "/python-data-science-machine-learning.jpg",
      isFree: false,
    },
  ]

  const categories = [
    { name: "Lập trình", icon: Code, count: 1234, slug: "lap-trinh" },
    { name: "Thiết kế", icon: Palette, count: 856, slug: "thiet-ke" },
    { name: "Kinh doanh", icon: TrendingUp, count: 642, slug: "kinh-doanh" },
    { name: "Marketing", icon: Megaphone, count: 523, slug: "marketing" },
    { name: "Nhiếp ảnh", icon: Camera, count: 412, slug: "nhiep-anh" },
    { name: "Âm nhạc", icon: Music, count: 389, slug: "am-nhac" },
  ]

  const stats = [
    { icon: Users, value: "50,000+", label: "Học viên" },
    { icon: BookOpen, value: "2,500+", label: "Khóa học" },
    { icon: Award, value: "150+", label: "Giảng viên" },
    { icon: Star, value: "4.8/5", label: "Đánh giá" },
  ]

  const testimonials = [
    {
      name: "Hoàng Minh Tuấn",
      role: "Lập trình viên",
      content:
        "LearnHub đã giúp tôi chuyển đổi sự nghiệp từ kế toán sang lập trình. Các khóa học rất chất lượng và giảng viên nhiệt tình.",
      rating: 5,
    },
    {
      name: "Nguyễn Thu Hà",
      role: "Designer",
      content: "Tôi đã học được rất nhiều kỹ năng thiết kế UI/UX từ các khóa học ở đây. Nội dung cập nhật và thực tế.",
      rating: 5,
    },
    {
      name: "Trần Quốc Việt",
      role: "Marketing Manager",
      content:
        "Nền tảng tuyệt vời với nhiều khóa học chất lượng. Tôi đã áp dụng được nhiều kiến thức vào công việc thực tế.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge className="bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
                Nền tảng học trực tuyến hàng đầu Việt Nam
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Học tập không giới hạn với hàng nghìn khóa học chất lượng
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                Khám phá và phát triển kỹ năng của bạn với các khóa học từ các chuyên gia hàng đầu. Bắt đầu hành trình
                học tập của bạn ngay hôm nay.
              </p>

              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Bạn muốn học gì hôm nay?"
                    className="pl-12 h-12 text-base"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button type="submit" size="lg" className="h-12 bg-accent hover:bg-accent/90 text-accent-foreground">
                  Khám phá ngay
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-y bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Khóa học nổi bật</h2>
                <p className="text-muted-foreground">Các khóa học được yêu thích nhất từ cộng đồng học viên</p>
              </div>
              <Link href="/courses" className="hidden md:inline-flex">
                <Button variant="outline" className="bg-transparent">
                  Xem tất cả
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link href="/courses" className="block">
                <Button variant="outline" className="w-full bg-transparent">
                  Xem tất cả khóa học
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Khám phá theo danh mục</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tìm kiếm khóa học phù hợp với mục tiêu và sở thích của bạn
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <Link key={index} href={`/courses?category=${category.slug}`}>
                  <Card className="group cursor-pointer transition-all hover:shadow-lg hover:border-primary h-full">
                    <CardContent className="p-6 text-center space-y-3">
                      <div className="flex justify-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <category.icon className="h-7 w-7" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">{category.count} khóa học</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Học viên nói gì về chúng tôi</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hàng nghìn học viên đã thay đổi cuộc sống của họ với LearnHub
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">"{testimonial.content}"</p>
                    <div className="pt-4 border-t">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Sẵn sàng bắt đầu hành trình học tập?</h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed text-pretty">
                Tham gia cùng hàng nghìn học viên đang phát triển kỹ năng và thay đổi sự nghiệp của họ
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground h-12">
                  Đăng ký miễn phí
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link href="/courses">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    Khám phá khóa học
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
