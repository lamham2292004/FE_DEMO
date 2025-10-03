"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard, Building2, Smartphone, ShieldCheck, Lock } from "lucide-react"

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("card")

  const orderItems = [
    {
      id: "1",
      title: "Lập trình Web Full-Stack với Next.js và TypeScript",
      price: 1990000,
    },
    {
      id: "3",
      title: "Digital Marketing và SEO cho người mới bắt đầu",
      price: 1490000,
    },
  ]

  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-5 w-5 text-accent" />
              <span>Thanh toán an toàn và bảo mật</span>
            </div>

            <h1 className="text-3xl font-bold text-foreground">Thanh toán</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Billing Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Thông tin thanh toán</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Họ *</Label>
                        <Input id="firstName" placeholder="Nguyễn" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Tên *</Label>
                        <Input id="lastName" placeholder="Văn A" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="example@email.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Số điện thoại *</Label>
                      <Input id="phone" type="tel" placeholder="0123456789" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Địa chỉ</Label>
                      <Input id="address" placeholder="123 Đường ABC, Quận 1" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">Thành phố</Label>
                        <Input id="city" placeholder="Hồ Chí Minh" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">Mã bưu điện</Label>
                        <Input id="zipCode" placeholder="700000" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card>
                  <CardHeader>
                    <CardTitle>Phương thức thanh toán</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                          <CreditCard className="h-5 w-5" />
                          <span>Thẻ tín dụng / Thẻ ghi nợ</span>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                        <RadioGroupItem value="bank" id="bank" />
                        <Label htmlFor="bank" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Building2 className="h-5 w-5" />
                          <span>Chuyển khoản ngân hàng</span>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                        <RadioGroupItem value="momo" id="momo" />
                        <Label htmlFor="momo" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Smartphone className="h-5 w-5" />
                          <span>Ví điện tử (MoMo, ZaloPay)</span>
                        </Label>
                      </div>
                    </RadioGroup>

                    {paymentMethod === "card" && (
                      <div className="space-y-4 pt-4 border-t">
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Số thẻ *</Label>
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Ngày hết hạn *</Label>
                            <Input id="expiry" placeholder="MM/YY" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV *</Label>
                            <Input id="cvv" placeholder="123" type="password" maxLength={3} required />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cardName">Tên trên thẻ *</Label>
                          <Input id="cardName" placeholder="NGUYEN VAN A" required />
                        </div>
                      </div>
                    )}

                    {paymentMethod === "bank" && (
                      <div className="p-4 bg-muted/50 rounded-lg space-y-2 border-t">
                        <p className="text-sm font-medium text-foreground">Thông tin chuyển khoản:</p>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>Ngân hàng: Vietcombank</p>
                          <p>Số tài khoản: 1234567890</p>
                          <p>Chủ tài khoản: CONG TY LEARNHUB</p>
                          <p>Nội dung: [Mã đơn hàng]</p>
                        </div>
                      </div>
                    )}

                    {paymentMethod === "momo" && (
                      <div className="p-4 bg-muted/50 rounded-lg space-y-2 border-t">
                        <p className="text-sm text-foreground">
                          Bạn sẽ được chuyển đến trang thanh toán của ví điện tử sau khi xác nhận đơn hàng.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Terms */}
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                    Tôi đồng ý với{" "}
                    <a href="/terms" className="text-primary hover:underline">
                      Điều khoản sử dụng
                    </a>{" "}
                    và{" "}
                    <a href="/privacy" className="text-primary hover:underline">
                      Chính sách bảo mật
                    </a>{" "}
                    của LearnHub
                  </Label>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-20">
                  <CardHeader>
                    <CardTitle>Đơn hàng của bạn</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {orderItems.map((item) => (
                        <div key={item.id} className="space-y-1">
                          <p className="text-sm font-medium text-foreground line-clamp-2">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.price.toLocaleString("vi-VN")}đ</p>
                        </div>
                      ))}
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tạm tính:</span>
                        <span className="text-foreground">{subtotal.toLocaleString("vi-VN")}đ</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Thuế VAT (0%):</span>
                        <span className="text-foreground">0đ</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="font-semibold text-foreground">Tổng cộng:</span>
                        <span className="text-2xl font-bold text-foreground">{subtotal.toLocaleString("vi-VN")}đ</span>
                      </div>
                    </div>

                    <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Lock className="mr-2 h-5 w-5" />
                      Xác nhận thanh toán
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                      <ShieldCheck className="h-4 w-4" />
                      <span>Thanh toán được mã hóa và bảo mật</span>
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
