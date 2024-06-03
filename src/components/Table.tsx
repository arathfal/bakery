import classNames from '@/lib/classNames'
import { BakeryType } from '@/types/bakery'

type TableProps = {
  headers?: string[]
  data?: BakeryType[]
  className?: string
}

export default function Table({ headers, data, className }: TableProps) {
  return (
    <table className={classNames('w-full text-center text-sm text-slate-700', className)}>
      <thead className="bg-slate-300 text-xs uppercase text-slate-700">
        <tr>
          {headers?.map((header) => {
            return (
              <th key={header} scope="col" className="px-6 py-4">
                {header}
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => {
          return (
            <tr key={JSON.stringify(item)} className="border-b bg-slate-50">
              <td className="px-6 py-4">{item?.name}</td>
              <td className="px-6 py-4">{item?.source?.toUpperCase()}</td>
              <td className="px-6 py-4">{item?.email}</td>
              <td className="px-6 py-4">{item?.phone}</td>
              <td className="px-6 py-4">{item?.total}</td>
              <td className="px-6 py-4">{item?.note}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
