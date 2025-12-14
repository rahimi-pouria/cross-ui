import Carousel from 'react-bootstrap/Carousel';
import {CustomCarouselProps} from "@/props/reactBootstrap/customCarousel";
import CustomButton from "../CustomButton";
import { customButtonProps } from "@/props/reactBootstrap/customButton";
type customAllProps = CustomCarouselProps & customButtonProps

const CustomCarousel = (props: customAllProps) => {
    return (
        <>
            <Carousel className={props.customClassCarousel} data-bs-theme={props.dataBsTheme}>
                {props.itemSlider.map((item) => (
                    <Carousel.Item className={props.customClassCarouselItem} key={item.id}>
                        <img className={`d-block w-100 ${props.customClassImgCarousel}`} src={item.srcImage} alt={item.altImage}/>
                        <Carousel.Caption className={props.customClassCarouselCaption}>
                            <h5 className={props.customClassTitleCarousel}>{item.title}</h5>
                            <p className={props.customClassCarouselDescription}>{item.description}</p>
                            {props.showBtn ? (
                                <CustomButton titleBtn={props.titleBtn} active={props.active} id={props.id} variant={props.variant}
                                              typeBtn={props.typeBtn} size={props.size} disable={props.disable} href={props.href} onClick={props.onClick}
                                              customClassBtn={props.customClassBtn}/>
                            ) : null}
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}

export default CustomCarousel