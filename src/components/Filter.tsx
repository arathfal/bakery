'use client'
import classNames from '@/lib/classNames'

import Button from './Button'

type FilterProps = {
  values: string[]
  selected?: string
  onChange?: (value: string) => void | VoidFunction
}

export default function Filter({ values, onChange, selected }: FilterProps) {
  return (
    <div className="inline-flex h-auto divide-x divide-slate-300 rounded-sm border border-slate-300">
      {values?.map((value) => {
        const isSelected = selected === value
        return (
          <Button
            key={value}
            onClick={() => {
              if (typeof onChange === 'function') {
                if (isSelected) onChange('')
                else onChange(value)
              }
            }}
            variant="plain"
            className={classNames(
              ' text-xs xs:text-sm',
              isSelected ? 'bg-slate-300' : 'bg-slate-50'
            )}
          >
            {value}
          </Button>
        )
      })}
    </div>
  )
}
