export interface IApartment {
  image: File | null
  name: string
  description: string
  location: string
  rooms: string
  categories: string | string[]
  lowestPrice: string
  highestPrice: string
  owner: string
}
