import Image from 'react-bootstrap/Image';
import { customImageProps } from "../../props/bootstrap/customImage";


const customImages = (props: customImageProps) => {
    return (
        <>
            <Image id={props.idImage} className={props.customClassImage} src={props.srcImage} rounded={props.roundedImage} alt={props.altImage} roundedCircle={props.roundedCircleImage}
                thumbnail={props.thumbnailImage} fluid={props.fluidImage} bsPrefix={props.bsPrefixImage}
            />
        </>
    )
}
export default customImages;