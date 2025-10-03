import Image from "next/image"
import Link from "next/link"
import { Star, Clock, Users } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CourseCardProps {
  id: string
  title: string
  instructor: string
  price: number
  originalPrice?: number
  rating: number
  students: number
  duration: string
  level: "Cơ bản" | "Trung cấp" | "Nâng cao"
  image: string
  isFree?: boolean
}

export function CourseCard({
  id,
  title,
  instructor,
  price,
  originalPrice,
  rating,
  students,
  duration,
  level,
  image,
  isFree = false,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`}>
      <Card className="group overflow-hidden transition-all hover:shadow-lg">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          {isFree && <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">Miễn phí</Badge>}
          <Badge variant="secondary" className="absolute top-3 right-3 bg-background/90 text-foreground">
            {level}
          </Badge>
        </div>

        <CardContent className="p-4 space-y-3">
          <h3 className="font-semibold text-foreground line-clamp-2 leading-snug text-balance">{title}</h3>

          <p className="text-sm text-muted-foreground">{instructor}</p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="font-medium text-foreground">{rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{students.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <div className="flex items-center gap-2">
            {isFree ? (
              <span className="text-lg font-bold text-accent">Miễn phí</span>
            ) : (
              <>
                <span className="text-lg font-bold text-foreground">{price.toLocaleString("vi-VN")}đ</span>
                {originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    {originalPrice.toLocaleString("vi-VN")}đ
                  </span>
                )}
              </>
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
