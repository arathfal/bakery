export type BakeryType = {
  name: string
  source: 'whatsapp' | 'email' | 'call' | null
  email: string
  phone: string
  total: number
  note: string
}
