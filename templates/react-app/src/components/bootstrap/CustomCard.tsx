import Card from 'react-bootstrap/Card';
import CustomButton from "./CustomButton";
import { customButtonProps } from "@/props/bootstrap/customButton";
import { CustomCardProps } from "@/props/bootstrap/CustomCard";

type CustomAllProps = CustomCardProps & customButtonProps;

const CustomCard = (props: CustomAllProps) => {
    return (
        <>
            <Card className={props.customClassCard} style={{ width: '18rem', padding: '10px' }}>
                {props.titleHeaderCard ? (props.titleHeaderCard) : (
                    <Card.Header className={props.customClassHeaderCard}>{props.titleHeaderCard}</Card.Header>
                )}
                <Card.Img className={props.customClassImgCard} variant={props.variantImg} src={props.srcImg} />
                <Card.Body className={props.customClassCardBody}>
                    <Card.Title className={props.customClassCardTitle}>{props.title}</Card.Title>
                    <Card.Text className={props.customClassCardText}>{props.description}</Card.Text>
                    {/*list Group children*/}
                    {props.children}
                    <div className="d-flex flex-column gap-1">
                        {props.showBtn && (
                            <CustomButton id={props.id} titleBtn={props.titleBtn} active={props.active} variant={props.variant}
                                          typeBtn={props.typeBtn} size={props.size} disable={props.disable} href={props.href}
                                          customClassBtn={props.customClassBtn}/>
                        )}
                    </div>
                </Card.Body>
                {props.titleFooterCard ? (props.titleFooterCard) : (
                        <Card.Footer className={props.customClassFooter}>{props.titleFooterCard}</Card.Footer>
                )}
            </Card>
        </>
    )
}
export default CustomCard