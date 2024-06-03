'use client'
import { ChangeEventHandler, FormEventHandler, useCallback, useState } from 'react'

import { useRouter } from 'next/navigation'
import Select from 'react-select'

import Button from '@/components/Button'
import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import useBakery from '@/store/bakery'
import { BakeryType } from '@/types/bakery'

type FormValues = {
  name: string
  source: { value: string; label: string } | null
  email: string
  phone: string
  total: string
  note: string
}

const options = [
  { value: 'whatsapp', label: 'Whatsapp' },
  { value: 'email', label: 'Email' },
  { value: 'call', label: 'Call' }
]

export default function OrderCreate() {
  const router = useRouter()
  const { bakery, setBakery } = useBakery()
  const [form, setForm] = useState<FormValues>({
    name: '',
    source: null,
    email: '',
    phone: '',
    total: '',
    note: ''
  })

  const onBack = useCallback(() => {
    router.push('/')
  }, [router])

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = useCallback(
    (event) => {
      const { name, value } = event.target

      setForm((prev) => ({ ...prev, [name]: value }))
    },
    [setForm]
  )

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault()
      setBakery([
        ...bakery,
        {
          ...form,
          source: form?.source?.value as BakeryType['source'],
          total: Number(form?.total)
        }
      ])
      setTimeout(onBack, 200)
    },
    [setBakery, form, bakery, onBack]
  )

  return (
    <main className="flex justify-center px-4 py-10 xs:px-8">
      <div className="flex w-full max-w-[550px] flex-col gap-6 rounded-md p-4 shadow shadow-slate-700/30">
        <h1 className="text-center text-xl">
          <strong>Order Create</strong>
        </h1>
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
          <div className="flex w-full flex-col gap-1">
            <label>Sumber Pesanan</label>
            <Select
              id="source"
              name="source"
              value={form?.source}
              onChange={(val) => setForm((prev) => ({ ...prev, source: val }))}
              options={options}
            />
          </div>
          <Input label="Name" placeholder="Masukkan nama" name="name" onChange={handleChange} />
          <Input label="No HP" placeholder="Masukkan no hp" name="phone" onChange={handleChange} />
          <Input
            label="Email"
            type="email"
            placeholder="Masukkan email"
            name="email"
            onChange={handleChange}
          />
          <Input label="Jumlah Roti" placeholder="0" name="total" onChange={handleChange} />
          <Textarea
            label="Keterangan"
            placeholder="Tulis keterangan"
            name="note"
            onChange={handleChange}
          />
          <div className="flex gap-4">
            <Button onClick={onBack} type="button" variant="outlined" className="w-full">
              Kembali
            </Button>
            <Button type="submit" className="w-full">
              Simpanan
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
}
