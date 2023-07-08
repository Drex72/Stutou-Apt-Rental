export interface HeroImage {
  url: string
  description: string
}

export const getImageLinksFromApi = (apiResults: any[]) => {
  const result: HeroImage[] = []
  apiResults.map((item) => {
    result.push({ url: item.urls.full, description: item.alt_description })
  })
  return result
}
