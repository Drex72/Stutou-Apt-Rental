import { useEffect, useState } from "react"
import { Hero, HowItWorks, AccomodationEasy, TestimonialContainer, FAQ } from "../components"
import { getAllImages } from "../hooks/useFetch"
import { HeroImage } from "../../../utils/getImageLinksFromApi"
import PageLoader from "../../../components/PageLoader/PageLoader"


export const Home = () => {
  const [images, setImages] = useState<{
    data: HeroImage[],
    loading: boolean
  }>({
    data: [],
    loading: true
  })

  const getHeroImages = async () => {
    try {
      const val = await getAllImages('houses')
      setImages({ data: val.data!, loading: val.loading })
      console.log(val.data)
    } catch (error) {

    }
  }

  useEffect(() => {
    getHeroImages()
  }, [])
  return (
    <div>
      {images.loading ? (
        <PageLoader />
      ) : (
        <div>
          <Hero images={images.data} />
          <AccomodationEasy />
          <HowItWorks />
          <TestimonialContainer />
          <FAQ />
        </div>
      )}
    </div>
  )
}

