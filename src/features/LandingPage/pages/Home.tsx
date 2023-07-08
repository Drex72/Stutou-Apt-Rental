import { useEffect, useState } from "react"
import HeroSlider from "../components/Hero/Hero"
import { getAllImages } from "../hooks/useFetch"
import { HeroImage } from "../../../utils/getImageLinksFromApi"
import PageLoader from "../../../components/PageLoader/PageLoader"
import { Element } from 'react-scroll';
import HowItWorks from "../components/HowItWorks/HowItWorks"


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
          <Element name="home">
            <HeroSlider images={images.data} />
          </Element>
          <HowItWorks />
          <Element name="about-us">
            <HeroSlider images={images.data} />
          </Element>
          <Element name="contact-us">
            <HeroSlider images={images.data} />
          </Element>
        </div>
      )}
    </div>
  )
}

