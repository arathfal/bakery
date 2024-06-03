import { create } from 'zustand'

import type { BakeryType } from '@/types/bakery'

type UseBakeryType = {
  bakery: BakeryType[]
  setBakery: (bakery: BakeryType[]) => void
}

const useBakery = create<UseBakeryType>((set) => ({
  bakery: [],
  setBakery: (bakery) => set({ bakery })
}))

export default useBakery
