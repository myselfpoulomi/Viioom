import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Heart, Sparkles } from "lucide-react"

function App() {
  const [hearts, setHearts] = useState([])

  const createHearts = () => {
    const count = 120
    const items = Array.from({ length: count }).map((_, idx) => ({
      id: `${Date.now()}-${idx}`,
      left: Math.random() * 100, // 0% - 100%
      delay: Math.random() * 1.2, // seconds
      duration: 4 + Math.random() * 3.5, // seconds (linger longer)
      scale: 0.8 + Math.random() * 0.6,
      opacity: 0.7 + Math.random() * 0.3,
    }))
    setHearts(items)

    // Clear after animation finishes
    const maxDuration = Math.max(...items.map(i => i.duration + i.delay))
    window.setTimeout(() => setHearts([]), (maxDuration + 0.4) * 1000)
  }

  return (
    <TooltipProvider>
      <div className='min-h-screen bg-gradient-to-b from-pink-50 via-rose-50 to-white dark:from-rose-950 dark:via-pink-950 dark:to-background text-foreground p-6 md:p-10'>
        <div className='mx-auto max-w-2xl space-y-8'>
          <div className='flex items-center justify-center gap-3 animate-in fade-in slide-in-from-top-2 duration-500'>
            <Heart className='h-7 w-7 text-rose-500 animate-pulse' />
            <h1 className='text-3xl md:text-4xl font-semibold tracking-tight text-center'>
              For Ritu, my favorite person in the world
            </h1>
            <Sparkles className='h-7 w-7 text-pink-500' />
          </div>

          <Card className='relative overflow-hidden shadow-lg border-rose-100/60 dark:border-rose-900/40 animate-in fade-in-50 zoom-in-95 duration-500'>
            <CardHeader className='text-center'>
              <CardTitle className='text-2xl md:text-3xl'>I love you, Ritu! ✨</CardTitle>
            </CardHeader>
            <CardContent className='space-y-5'>
              <p className='text-center text-muted-foreground'>
                You make ordinary moments feel magical. Thank you for being my peace.
              </p>

              <div className='flex justify-center'>
                <img
                  src='/cute.jpeg'
                  alt='Us together, my favorite picture'
                  className='rounded-xl shadow-lg border border-rose-100/60 dark:border-rose-900/40 max-h-[360px] w-auto object-cover'
                  loading='lazy'
                />
              </div>

              <div className='flex flex-wrap items-center justify-center gap-2'>
                <Badge variant='secondary' className='bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-200'>
                  Kind heart 💖
                </Badge>
                <Badge variant='secondary' className='bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-200'>
                  Beautiful smile 😊
                </Badge>
                <Badge variant='secondary' className='bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/40 dark:text-fuchsia-200'>
                  My safe place 🫶
                </Badge>
              </div>

              <div className='flex items-center justify-center gap-3'>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button onClick={createHearts} className='bg-rose-500 hover:bg-rose-600'>
                      Send love
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Tap to send a little love note</TooltipContent>
                </Tooltip>
              </div>

              {/* Floating hearts flow */}
              {hearts.length > 0 && (
                <div className='pointer-events-none fixed inset-0 z-50'>
                  {hearts.map(h => (
                    <div
                      key={h.id}
                      className='absolute animate-[float-up_var(--duration)_ease-out_forwards]'
                      style={{
                        left: `${h.left}%`,
                        bottom: '0%',
                        animationDelay: `${h.delay}s`,
                        ['--duration']: `${h.duration}s`,
                        transform: `scale(${h.scale})`,
                        opacity: h.opacity,
                      }}
                    >
                      <Heart className='h-6 w-6 text-rose-500 drop-shadow' />
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

         
        </div>
      </div>
    </TooltipProvider>
  )
}

export default App