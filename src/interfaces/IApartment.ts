export interface IApartment {
  image: File | null
  name: string
  description: string
  location: string
  rooms: string
  categories: string[]
  lowestPrice: string
  highestPrice: string
}

export interface IApartmentFilter {
  categories?: string[]
  noOfRooms?: string
  lowestPrice?: string
  highestPrice?: string
  postCode?: string[]
  isVerified?: boolean
}
