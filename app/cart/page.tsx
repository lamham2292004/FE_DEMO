"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      title: "Lập trình Web Full-Stack với Next.js và TypeScript",
      instructor: "Nguyễn Văn A",
      price: 1990000,
      originalPrice: 2990000,
      image: "/web-development-coding.png",
    },
    {
      id: "3",
      title: "Digital Marketing và SEO cho người mới bắt đầu",
      instructor: "Lê Văn C",
      price: 1490000,
      originalPrice: 2490000,
      image: "/digital-marketing-seo.jpg",
    },
  ])

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
  const originalTotal = cartItems.reduce((sum, item) => sum + item.originalPrice, 0)
  const discount = originalTotal - subtotal

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {cartItems.length === 0 ? (
            // Empty Cart
            <div className="max-w-md mx-auto text-center py-16 space-y-6">
              <div className="flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted">
                  <ShoppingBag className="h-12 w-12 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-foreground">Giỏ hàng trống</h2>
                <p className="text-muted-foreground">
                  Bạn chưa có khóa học nào trong giỏ hàng. Hãy khám phá các khóa học tuyệt vời của chúng tôi!
                </p>
              </div>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/courses">
                  Khám phá khóa học
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ) : (
            // Cart with Items
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Giỏ hàng</h1>
                <p className="text-muted-foreground">{cartItems.length} khóa học trong giỏ hàng</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                  {cartItems.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div className="relative w-32 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-foreground line-clamp-2 mb-1">{item.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{item.instructor}</p>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-foreground">{item.price.toLocaleString("vi-VN")}đ</span>
                              <span className="text-sm text-muted-foreground line-through">
                                {item.originalPrice.toLocaleString("vi-VN")}đ
                              </span>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="flex-shrink-0"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-5 w-5 text-destructive" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <Card className="sticky top-20">
                    <CardContent className="p-6 space-y-4">
                      <h2 className="text-xl font-bold text-foreground">Tổng đơn hàng</h2>

                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Tạm tính:</span>
                          <span className="text-foreground">{originalTotal.toLocaleString("vi-VN")}đ</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Giảm giá:</span>
                          <span className="text-accent font-medium">-{discount.toLocaleString("vi-VN")}đ</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                          <span className="font-semibold text-foreground">Tổng cộng:</span>
                          <span className="text-2xl font-bold text-foreground">
                            {subtotal.toLocaleString("vi-VN")}đ
                          </span>
                        </div>
                      </div>

                      <Button asChild className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Link href="/checkout">
                          Thanh toán
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        Bằng việc thanh toán, bạn đồng ý với{" "}
                        <Link href="/terms" className="text-primary hover:underline">
                          Điều khoản sử dụng
                        </Link>{" "}
                        của chúng tôi
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
