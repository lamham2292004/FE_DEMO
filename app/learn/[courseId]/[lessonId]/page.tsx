"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  CheckCircle,
  FileText,
  MessageSquare,
  Download,
  ThumbsUp,
  Menu,
  X,
  Send,
  AlertCircle,
} from "lucide-react"

export default function LessonPage({
  params,
}: {
  params: { courseId: string; lessonId: string }
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [completedLessons, setCompletedLessons] = useState<string[]>(["1-1", "1-2"])

  const [newQuestion, setNewQuestion] = useState("")
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyText, setReplyText] = useState("")
  const [likedQuestions, setLikedQuestions] = useState<string[]>([])
  const [questionsData, setQuestionsData] = useState([
    {
      id: "1",
      author: "Nguyễn Văn A",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "2 giờ trước",
      question:
        "Em không hiểu phần Server Components và Client Components khác nhau như thế nào. Thầy có thể giải thích thêm không ạ?",
      likes: 12,
      replies: [
        {
          id: "1-1",
          author: "Giảng viên",
          avatar: "/placeholder.svg?height=40&width=40",
          time: "1 giờ trước",
          text: "Server Components chạy trên server và không gửi JavaScript xuống client, giúp giảm bundle size. Client Components cần 'use client' và có thể sử dụng hooks, event handlers.",
          isInstructor: true,
        },
        {
          id: "1-2",
          author: "Trần Văn B",
          avatar: "/placeholder.svg?height=40&width=40",
          time: "30 phút trước",
          text: "Cảm ơn thầy! Em hiểu rồi ạ.",
        },
      ],
    },
    {
      id: "2",
      author: "Trần Thị B",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "5 giờ trước",
      question: "Code của em bị lỗi khi chạy npm run dev. Có ai gặp vấn đề tương tự không?",
      likes: 8,
      replies: [
        {
          id: "2-1",
          author: "Lê Văn C",
          avatar: "/placeholder.svg?height=40&width=40",
          time: "4 giờ trước",
          text: "Bạn thử xóa folder node_modules và chạy lại npm install xem sao.",
        },
      ],
    },
    {
      id: "3",
      author: "Lê Văn C",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "1 ngày trước",
      question: "Thầy ơi, em muốn hỏi về cách tối ưu hóa performance trong Next.js ạ.",
      likes: 15,
      replies: [],
    },
  ])

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({})
  const [showResults, setShowResults] = useState(false)
  const [quizSubmitted, setQuizSubmitted] = useState(false)

  const quizQuestions = [
    {
      id: 1,
      question: "Next.js được xây dựng dựa trên framework/library nào?",
      options: ["Vue.js", "React", "Angular", "Svelte"],
      correctAnswer: 1,
      explanation:
        "Next.js là một React framework được phát triển bởi Vercel, giúp xây dựng ứng dụng React với nhiều tính năng mạnh mẽ như SSR, SSG.",
    },
    {
      id: 2,
      question: "Server-Side Rendering (SSR) trong Next.js có lợi ích gì?",
      options: [
        "Chỉ giúp code chạy nhanh hơn",
        "Cải thiện SEO và tốc độ tải trang ban đầu",
        "Giảm kích thước file JavaScript",
        "Không có lợi ích gì",
      ],
      correctAnswer: 1,
      explanation:
        "SSR giúp render HTML trên server, cải thiện SEO vì search engines có thể đọc nội dung ngay lập tức, đồng thời giảm thời gian tải trang ban đầu.",
    },
    {
      id: 3,
      question: "File nào được sử dụng để định nghĩa layout chung trong Next.js App Router?",
      options: ["_app.tsx", "layout.tsx", "index.tsx", "page.tsx"],
      correctAnswer: 1,
      explanation:
        "Trong App Router của Next.js 13+, file layout.tsx được sử dụng để định nghĩa layout chung cho các trang con.",
    },
    {
      id: 4,
      question: "Để tạo một API endpoint trong Next.js App Router, bạn cần tạo file gì?",
      options: ["api.ts", "route.ts", "endpoint.ts", "handler.ts"],
      correctAnswer: 1,
      explanation:
        "Trong App Router, file route.ts (hoặc route.js) trong thư mục app/api được sử dụng để tạo API endpoints.",
    },
    {
      id: 5,
      question: "Client Components trong Next.js được đánh dấu bằng cách nào?",
      options: [
        "Thêm 'use server' ở đầu file",
        "Thêm 'use client' ở đầu file",
        "Đặt file trong thư mục /client",
        "Không cần đánh dấu",
      ],
      correctAnswer: 1,
      explanation:
        "Client Components cần có directive 'use client' ở đầu file để Next.js biết component này cần chạy trên client và có thể sử dụng hooks, event handlers.",
    },
  ]

  const handleSubmitQuestion = () => {
    if (newQuestion.trim()) {
      const newQ = {
        id: String(questionsData.length + 1),
        author: "Bạn",
        avatar: "/placeholder.svg?height=40&width=40",
        time: "Vừa xong",
        question: newQuestion,
        likes: 0,
        replies: [],
      }
      setQuestionsData([newQ, ...questionsData])
      setNewQuestion("")
    }
  }

  const handleSubmitReply = (questionId: string) => {
    if (replyText.trim()) {
      setQuestionsData(
        questionsData.map((q) =>
          q.id === questionId
            ? {
                ...q,
                replies: [
                  ...q.replies,
                  {
                    id: `${questionId}-${q.replies.length + 1}`,
                    author: "Bạn",
                    avatar: "/placeholder.svg?height=40&width=40",
                    time: "Vừa xong",
                    text: replyText,
                  },
                ],
              }
            : q,
        ),
      )
      setReplyText("")
      setReplyingTo(null)
    }
  }

  const toggleLike = (questionId: string) => {
    if (likedQuestions.includes(questionId)) {
      setLikedQuestions(likedQuestions.filter((id) => id !== questionId))
    } else {
      setLikedQuestions([...likedQuestions, questionId])
    }
  }

  const handleSelectAnswer = (answerIndex: number) => {
    if (!quizSubmitted) {
      setSelectedAnswers({
        ...selectedAnswers,
        [currentQuestionIndex]: answerIndex,
      })
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const handleSubmitQuiz = () => {
    setQuizSubmitted(true)
    setShowResults(true)
  }

  const calculateScore = () => {
    let correct = 0
    quizQuestions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correct++
      }
    })
    return correct
  }

  const currentQuestion = quizQuestions[currentQuestionIndex]
  const isAnswered = selectedAnswers[currentQuestionIndex] !== undefined
  const allAnswered = quizQuestions.every((_, index) => selectedAnswers[index] !== undefined)

  const course = {
    id: params.courseId,
    title: "Lập trình Web Full-Stack với Next.js và TypeScript",
    curriculum: [
      {
        id: "1",
        title: "Giới thiệu và Cài đặt",
        lessons: [
          { id: "1-1", title: "Chào mừng đến với khóa học", duration: "5:30", completed: true },
          { id: "1-2", title: "Giới thiệu về Next.js và React", duration: "8:45", completed: true },
          { id: "1-3", title: "Cài đặt môi trường phát triển", duration: "12:20", completed: false },
          { id: "1-4", title: "Tạo dự án Next.js đầu tiên", duration: "10:15", completed: false },
          { id: "1-5", title: "Cấu trúc thư mục và file", duration: "8:30", completed: false },
        ],
      },
      {
        id: "2",
        title: "React Fundamentals",
        lessons: [
          { id: "2-1", title: "Components và Props", duration: "15:20", completed: false },
          { id: "2-2", title: "State và Lifecycle", duration: "18:45", completed: false },
          { id: "2-3", title: "Hooks: useState và useEffect", duration: "22:10", completed: false },
          { id: "2-4", title: "Event Handling", duration: "12:30", completed: false },
          { id: "2-5", title: "Conditional Rendering", duration: "10:15", completed: false },
        ],
      },
      {
        id: "3",
        title: "TypeScript cho React",
        lessons: [
          { id: "3-1", title: "Giới thiệu TypeScript", duration: "14:20", completed: false },
          { id: "3-2", title: "Types và Interfaces", duration: "16:45", completed: false },
          { id: "3-3", title: "Typing Components và Props", duration: "18:10", completed: false },
          { id: "3-4", title: "Generics trong TypeScript", duration: "15:30", completed: false },
        ],
      },
    ],
  }

  const currentLesson = {
    id: params.lessonId,
    title: "Giới thiệu về Next.js và React",
    description:
      "Trong bài học này, chúng ta sẽ tìm hiểu về Next.js framework và React library. Bạn sẽ hiểu được tại sao Next.js là một lựa chọn tuyệt vời cho việc xây dựng ứng dụng web hiện đại.",
    videoUrl: "/placeholder.svg?height=600&width=1000",
    duration: "8:45",
  }

  const resources = [
    { name: "Slide bài giảng.pdf", size: "2.5 MB", type: "PDF" },
    { name: "Source code.zip", size: "1.2 MB", type: "ZIP" },
    { name: "Tài liệu tham khảo.pdf", size: "3.8 MB", type: "PDF" },
  ]

  const toggleLessonComplete = (lessonId: string) => {
    if (completedLessons.includes(lessonId)) {
      setCompletedLessons(completedLessons.filter((id) => id !== lessonId))
    } else {
      setCompletedLessons([...completedLessons, lessonId])
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <Link href={`/courses/${params.courseId}`} className="flex items-center gap-2 hover:opacity-80">
              <ChevronLeft className="h-5 w-5" />
              <span className="font-semibold text-sm hidden sm:inline">{course.title}</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={completedLessons.includes(currentLesson.id) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleLessonComplete(currentLesson.id)}
              className="bg-transparent"
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              {completedLessons.includes(currentLesson.id) ? "Đã hoàn thành" : "Đánh dấu hoàn thành"}
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - Course Content */}
        <aside
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } fixed lg:sticky lg:translate-x-0 top-14 left-0 z-40 h-[calc(100vh-3.5rem)] w-80 border-r bg-background overflow-y-auto transition-transform duration-200`}
        >
          <div className="p-4 space-y-2">
            <h2 className="font-semibold text-lg mb-4">Nội dung khóa học</h2>
            <Accordion type="single" collapsible defaultValue="1" className="w-full">
              {course.curriculum.map((section) => (
                <AccordionItem key={section.id} value={section.id}>
                  <AccordionTrigger className="hover:no-underline text-sm">
                    <span className="font-semibold text-left">{section.title}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-1 pt-2">
                      {section.lessons.map((lesson) => (
                        <Link
                          key={lesson.id}
                          href={`/learn/${params.courseId}/${lesson.id}`}
                          className={`flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors ${
                            lesson.id === currentLesson.id ? "bg-muted" : ""
                          }`}
                        >
                          <div className="flex-shrink-0">
                            {completedLessons.includes(lesson.id) ? (
                              <CheckCircle className="h-5 w-5 text-accent" />
                            ) : (
                              <PlayCircle className="h-5 w-5 text-muted-foreground" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{lesson.title}</p>
                            <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto h-[calc(100vh-3.5rem)]">
          {/* Video Player */}
          <div className="bg-black aspect-video w-full flex items-center justify-center">
            <Button size="lg" className="rounded-full h-20 w-20 bg-accent hover:bg-accent/90">
              <PlayCircle className="h-10 w-10" />
            </Button>
          </div>

          {/* Lesson Content */}
          <div className="container max-w-5xl mx-auto px-4 py-6 space-y-6">
            {/* Lesson Info */}
            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">{currentLesson.title}</h1>
              <p className="text-muted-foreground leading-relaxed">{currentLesson.description}</p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t">
              <Button variant="outline" className="bg-transparent">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Bài trước
              </Button>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Bài tiếp theo
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                <TabsTrigger
                  value="overview"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Tổng quan
                </TabsTrigger>
                <TabsTrigger
                  value="qa"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Hỏi & Đáp
                </TabsTrigger>
                <TabsTrigger
                  value="resources"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Tài liệu
                </TabsTrigger>
                <TabsTrigger
                  value="quiz"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Kiểm tra
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Về bài học này</h3>
                    <div className="prose prose-sm max-w-none">
                      <p className="text-foreground leading-relaxed">
                        Next.js là một React framework mạnh mẽ được phát triển bởi Vercel. Nó cung cấp nhiều tính năng
                        tuyệt vời như Server-Side Rendering (SSR), Static Site Generation (SSG), và API Routes.
                      </p>
                      <p className="text-foreground leading-relaxed mt-4">
                        Trong bài học này, chúng ta sẽ tìm hiểu về các khái niệm cơ bản của Next.js và React, cũng như
                        cách chúng hoạt động cùng nhau để tạo ra các ứng dụng web hiện đại.
                      </p>
                      <h4 className="font-semibold text-foreground mt-6 mb-3">Nội dung chính:</h4>
                      <ul className="space-y-2">
                        <li className="text-foreground">Giới thiệu về React và component-based architecture</li>
                        <li className="text-foreground">Tại sao nên sử dụng Next.js</li>
                        <li className="text-foreground">Các tính năng chính của Next.js</li>
                        <li className="text-foreground">So sánh Next.js với các framework khác</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="qa" className="mt-6 space-y-6">
                {/* Ask Question */}
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-semibold text-lg">Đặt câu hỏi</h3>
                    <Textarea
                      placeholder="Nhập câu hỏi của bạn..."
                      className="min-h-[100px]"
                      value={newQuestion}
                      onChange={(e) => setNewQuestion(e.target.value)}
                    />
                    <Button
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      onClick={handleSubmitQuestion}
                      disabled={!newQuestion.trim()}
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Gửi câu hỏi
                    </Button>
                  </CardContent>
                </Card>

                {/* Questions List */}
                <div className="space-y-4">
                  {questionsData.map((q) => (
                    <Card key={q.id}>
                      <CardContent className="p-6 space-y-4">
                        <div className="flex gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={q.avatar || "/placeholder.svg"} alt={q.author} />
                            <AvatarFallback>{q.author[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-sm">{q.author}</span>
                              <span className="text-xs text-muted-foreground">{q.time}</span>
                            </div>
                            <p className="text-sm text-foreground leading-relaxed">{q.question}</p>
                            <div className="flex items-center gap-4 pt-2">
                              <Button variant="ghost" size="sm" className="h-8 px-2" onClick={() => toggleLike(q.id)}>
                                <ThumbsUp
                                  className={`mr-1 h-3 w-3 ${
                                    likedQuestions.includes(q.id) ? "fill-current text-accent" : ""
                                  }`}
                                />
                                {q.likes + (likedQuestions.includes(q.id) ? 1 : 0)}
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 px-2"
                                onClick={() => setReplyingTo(replyingTo === q.id ? null : q.id)}
                              >
                                <MessageSquare className="mr-1 h-3 w-3" />
                                {q.replies.length} trả lời
                              </Button>
                            </div>

                            {/* Replies */}
                            {q.replies.length > 0 && (
                              <div className="mt-4 space-y-3 pl-4 border-l-2 border-muted">
                                {q.replies.map((reply) => (
                                  <div key={reply.id} className="flex gap-3">
                                    <Avatar className="h-8 w-8">
                                      <AvatarImage src={reply.avatar || "/placeholder.svg"} alt={reply.author} />
                                      <AvatarFallback>{reply.author[0]}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 space-y-1">
                                      <div className="flex items-center gap-2">
                                        <span className="font-semibold text-sm">{reply.author}</span>
                                        {reply.isInstructor && (
                                          <Badge variant="secondary" className="text-xs">
                                            Giảng viên
                                          </Badge>
                                        )}
                                        <span className="text-xs text-muted-foreground">{reply.time}</span>
                                      </div>
                                      <p className="text-sm text-foreground leading-relaxed">{reply.text}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Reply Form */}
                            {replyingTo === q.id && (
                              <div className="mt-4 space-y-3 pl-4 border-l-2 border-primary">
                                <Textarea
                                  placeholder="Nhập câu trả lời của bạn..."
                                  className="min-h-[80px]"
                                  value={replyText}
                                  onChange={(e) => setReplyText(e.target.value)}
                                />
                                <div className="flex gap-2">
                                  <Button
                                    size="sm"
                                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                                    onClick={() => handleSubmitReply(q.id)}
                                    disabled={!replyText.trim()}
                                  >
                                    <Send className="mr-2 h-3 w-3" />
                                    Gửi trả lời
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => {
                                      setReplyingTo(null)
                                      setReplyText("")
                                    }}
                                  >
                                    Hủy
                                  </Button>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="resources" className="mt-6">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-semibold text-lg">Tài liệu học tập</h3>
                    <div className="space-y-3">
                      {resources.map((resource, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                              <FileText className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium text-sm">{resource.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {resource.type} • {resource.size}
                              </p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="quiz" className="mt-6">
                {!showResults ? (
                  <Card>
                    <CardContent className="p-6 space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-primary">
                            Câu hỏi {currentQuestionIndex + 1}/{quizQuestions.length}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            Đã trả lời: {Object.keys(selectedAnswers).length}/{quizQuestions.length}
                          </span>
                        </div>
                        <Progress value={((currentQuestionIndex + 1) / quizQuestions.length) * 100} className="h-2" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-4">{currentQuestion.question}</h3>
                      </div>

                      <div className="space-y-3">
                        {currentQuestion.options.map((option, index) => {
                          const isSelected = selectedAnswers[currentQuestionIndex] === index
                          const isCorrect = index === currentQuestion.correctAnswer
                          const showCorrectAnswer = quizSubmitted && isCorrect
                          const showWrongAnswer = quizSubmitted && isSelected && !isCorrect

                          return (
                            <Button
                              key={index}
                              variant="outline"
                              className={`w-full justify-start h-auto p-4 text-left transition-colors ${
                                isSelected && !quizSubmitted
                                  ? "bg-primary/10 border-primary"
                                  : "bg-transparent hover:bg-primary/5 hover:border-primary"
                              } ${showCorrectAnswer ? "bg-green-500/10 border-green-500" : ""} ${
                                showWrongAnswer ? "bg-red-500/10 border-red-500" : ""
                              }`}
                              onClick={() => handleSelectAnswer(index)}
                              disabled={quizSubmitted}
                            >
                              <span
                                className={`mr-3 flex h-6 w-6 items-center justify-center rounded-full border font-medium text-sm ${
                                  isSelected && !quizSubmitted
                                    ? "border-primary bg-primary text-primary-foreground"
                                    : ""
                                } ${showCorrectAnswer ? "border-green-500 bg-green-500 text-white" : ""} ${
                                  showWrongAnswer ? "border-red-500 bg-red-500 text-white" : ""
                                }`}
                              >
                                {String.fromCharCode(65 + index)}
                              </span>
                              <span className="flex-1">{option}</span>
                              {showCorrectAnswer && <CheckCircle className="h-5 w-5 text-green-500 ml-2" />}
                              {showWrongAnswer && <X className="h-5 w-5 text-red-500 ml-2" />}
                            </Button>
                          )
                        })}
                      </div>

                      {quizSubmitted && (
                        <Card className="bg-muted/50">
                          <CardContent className="p-4">
                            <div className="flex gap-2">
                              <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <div className="space-y-1">
                                <p className="font-semibold text-sm">Giải thích:</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {currentQuestion.explanation}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )}

                      <div className="flex justify-between pt-4">
                        <Button
                          variant="outline"
                          className="bg-transparent"
                          onClick={handlePreviousQuestion}
                          disabled={currentQuestionIndex === 0}
                        >
                          <ChevronLeft className="mr-2 h-4 w-4" />
                          Câu trước
                        </Button>

                        {!quizSubmitted ? (
                          <div className="flex gap-2">
                            {currentQuestionIndex === quizQuestions.length - 1 && allAnswered ? (
                              <Button
                                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                                onClick={handleSubmitQuiz}
                              >
                                Nộp bài
                              </Button>
                            ) : (
                              <Button
                                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                                onClick={handleNextQuestion}
                                disabled={currentQuestionIndex === quizQuestions.length - 1}
                              >
                                Câu tiếp theo
                                <ChevronRight className="ml-2 h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        ) : (
                          <div className="flex gap-2">
                            {currentQuestionIndex < quizQuestions.length - 1 ? (
                              <Button
                                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                                onClick={handleNextQuestion}
                              >
                                Câu tiếp theo
                                <ChevronRight className="ml-2 h-4 w-4" />
                              </Button>
                            ) : (
                              <Button
                                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                                onClick={() => setShowResults(true)}
                              >
                                Xem kết quả
                              </Button>
                            )}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  // Results Screen
                  <Card>
                    <CardContent className="p-8 space-y-6">
                      <div className="text-center space-y-4">
                        <div className="flex justify-center">
                          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-accent/10">
                            <CheckCircle className="h-12 w-12 text-accent" />
                          </div>
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-foreground mb-2">Hoàn thành bài kiểm tra!</h2>
                          <p className="text-muted-foreground">Bạn đã hoàn thành tất cả các câu hỏi</p>
                        </div>
                      </div>

                      <Card className="bg-muted/50">
                        <CardContent className="p-6">
                          <div className="text-center space-y-2">
                            <p className="text-sm text-muted-foreground">Điểm số của bạn</p>
                            <p className="text-5xl font-bold text-foreground">
                              {calculateScore()}/{quizQuestions.length}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {Math.round((calculateScore() / quizQuestions.length) * 100)}% chính xác
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      <div className="space-y-3">
                        <h3 className="font-semibold text-foreground">Chi tiết kết quả:</h3>
                        {quizQuestions.map((q, index) => {
                          const isCorrect = selectedAnswers[index] === q.correctAnswer
                          return (
                            <div key={q.id} className="flex items-center justify-between p-4 border rounded-lg">
                              <div className="flex items-center gap-3">
                                {isCorrect ? (
                                  <CheckCircle className="h-5 w-5 text-green-500" />
                                ) : (
                                  <X className="h-5 w-5 text-red-500" />
                                )}
                                <span className="text-sm font-medium">Câu {index + 1}</span>
                              </div>
                              <Badge variant={isCorrect ? "default" : "destructive"}>
                                {isCorrect ? "Đúng" : "Sai"}
                              </Badge>
                            </div>
                          )
                        })}
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Button
                          variant="outline"
                          className="flex-1 bg-transparent"
                          onClick={() => {
                            setShowResults(false)
                            setCurrentQuestionIndex(0)
                          }}
                        >
                          Xem lại đáp án
                        </Button>
                        <Button
                          className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                          onClick={() => {
                            setSelectedAnswers({})
                            setQuizSubmitted(false)
                            setShowResults(false)
                            setCurrentQuestionIndex(0)
                          }}
                        >
                          Làm lại
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
