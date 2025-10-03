import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Clock, Users, Globe, Award, PlayCircle, FileText, CheckCircle, ShoppingCart, Heart } from "lucide-react"
import Link from "next/link"

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = {
    id: params.id,
    title: "Lập trình Web Full-Stack với Next.js và TypeScript",
    subtitle: "Xây dựng ứng dụng web hiện đại với Next.js 15, React 19, TypeScript và Tailwind CSS",
    instructor: {
      name: "Nguyễn Văn A",
      title: "Senior Full-Stack Developer",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Với hơn 10 năm kinh nghiệm trong phát triển web, tôi đã làm việc với nhiều công ty công nghệ hàng đầu và đào tạo hàng nghìn học viên thành công.",
      students: 45000,
      courses: 12,
      rating: 4.8,
    },
    price: 1990000,
    originalPrice: 2990000,
    rating: 4.8,
    totalRatings: 3456,
    students: 12543,
    duration: "24 giờ",
    lectures: 156,
    level: "Trung cấp",
    language: "Tiếng Việt",
    lastUpdated: "Tháng 1, 2025",
    image: "/web-development-coding.png",
    videoPreview: "/placeholder.svg?height=400&width=700",
    description: `Khóa học này sẽ đưa bạn từ người mới bắt đầu đến một Full-Stack Developer chuyên nghiệp. Bạn sẽ học cách xây dựng các ứng dụng web hiện đại, có khả năng mở rộng với Next.js, React, TypeScript và nhiều công nghệ tiên tiến khác.

Khóa học bao gồm các dự án thực tế, bài tập thực hành và hỗ trợ từ giảng viên. Bạn sẽ xây dựng một portfolio ấn tượng để bắt đầu sự nghiệp của mình.`,
    whatYouWillLearn: [
      "Xây dựng ứng dụng web full-stack với Next.js 15 và React 19",
      "Sử dụng TypeScript để viết code an toàn và dễ bảo trì",
      "Thiết kế giao diện đẹp mắt với Tailwind CSS",
      "Làm việc với API, database và authentication",
      "Deploy ứng dụng lên production với Vercel",
      "Best practices và design patterns trong web development",
      "Tối ưu hóa performance và SEO",
      "Xây dựng các tính năng real-time với WebSocket",
    ],
    requirements: [
      "Kiến thức cơ bản về HTML, CSS và JavaScript",
      "Máy tính có kết nối internet",
      "Không cần kinh nghiệm với React hay Next.js",
      "Đam mê học hỏi và phát triển bản thân",
    ],
    curriculum: [
      {
        title: "Giới thiệu và Cài đặt",
        lectures: 8,
        duration: "45 phút",
        lessons: [
          { title: "Chào mừng đến với khóa học", duration: "5:30", type: "video", isFree: true },
          { title: "Giới thiệu về Next.js và React", duration: "8:45", type: "video", isFree: true },
          { title: "Cài đặt môi trường phát triển", duration: "12:20", type: "video", isFree: false },
          { title: "Tạo dự án Next.js đầu tiên", duration: "10:15", type: "video", isFree: false },
          { title: "Cấu trúc thư mục và file", duration: "8:30", type: "video", isFree: false },
        ],
      },
      {
        title: "React Fundamentals",
        lectures: 15,
        duration: "2 giờ 30 phút",
        lessons: [
          { title: "Components và Props", duration: "15:20", type: "video", isFree: false },
          { title: "State và Lifecycle", duration: "18:45", type: "video", isFree: false },
          { title: "Hooks: useState và useEffect", duration: "22:10", type: "video", isFree: false },
          { title: "Event Handling", duration: "12:30", type: "video", isFree: false },
          { title: "Conditional Rendering", duration: "10:15", type: "video", isFree: false },
        ],
      },
      {
        title: "TypeScript cho React",
        lectures: 12,
        duration: "2 giờ",
        lessons: [
          { title: "Giới thiệu TypeScript", duration: "14:20", type: "video", isFree: false },
          { title: "Types và Interfaces", duration: "16:45", type: "video", isFree: false },
          { title: "Typing Components và Props", duration: "18:10", type: "video", isFree: false },
          { title: "Generics trong TypeScript", duration: "15:30", type: "video", isFree: false },
        ],
      },
      {
        title: "Next.js App Router",
        lectures: 20,
        duration: "3 giờ 15 phút",
        lessons: [
          { title: "Routing cơ bản", duration: "12:20", type: "video", isFree: false },
          { title: "Dynamic Routes", duration: "15:45", type: "video", isFree: false },
          { title: "Layouts và Templates", duration: "18:10", type: "video", isFree: false },
          { title: "Server Components vs Client Components", duration: "20:30", type: "video", isFree: false },
        ],
      },
      {
        title: "Styling với Tailwind CSS",
        lectures: 18,
        duration: "2 giờ 45 phút",
        lessons: [
          { title: "Cài đặt và cấu hình Tailwind", duration: "10:20", type: "video", isFree: false },
          { title: "Utility Classes", duration: "16:45", type: "video", isFree: false },
          { title: "Responsive Design", duration: "18:10", type: "video", isFree: false },
          { title: "Custom Components", duration: "15:30", type: "video", isFree: false },
        ],
      },
      {
        title: "API và Database",
        lectures: 25,
        duration: "4 giờ",
        lessons: [
          { title: "Route Handlers", duration: "14:20", type: "video", isFree: false },
          { title: "Server Actions", duration: "18:45", type: "video", isFree: false },
          { title: "Kết nối Database", duration: "22:10", type: "video", isFree: false },
          { title: "CRUD Operations", duration: "20:30", type: "video", isFree: false },
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Course Header */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="space-y-2">
                  <Badge className="bg-accent text-accent-foreground hover:bg-accent/90">{course.level}</Badge>
                  <h1 className="text-3xl md:text-4xl font-bold leading-tight text-balance">{course.title}</h1>
                  <p className="text-lg text-primary-foreground/90 leading-relaxed text-pretty">{course.subtitle}</p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-accent text-accent" />
                    <span className="font-semibold">{course.rating}</span>
                    <span className="text-primary-foreground/80">
                      ({course.totalRatings.toLocaleString()} đánh giá)
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-primary-foreground/80">
                    <Users className="h-5 w-5" />
                    <span>{course.students.toLocaleString()} học viên</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary-foreground/80">
                    <Clock className="h-5 w-5" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary-foreground/80">
                    <Globe className="h-5 w-5" />
                    <span>{course.language}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={course.instructor.avatar || "/placeholder.svg"} alt={course.instructor.name} />
                    <AvatarFallback>{course.instructor.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm text-primary-foreground/80">Giảng viên</p>
                    <p className="font-semibold">{course.instructor.name}</p>
                  </div>
                </div>
              </div>

              {/* Right Content - Video Preview (Desktop) */}
              <div className="hidden lg:block">
                <Card className="overflow-hidden">
                  <div className="relative aspect-video bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="lg" className="rounded-full h-16 w-16 bg-accent hover:bg-accent/90">
                        <PlayCircle className="h-8 w-8" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* What You'll Learn */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Bạn sẽ học được gì</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.whatYouWillLearn.map((item, index) => (
                      <div key={index} className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Course Content */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Nội dung khóa học</h2>
                    <p className="text-sm text-muted-foreground">
                      {course.curriculum.length} chương • {course.lectures} bài học • {course.duration} tổng thời lượng
                    </p>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    {course.curriculum.map((section, index) => (
                      <AccordionItem key={index} value={`section-${index}`}>
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center justify-between w-full pr-4">
                            <span className="font-semibold text-left">{section.title}</span>
                            <span className="text-sm text-muted-foreground">
                              {section.lectures} bài • {section.duration}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 pt-2">
                            {section.lessons.map((lesson, lessonIndex) => (
                              <div
                                key={lessonIndex}
                                className="flex items-center justify-between py-2 px-4 hover:bg-muted/50 rounded-lg transition-colors"
                              >
                                <div className="flex items-center gap-3">
                                  <PlayCircle className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-sm">{lesson.title}</span>
                                  {lesson.isFree && (
                                    <Badge variant="outline" className="text-xs">
                                      Xem trước
                                    </Badge>
                                  )}
                                </div>
                                <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Yêu cầu</h2>
                  <ul className="space-y-2">
                    {course.requirements.map((req, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-muted-foreground">•</span>
                        <span className="text-sm text-foreground leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Description */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Mô tả</h2>
                  <div className="prose prose-sm max-w-none">
                    <p className="text-foreground leading-relaxed whitespace-pre-line">{course.description}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Instructor */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Giảng viên</h2>
                  <div className="flex gap-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={course.instructor.avatar || "/placeholder.svg"} alt={course.instructor.name} />
                      <AvatarFallback>{course.instructor.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg text-foreground">{course.instructor.name}</h3>
                      <p className="text-sm text-muted-foreground">{course.instructor.title}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-accent text-accent" />
                          <span>{course.instructor.rating} đánh giá</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{course.instructor.students.toLocaleString()} học viên</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <PlayCircle className="h-4 w-4" />
                          <span>{course.instructor.courses} khóa học</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{course.instructor.bio}</p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Purchase Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <Card className="overflow-hidden">
                  {/* Video Preview */}
                  <div className="relative aspect-video bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="lg" className="rounded-full h-16 w-16 bg-accent hover:bg-accent/90">
                        <PlayCircle className="h-8 w-8" />
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-4">
                    {/* Price */}
                    <div className="space-y-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-foreground">
                          {course.price.toLocaleString("vi-VN")}đ
                        </span>
                        <span className="text-lg text-muted-foreground line-through">
                          {course.originalPrice.toLocaleString("vi-VN")}đ
                        </span>
                      </div>
                      <p className="text-sm text-accent font-medium">
                        Giảm {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
                      </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-2">
                      <Link href="/cart">
                        <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground">
                          <ShoppingCart className="mr-2 h-5 w-5" />
                          Thêm vào giỏ hàng
                        </Button>
                      </Link>
                      <Link href="/checkout">
                        <Button variant="outline" className="w-full h-12 bg-transparent">
                          Mua ngay
                        </Button>
                      </Link>
                      <Button variant="ghost" className="w-full">
                        <Heart className="mr-2 h-5 w-5" />
                        Yêu thích
                      </Button>
                    </div>

                    {/* Course Info */}
                    <div className="pt-4 border-t space-y-3">
                      <h3 className="font-semibold text-foreground">Khóa học bao gồm:</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-3">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{course.duration} video theo yêu cầu</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span>Tài liệu học tập</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Award className="h-4 w-4 text-muted-foreground" />
                          <span>Chứng chỉ hoàn thành</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Globe className="h-4 w-4 text-muted-foreground" />
                          <span>Truy cập trọn đời</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
