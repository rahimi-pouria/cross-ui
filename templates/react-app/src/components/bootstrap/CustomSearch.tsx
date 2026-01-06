import CustomInput from './CustomInput';
import * as React from "react";
import { customSearchProps } from "@/props/bootstrap/customSearch";
import { customInputProps } from "@/props/bootstrap/customInput";

type customAllProps = customSearchProps & customInputProps;

const CustomSearch = (props: customAllProps) => {
    return (
        <div className={props.customClassWrapperSearch || 'd-flex flex-column'}>
            <CustomInput
                idInput={props.idInput}
                label={props.label}
                typeInput={props.typeInput}
                customClassInput={props.customClassInput}
                customClassLabel={props.customClassLabel}
                customIconEye={props.customIconEye}
                required={props.required}
                showError={props.showError}
                errorEmail={props.errorEmail}
                onValueChange={props.onValueChange}
            />
            {props.children}
        </div>
    );
};

export default CustomSearch;
