import { ButtonHTMLAttributes } from 'react'

import classNames from '@/lib/classNames'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'plain' | 'primary' | 'outlined'
}

export default function Button({
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  const isPlain = variant === 'plain'
  const isPrimary = variant === 'primary'
  const isOutlined = variant === 'outlined'

  return (
    <button
      className={classNames(
        'w-auto p-2 px-4 text-sm transition-all duration-300',
        isPlain && 'focus:outline-none',
        isPrimary && 'rounded bg-sky-500 text-white hover:bg-sky-600 focus:outline-indigo-500',
        isOutlined &&
          'rounded border border-slate-300 bg-white text-slate-700 hover:bg-slate-200 focus:outline-slate-500',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
