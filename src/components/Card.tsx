import classNames from '@/lib/classNames'
import type { BakeryType } from '@/types/bakery'

type CardProps = {
  data: BakeryType[]
  className?: string
}

export default function Card({ data, className }: CardProps) {
  return (
    <>
      {data?.map((item) => {
        return (
          <div
            key={JSON.stringify(item)}
            className={classNames(
              'mt-10 rounded text-slate-700 shadow shadow-slate-500/30',
              className
            )}
          >
            <div className="flex justify-between gap-2 border-b border-slate-100 bg-slate-100 p-2">
              <h5 className="font-semibold">{item?.name}</h5>
              <h5 className="font-semibold">{item?.total} roti</h5>
            </div>
            <div className="flex flex-col gap-1 p-2">
              <p className="text-sm">{item?.email}</p>
              <p className="text-sm">{item?.phone}</p>
              <div className="flex items-start gap-1.5">
                <p className="text-sm">Keterangan:</p>
                <p className="text-sm">{item?.note}</p>
              </div>
              <p className="text-sm">
                Dipesan melalui {item?.source === 'call' ? 'telpon' : item?.source}
              </p>
            </div>
          </div>
        )
      })}
    </>
  )
}
