"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import {
  ArrowLeft,
  Calendar,
  Clock,
  MessageSquare,
  ThumbsUp,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Input } from "@/components/ui/input"

export default function BlogPost() {
  const router = useRouter()
  const { id } = useParams()
  const postId = Number.parseInt(id as string)

  const headerRef = useRef(null)
  const contentRef = useRef(null)
  const authorRef = useRef(null)
  const commentsRef = useRef(null)
  const relatedRef = useRef(null)

  const [copied, setCopied] = useState(false)
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(42)
  const [commentText, setCommentText] = useState("")

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(headerRef.current, {
      y: 30,
      opacity: 10,
      duration: 0.6,
      ease: "power3.out",
    })
      .from(
        contentRef.current,
        {
          y: 30,
          opacity: 10,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3",
      )
      .from(
        authorRef.current,
        {
          y: 30,
          opacity: 10,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3",
      )
      .from(
        commentsRef.current,
        {
          y: 30,
          opacity:10,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3",
      )
      .from(
        relatedRef.current,
        {
          y: 30,
          opacity: 10,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3",
      )
  }, [])

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1)
    } else {
      setLikeCount(likeCount + 1)
    }
    setLiked(!liked)
  }

  const copyToClipboard = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  interface CommentFormEvent extends React.FormEvent<HTMLFormElement> {
    preventDefault: () => void;
  }

  const handleSubmitComment = (e: CommentFormEvent): void => {
    e.preventDefault()
    // In a real app, you would submit the comment to your backend
    alert(`Comment submitted: ${commentText}`)
    setCommentText("")
  }

  // Blog post data (in a real app, this would come from an API or database)
  const blogPosts = [
    {
      id: 1,
      title: "The Future of React: What's Coming in React 19",
      excerpt:
        "Exploring the upcoming features in React 19 and how they will change the way we build web applications. Learn about the new rendering engine, improved server components, and more.",
      content: `
        <p>React 19 is set to bring significant improvements to the popular JavaScript library. The React team has been working on a new rendering engine that promises better performance and smaller bundle sizes. Server components are also getting a major upgrade, making it easier to build hybrid applications that leverage both client and server rendering.</p>
        
        <h2>The New Rendering Engine</h2>
        <p>One of the most exciting changes coming in React 19 is the completely rewritten rendering engine. This new engine is designed to be more efficient, resulting in faster rendering times and smaller bundle sizes. The React team has focused on optimizing the reconciliation algorithm, which is responsible for determining what parts of your UI need to be updated when your data changes.</p>
        
        <p>The new engine also includes improvements to how React handles concurrent rendering, making it easier to build UIs that remain responsive even during complex updates. This means smoother animations, faster page transitions, and a better overall user experience.</p>
        
        <h2>Enhanced Server Components</h2>
        <p>Server Components were introduced as an experimental feature in React 18, but React 19 brings them to maturity with several enhancements. Server Components allow you to render components on the server, reducing the amount of JavaScript sent to the client and improving initial load times.</p>
        
        <p>In React 19, Server Components are getting better integration with data fetching libraries, making it easier to build applications that fetch data on the server and render it without client-side JavaScript. This is particularly beneficial for applications that need to display large amounts of data or complex UIs that don't require much interactivity.</p>
        
        <h2>Improved Developer Experience</h2>
        <p>React 19 also includes several improvements to the developer experience. The new React DevTools provide better insights into your component hierarchy, making it easier to debug and optimize your applications. The error messages have been improved to provide more helpful information when something goes wrong.</p>
        
        <p>Additionally, the React team has been working on better TypeScript integration, with improved type definitions and better inference for hooks and components. This makes it easier to build type-safe React applications without having to write as much boilerplate code.</p>
        
        <h2>Migration Path</h2>
        <p>The React team has always been committed to providing smooth migration paths between major versions, and React 19 is no exception. Most applications should be able to upgrade with minimal changes, and the React team is providing a comprehensive migration guide to help with any breaking changes.</p>
        
        <p>The React team is also providing a compatibility mode that allows you to run React 18 and React 19 code side by side, making it easier to gradually migrate your application.</p>
        
        <h2>Conclusion</h2>
        <p>React 19 represents a significant step forward for the library, with improvements to performance, developer experience, and server rendering. These changes will make it easier to build fast, responsive, and maintainable web applications.</p>
        
        <p>While the final release date for React 19 hasn't been announced yet, the React team has been sharing previews and experimental releases that give us a good idea of what to expect. If you're interested in trying out these new features, you can check out the experimental releases on the React website.</p>
      `,
      image: "/placeholder.svg?height=400&width=800",
      date: "April 15, 2024",
      readTime: "8 min read",
      author: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=100&width=100",
        bio: "Alex is a senior frontend developer with 8 years of experience specializing in React and modern JavaScript frameworks. He writes about web development, performance optimization, and emerging technologies.",
      },
      categories: ["React", "JavaScript", "Frontend"],
      featured: true,
      comments: [
        {
          id: 1,
          author: {
            name: "Sarah Chen",
            avatar: "/placeholder.svg?height=100&width=100",
          },
          date: "April 16, 2024",
          content:
            "Great article! I'm really excited about the new rendering engine. Do you know if there's any timeline for when React 19 will be officially released?",
        },
        {
          id: 2,
          author: {
            name: "Michael Rodriguez",
            avatar: "/placeholder.svg?height=100&width=100",
          },
          date: "April 17, 2024",
          content:
            "The improved server components sound promising. I've been using the experimental version in a few projects and it's already made a big difference in performance.",
        },
      ],
    },
    {
      id: 2,
      title: "Mastering CSS Grid Layout: Advanced Techniques",
      excerpt:
        "A comprehensive guide to using CSS Grid for complex layouts. Learn advanced techniques for responsive designs, nested grids, and animation integration.",
      content: `
        <p>CSS Grid has revolutionized how we approach web layouts, providing a powerful two-dimensional system that makes complex designs more accessible. In this article, we'll explore advanced CSS Grid techniques that go beyond the basics.</p>
        
        <h2>Responsive Layouts Without Media Queries</h2>
        <p>One of the most powerful features of CSS Grid is its ability to create responsive layouts with minimal code. Using functions like minmax(), auto-fit, and auto-fill, you can create layouts that automatically adjust to different screen sizes without relying heavily on media queries.</p>
        
        <pre><code>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
        </code></pre>
        
        <p>This simple code creates a responsive grid where each item is at least 250px wide, and the grid automatically adjusts the number of columns based on the available space.</p>
        
        <h2>Nested Grids for Complex Components</h2>
        <p>For more complex layouts, you can nest grids within grid items. This is particularly useful for creating components with their own internal layout structure.</p>
        
        <pre><code>
.card {
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 0.5rem;
}

.card-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
}
        </code></pre>
        
        <p>This creates a card component with a header, flexible content area, and footer. The content area itself is a grid with a sidebar and main content area.</p>
        
        <h2>Grid Template Areas for Semantic Layouts</h2>
        <p>Grid template areas provide a visual way to define your layout, making it easier to understand and maintain complex designs.</p>
        
        <pre><code>
.dashboard {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "sidebar footer footer";
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr auto;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
        </code></pre>
        
        <p>This creates a dashboard layout with a header spanning the full width, a sidebar on the left, and main content and footer on the right.</p>
        
        <h2>Integrating Animations with Grid Layouts</h2>
        <p>CSS Grid works well with animations, allowing you to create dynamic layouts that respond to user interactions.</p>
        
        <pre><code>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  transition: grid-template-columns 0.3s ease;
}

.grid-container:hover {
  grid-template-columns: 2fr 1fr 1fr;
}
        </code></pre>
        
        <p>This simple example expands the first column when the user hovers over the grid container, creating a subtle but effective interaction.</p>
        
        <h2>Conclusion</h2>
        <p>CSS Grid has transformed how we approach web layouts, making it easier to create complex, responsive designs with less code. By mastering these advanced techniques, you can take your layouts to the next level and create more dynamic, flexible user interfaces.</p>
        
        <p>Remember that CSS Grid works best when combined with other CSS features like Flexbox for one-dimensional layouts within grid items. The combination of these tools gives you a powerful system for creating any layout you can imagine.</p>
      `,
      image: "/placeholder.svg?height=400&width=800",
      date: "April 2, 2024",
      readTime: "10 min read",
      author: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg?height=100&width=100",
        bio: "Sarah is a UI/UX designer and frontend developer with a passion for creating beautiful, accessible web experiences. She specializes in CSS, animation, and design systems.",
      },
      categories: ["CSS", "Design", "Frontend"],
      comments: [
        {
          id: 1,
          author: {
            name: "Jamie Taylor",
            avatar: "/placeholder.svg?height=100&width=100",
          },
          date: "April 3, 2024",
          content:
            "This is exactly what I needed! I've been struggling with responsive layouts and this approach using auto-fit and minmax is so much cleaner than what I was doing with media queries.",
        },
      ],
    },
    {
      id: 3,
      title: "Optimizing React Performance: Practical Strategies",
      excerpt:
        "Tips and techniques to improve the performance of your React applications. Learn about memoization, code splitting, and effective state management.",
      content: `
        <p>Performance optimization is crucial for delivering a great user experience in React applications. This post covers practical strategies you can implement today to make your React apps faster and more efficient.</p>
        
        <h2>Memoization with useMemo and useCallback</h2>
        <p>React's useMemo and useCallback hooks are powerful tools for preventing unnecessary calculations and re-renders. useMemo memoizes the result of a calculation, while useCallback memoizes a function definition.</p>
        
        <pre><code>
// Without memoization
const sortedItems = items.sort((a, b) => a.value - b.value);

// With useMemo
const sortedItems = useMemo(() => {
  return items.sort((a, b) => a.value - b.value);
}, [items]);

// Memoizing a callback function
const handleClick = useCallback(() => {
  console.log('Button clicked!');
  doSomethingWithDependency(dependency);
}, [dependency]);
        </code></pre>
        
        <p>Use these hooks when you have expensive calculations or when you're passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.</p>
        
        <h2>Code Splitting for Smaller Bundle Sizes</h2>
        <p>Code splitting allows you to break your application into smaller chunks that are loaded on demand, reducing the initial load time of your application.</p>
        
        <pre><code>
// Without code splitting
import { ExpensiveComponent } from './ExpensiveComponent';

// With code splitting using React.lazy
const ExpensiveComponent = React.lazy(() => import('./ExpensiveComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<Loading />}>
      <ExpensiveComponent />
    </Suspense>
  );
}
        </code></pre>
        
        <p>This is particularly useful for components that aren't needed for the initial render, such as modal dialogs, complex forms, or different routes in your application.</p>
        
        <h2>Effective State Management</h2>
        <p>How you structure and manage state can have a significant impact on your application's performance. Here are some strategies for more efficient state management:</p>
        
        <h3>1. Keep state as local as possible</h3>
        <p>State that's only used by a single component should be kept in that component, not in a global store. This reduces the number of components that need to re-render when the state changes.</p>
        
        <h3>2. Use context selectively</h3>
        <p>When using React Context, be mindful of how many components are consuming the context. All consumers re-render when the context value changes, so structure your context to minimize unnecessary re-renders.</p>
        
        <pre><code>
// Split your context into smaller, more focused contexts
const UserContext = React.createContext();
const ThemeContext = React.createContext();

// Use context selectors to only get what you need
function UserProfile() {
  const { user } = useContext(UserContext);
  // Only re-renders when the user changes
  return <div>{user.name}</div>;
}
        </code></pre>
        
        <h3>3. Consider using a state management library</h3>
        <p>For complex applications, libraries like Redux, Zustand, or Jotai can provide more efficient state management with features like selective updates and middleware for side effects.</p>
        
        <h2>Virtualization for Long Lists</h2>
        <p>When rendering long lists of items, virtualization can significantly improve performance by only rendering the items that are currently visible in the viewport.</p>
        
        <pre><code>
import { FixedSizeList } from 'react-window';

function MyList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );

  return (
    <FixedSizeList
      height={500}
      width={300}
      itemCount={items.length}
      itemSize={35}
    >
      {Row}
    </FixedSizeList>
  );
}
        </code></pre>
        
        <p>Libraries like react-window and react-virtualized provide components for efficiently rendering large lists and grids.</p>
        
        <h2>Measuring Performance with React's Profiler</h2>
        <p>Before optimizing, it's important to measure your application's performance to identify bottlenecks. React's Profiler API and the React DevTools Profiler are valuable tools for this.</p>
        
        <pre><code>
import { Profiler } from 'react';

function onRenderCallback(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) {
  
}

function MyApp() {
  return (
    <Profiler id="MyApp" onRender={onRenderCallback}>
      <App />
    </Profiler>
  );
}
        </code></pre>
        
        <p>Use the Profiler to identify components that are rendering too frequently or taking too long to render, then apply the appropriate optimization techniques.</p>
        
        <h2>Conclusion</h2>
        <p>Performance optimization in React is an ongoing process, not a one-time task. By implementing these strategies and regularly measuring your application's performance, you can ensure a smooth and responsive experience for your users.</p>
        
        <p>Remember that premature optimization can lead to more complex code that's harder to maintain, so always measure first and optimize where it matters most.</p>
      `,
      image: "/placeholder.svg?height=400&width=800",
      date: "March 20, 2024",
      readTime: "12 min read",
      author: {
        name: "Michael Rodriguez",
        avatar: "/placeholder.svg?height=100&width=100",
        bio: "Michael is a performance-focused software engineer with expertise in React and modern JavaScript. He specializes in building fast, scalable web applications and teaching best practices.",
      },
      categories: ["React", "Performance", "JavaScript"],
      comments: [
        {
          id: 1,
          author: {
            name: "Alex Johnson",
            avatar: "/placeholder.svg?height=100&width=100",
          },
          date: "March 21, 2024",
          content:
            "Great article! I've been using useMemo and useCallback, but I wasn't aware of the Profiler API. Going to try that out on my current project.",
        },
        {
          id: 2,
          author: {
            name: "Sarah Chen",
            avatar: "/placeholder.svg?height=100&width=100",
          },
          date: "March 22, 2024",
          content:
            "The virtualization tip is a game-changer. I implemented react-window on a project with a table of 1000+ items and the performance improvement was dramatic.",
        },
      ],
    },
  ]

  const post = blogPosts.find((p) => p.id === postId)

  // Get related posts based on categories
  const relatedPosts = post
    ? blogPosts.filter((p) => p.id !== post.id && p.categories.some((cat) => post.categories.includes(cat))).slice(0, 3)
    : []

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" className="mb-8 group" onClick={() => router.push("/blog")}>
        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Blog
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div ref={headerRef} className="mb-8">
            <div className="flex items-center text-sm text-muted-foreground space-x-4 mb-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {post.categories.map((category, i) => (
                <Badge key={i} className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200">
                  {category}
                </Badge>
              ))}
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
          </div>

          <div
            ref={contentRef}
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div ref={authorRef} className="bg-card rounded-lg border p-6 mb-12">
            <div className="flex items-start gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-bold text-lg mb-1">About {post.author.name}</h3>
                <p className="text-muted-foreground">{post.author.bio}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Button
                variant={liked ? "default" : "outline"}
                size="sm"
                className={liked ? "bg-purple-600 hover:bg-purple-700 text-white" : ""}
                onClick={handleLike}
              >
                <ThumbsUp className="mr-2 h-4 w-4" />
                {likeCount}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => document.getElementById("comments")?.scrollIntoView({ behavior: "smooth" })}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                {post.comments ? post.comments.length : 0}
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" onClick={copyToClipboard}>
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{copied ? "Copied!" : "Copy link"}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" asChild>
                      <Link
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&text=${encodeURIComponent(post.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="h-4 w-4" />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Share on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" asChild>
                      <Link
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook className="h-4 w-4" />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Share on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" asChild>
                      <Link
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Share on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <Separator className="mb-8" />

          <div id="comments" ref={commentsRef} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Comments ({post.comments ? post.comments.length : 0})</h2>

            {post.comments && post.comments.length > 0 ? (
              <div className="space-y-6 mb-8">
                {post.comments.map((comment) => (
                  <div key={comment.id} className="border rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                        <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{comment.author.name}</h4>
                          <span className="text-xs text-muted-foreground">{comment.date}</span>
                        </div>
                        <p className="text-muted-foreground">{comment.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground mb-8">No comments yet. Be the first to comment!</p>
            )}

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Leave a comment</h3>
              <form onSubmit={handleSubmitComment}>
                <div className="mb-4">
                  <Textarea
                    placeholder="Write your comment here..."
                    className="min-h-[120px]"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">
                  Post Comment
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div ref={relatedRef} className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Related Posts</h3>
            {relatedPosts.length > 0 ? (
              <div className="space-y-6">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.id} className="flex gap-3">
                    <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium line-clamp-2 mb-1">
                        <Link
                          href={`/blog/${relatedPost.id}`}
                          className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                          {relatedPost.title}
                        </Link>
                      </h4>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{relatedPost.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No related posts found.</p>
            )}
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(blogPosts.flatMap((post) => post.categories))).map((category, index) => (
                <Link key={index} href={`/blog?category=${category.toLowerCase()}`}>
                  <Badge
                    variant="outline"
                    className="bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 cursor-pointer"
                  >
                    {category}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900/20 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Subscribe to Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Get the latest articles and resources sent straight to your inbox.
            </p>
            <div className="space-y-2">
              <Input type="email" placeholder="Enter your email" />
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

