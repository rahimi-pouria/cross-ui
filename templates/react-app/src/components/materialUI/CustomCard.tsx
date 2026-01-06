import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CustomCardProps } from "../../props/material/customCard";
import CustomButton from "./CustomButton";
import {CustomButtonProps} from "@/props/material/customButton";

type customAllType = CustomCardProps & CustomButtonProps

const CustomCard = (props: customAllType) => {
    return (
        <>
            <Card className={props.customClassWrapperCard} sx={{ maxWidth: 345 }}>
                <CardMedia className={props.customClassCardMedia} sx={{ height: 140 }} image={props.srcImage} title={props.title}/>
                <CardContent className={props.contentCard}>
                    <Typography className={props.customClassTypography} gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography className={props.customClassTypography} variant="body2" sx={{ color: 'text.secondary' }}>
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <div className={props.customClassActions}>
                        <CustomButton title={props.titleBtn} id={props.id} variant={props.variant} loading={props.loading} size={props.size} onClick={props.onClick} loadingIndicator={props.loadingIndicator}
                                      customClassBtn={props.customClassBtn}/>
                    </div>
                </CardActions>
            </Card>
        </>
    )
}

export default CustomCard