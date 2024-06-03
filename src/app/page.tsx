'use client'
import { useMemo, useState } from 'react'

import { useRouter } from 'next/navigation'

import Button from '@/components/Button'
import Card from '@/components/Card'
import Empty from '@/components/Empty'
import Filter from '@/components/Filter'
import Table from '@/components/Table'
import useBakery from '@/store/bakery'

export default function Home() {
  const router = useRouter()
  const { bakery } = useBakery()
  const [filter, setFilter] = useState<string>('')

  const list = useMemo(() => {
    if (!!filter) {
      return bakery?.filter((item) => item?.source === filter?.toLowerCase())
    }
    return bakery
  }, [bakery, filter])

  return (
    <main className="px-4 py-10 xs:px-8">
      <div className="mb-6 flex justify-between gap-2">
        <Filter values={['Whatsapp', 'Email', 'Call']} selected={filter} onChange={setFilter} />
        <Button onClick={() => router.push('/order/create')}>Buat Pesanan</Button>
      </div>
      {list?.length > 0 ? (
        <div className="relative xs:overflow-x-auto">
          <Table
            className="hidden xs:table"
            headers={['Nama', 'Sumber Pesanan', 'Email', 'HP', 'Jumlah Roti', 'Keterangan']}
            data={list}
          />
          <Card className="xs:hidden" data={list} />
        </div>
      ) : (
        <Empty />
      )}
    </main>
  )
}
