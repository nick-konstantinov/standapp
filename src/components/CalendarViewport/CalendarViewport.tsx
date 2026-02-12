import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const CalendarViewport = ({ children }: Props) => {
  return (
    <div
      className="h-screen w-full flex items-center justify-center bg-zinc-100 overflow-hidden"
      style={{ perspective: '2200px' }}
    >
      {children}
    </div>
  )
}
