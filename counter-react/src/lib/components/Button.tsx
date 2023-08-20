import { ComponentProps } from 'react'
import { cn } from '@/lib/utils/cn.ts'

// Declare Button's props by using native button element's attributes
// It will get all of attributes that html button supports.
// It can be written like this
// export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
// But the more concise way would be to use ComponentProps
export type ButtonProps = ComponentProps<'button'>

export default function Button(props: ButtonProps) {
  const { className, ...restProps } = props

  return (
    <button
      {...restProps}
      // Merge custom className with default className by using cn()
      // It helps prevent duplicate and conflict classNames
      className={cn(
        'text-2xl text-button-text bg-button rounded-lg border-solid border-button py-2 px-4 cursor-pointer min-w-[44px] hover:bg-button-hover',
        className,
      )}
    />
  )
}
