import * as React from 'react'

import classNames from '@/lib/classNames'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string
  label?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, containerClassName, disabled, type, value, label, id, ...props }, ref) => {
    return (
      <div className={classNames('flex w-full flex-col gap-1', containerClassName)}>
        <label htmlFor={id}>{label}</label>
        <input
          className={classNames(
            'flex h-10 w-full rounded border border-slate-300 bg-transparent px-3 py-1 text-sm shadow-sm outline-none transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus:border-[#2684FF] focus:shadow-[0_0_0_1px_#2684FF] disabled:cursor-not-allowed disabled:opacity-50 disabled:placeholder:text-gray-600',
            className
          )}
          value={value}
          type={type}
          ref={ref}
          id={id}
          disabled={disabled}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = 'Input'

export default Input
