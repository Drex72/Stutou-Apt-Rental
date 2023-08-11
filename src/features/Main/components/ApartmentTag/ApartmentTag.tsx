import './ApartmentTagStyles.scss'

interface IApartmentTag {
    text: string | string[]
    variant: 'outlined' | 'contained' | 'outlined_disabled' | 'contained_disabled'
    className?: string
}

const ApartmentTag = (props: IApartmentTag) => {
    const { text, variant, className } = props
    return (
        <span className={`apartmentTag apartmentTag-${variant} ${className}`}>{text}</span>
    )
}

export default ApartmentTag