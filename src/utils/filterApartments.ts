import { IApartment } from '../interfaces/IAPIResponse'
import { IApartmentFilter } from '../interfaces/IApartment'

export function filterApartments(
  apartments: IApartment[],
  filter: IApartmentFilter
): IApartment[] {
  // Create a result array to hold filtered apartments
  const filteredApartments: IApartment[] = []

  // Iterate through each apartment in the list
  for (const apartment of apartments) {
    // Initialize a flag to keep track of whether the apartment matches the filter
    let apartmentMatchesFilter = true

    // Check the categories filter
    if (filter.categories && filter.categories.length > 0) {
      const categoriesMatch = filter.categories.every((category) =>
        apartment.categories.includes(category)
      )
      if (!categoriesMatch) {
        apartmentMatchesFilter = false
      }
    }

    // Check the noOfRooms filter
    if (filter.noOfRooms && apartment.rooms.toString() !== filter.noOfRooms) {
      apartmentMatchesFilter = false
    }

    // Check the lowestPrice filter
    if (
      filter.lowestPrice &&
      apartment.lowestPrice > parseFloat(filter.lowestPrice)
    ) {
      apartmentMatchesFilter = false
    }

    // Check the highestPrice filter
    if (
      filter.highestPrice &&
      apartment.highestPrice < parseFloat(filter.highestPrice)
    ) {
      apartmentMatchesFilter = false
    }

    // Check the postCode filter
    if (filter.postCode && filter.postCode.length > 0) {
      const postCodesMatch = filter.postCode.every((postcode) =>
        apartment.postCode.includes(postcode)
      )
      if (!postCodesMatch) {
        apartmentMatchesFilter = false
      }
    }

    // Check the Verification Status filter
    if (apartment.isVerified !== filter.isVerified) {
      apartmentMatchesFilter = false
    }

    // If the apartment matches all filter conditions, add it to the filtered result
    if (apartmentMatchesFilter) {
      filteredApartments.push(apartment)
    }
  }

  return filteredApartments
}

export function filterApartments2(
  apartments: IApartment[],
  filter: IApartmentFilter
): IApartment[] {
  return apartments.filter((apartment) =>
    apartmentMatchesFilter(apartment, filter)
  )
}
function apartmentMatchesFilter(
  apartment: IApartment,
  filter: IApartmentFilter
): boolean {
  return Object.entries(filter).every(([key, value]) => {
    if (value === undefined) {
      return true
    }

    if (key === 'categories') {
      return (value as string[]).every((category) =>
        apartment.categories.includes(category)
      )
    }

    if (key === 'noOfRooms') {
      return apartment.rooms.toString() === (value as string)
    }

    if (key === 'lowestPrice') {
      return apartment.lowestPrice > parseFloat(value as string)
    }

    if (key === 'highestPrice') {
      return apartment.highestPrice < value
    }

    if (key === 'postCode') {
      return apartment.postCode === (value as string)
    }

    if (key === 'isVerified') {
      return apartment.isVerified === (value as boolean)
    }

    return false
  })
}
