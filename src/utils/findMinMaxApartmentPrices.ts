export function findMinMaxApartmentPrices(apartments: IApartment[]): {
  lowestPrice: number
  highestPrice: number
} {
  if (apartments.length === 0) {
    return { lowestPrice: 0, highestPrice: 0 }
  }

  let lowestPrice = apartments[0].lowestPrice
  let highestPrice = apartments[0].highestPrice

  for (const apartment of apartments) {
    if (apartment.lowestPrice < lowestPrice) {
      lowestPrice = apartment.lowestPrice
    }
    if (apartment.highestPrice > highestPrice) {
      highestPrice = apartment.highestPrice
    }
  }
  return { lowestPrice, highestPrice }
}
