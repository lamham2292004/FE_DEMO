"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CourseCard } from "@/components/course-card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SlidersHorizontal, X } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function CoursesPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLevel, setSelectedLevel] = useState<string>("all")
  const [priceFilter, setPriceFilter] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("popular")

  const courses = [
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
      category: "development",
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
      category: "design",
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
      category: "marketing",
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
      category: "development",
    },
    {
      id: "5",
      title: "React Native - Xây dựng ứng dụng di động đa nền tảng",
      instructor: "Hoàng Minh E",
      price: 2190000,
      originalPrice: 3190000,
      rating: 4.8,
      students: 7654,
      duration: "28 giờ",
      level: "Trung cấp" as const,
      image: "/react-native-app-dev.png",
      category: "development",
    },
    {
      id: "6",
      title: "Graphic Design với Adobe Photoshop và Illustrator",
      instructor: "Vũ Thị F",
      price: 0,
      rating: 4.6,
      students: 11234,
      duration: "22 giờ",
      level: "Cơ bản" as const,
      image: "/graphic-design-adobe-photoshop-illustrator.jpg",
      isFree: true,
      category: "design",
    },
    {
      id: "7",
      title: "Quản trị doanh nghiệp và Khởi nghiệp thành công",
      instructor: "Đặng Văn G",
      price: 1790000,
      originalPrice: 2790000,
      rating: 4.7,
      students: 6543,
      duration: "16 giờ",
      level: "Trung cấp" as const,
      image: "/business-management-entrepreneurship.jpg",
      category: "business",
    },
    {
      id: "8",
      title: "Facebook Ads và Google Ads từ A đến Z",
      instructor: "Bùi Thị H",
      price: 1690000,
      originalPrice: 2690000,
      rating: 4.8,
      students: 13456,
      duration: "24 giờ",
      level: "Cơ bản" as const,
      image: "/facebook-ads-google-ads-digital-advertising.jpg",
      category: "marketing",
    },
  ]

  const categories = [
    { id: "development", label: "Lập trình", count: 1234 },
    { id: "design", label: "Thiết kế", count: 856 },
    { id: "business", label: "Kinh doanh", count: 642 },
    { id: "marketing", label: "Marketing", count: 523 },
    { id: "photography", label: "Nhiếp ảnh", count: 412 },
    { id: "music", label: "Âm nhạc", count: 389 },
  ]

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId])
    } else {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId))
    }
  }

  const filteredCourses = courses.filter((course) => {
    // Category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes(course.category)) {
      return false
    }

    // Level filter
    if (selectedLevel !== "all" && course.level !== selectedLevel) {
      return false
    }

    // Price filter
    if (priceFilter === "free" && !course.isFree) {
      return false
    }
    if (priceFilter === "paid" && course.isFree) {
      return false
    }

    return true
  })

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div className="space-y-4">
        <h3 className="font-semibold text-foreground">Danh mục</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
              />
              <Label htmlFor={category.id} className="text-sm font-normal cursor-pointer flex-1">
                {category.label}
                <span className="text-muted-foreground ml-1">({category.count})</span>
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="space-y-4 pt-6 border-t">
        <h3 className="font-semibold text-foreground">Giá</h3>
        <RadioGroup value={priceFilter} onValueChange={setPriceFilter}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all" />
            <Label htmlFor="all" className="text-sm font-normal cursor-pointer">
              Tất cả
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="free" id="free" />
            <Label htmlFor="free" className="text-sm font-normal cursor-pointer">
              Miễn phí
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="paid" id="paid" />
            <Label htmlFor="paid" className="text-sm font-normal cursor-pointer">
              Trả phí
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Level */}
      <div className="space-y-4 pt-6 border-t">
        <h3 className="font-semibold text-foreground">Cấp độ</h3>
        <RadioGroup value={selectedLevel} onValueChange={setSelectedLevel}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="level-all" />
            <Label htmlFor="level-all" className="text-sm font-normal cursor-pointer">
              Tất cả
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Cơ bản" id="beginner" />
            <Label htmlFor="beginner" className="text-sm font-normal cursor-pointer">
              Cơ bản
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Trung cấp" id="intermediate" />
            <Label htmlFor="intermediate" className="text-sm font-normal cursor-pointer">
              Trung cấp
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Nâng cao" id="advanced" />
            <Label htmlFor="advanced" className="text-sm font-normal cursor-pointer">
              Nâng cao
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Clear Filters */}
      {(selectedCategories.length > 0 || selectedLevel !== "all" || priceFilter !== "all") && (
        <Button
          variant="outline"
          className="w-full bg-transparent"
          onClick={() => {
            setSelectedCategories([])
            setSelectedLevel("all")
            setPriceFilter("all")
          }}
        >
          <X className="mr-2 h-4 w-4" />
          Xóa bộ lọc
        </Button>
      )}
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-muted/30 py-12 border-b">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Khám phá khóa học</h1>
            <p className="text-muted-foreground">Tìm kiếm và học tập từ hàng nghìn khóa học chất lượng cao</p>
          </div>
        </section>

        {/* Courses Grid with Filters */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters - Desktop */}
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <div className="sticky top-20 space-y-6">
                  <FilterContent />
                </div>
              </aside>

              {/* Main Content */}
              <div className="flex-1">
                {/* Toolbar */}
                <div className="flex items-center justify-between mb-6 gap-4">
                  <div className="flex items-center gap-2">
                    {/* Mobile Filter Button */}
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" size="sm" className="lg:hidden bg-transparent">
                          <SlidersHorizontal className="mr-2 h-4 w-4" />
                          Bộ lọc
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="left" className="w-80 overflow-y-auto">
                        <SheetHeader>
                          <SheetTitle>Bộ lọc</SheetTitle>
                        </SheetHeader>
                        <div className="mt-6">
                          <FilterContent />
                        </div>
                      </SheetContent>
                    </Sheet>

                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">{filteredCourses.length}</span> khóa học
                    </p>
                  </div>

                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sắp xếp theo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Phổ biến nhất</SelectItem>
                      <SelectItem value="newest">Mới nhất</SelectItem>
                      <SelectItem value="rating">Đánh giá cao</SelectItem>
                      <SelectItem value="price-low">Giá thấp đến cao</SelectItem>
                      <SelectItem value="price-high">Giá cao đến thấp</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Courses Grid */}
                {filteredCourses.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredCourses.map((course) => (
                      <CourseCard key={course.id} {...course} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <p className="text-muted-foreground text-lg mb-4">Không tìm thấy khóa học phù hợp</p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSelectedCategories([])
                        setSelectedLevel("all")
                        setPriceFilter("all")
                      }}
                    >
                      Xóa bộ lọc
                    </Button>
                  </div>
                )}

                {/* Pagination */}
                {filteredCourses.length > 0 && (
                  <div className="mt-12 flex justify-center">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" disabled>
                        Trước
                      </Button>
                      <Button variant="default" size="sm">
                        1
                      </Button>
                      <Button variant="outline" size="sm">
                        2
                      </Button>
                      <Button variant="outline" size="sm">
                        3
                      </Button>
                      <Button variant="outline" size="sm">
                        Sau
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
