import { url } from "../constants"
const ArrowIcon = ({className}) => {
    return (
        <img className={`rotate-90 md:rotate-0 ${className}`} src={url.arrow} alt="arrow" />
    )
}

export default ArrowIcon