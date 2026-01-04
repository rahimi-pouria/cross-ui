import * as React from "react";
import CustomRadioButton from "@/components/bootstrap/CustomRadioButton.js";


const Wellcome = () => {

    return (
        <>
            <div className="d-flex p-3 flex-column gap-3">
                <CustomRadioButton idRadioButton={'radio'} typeRadioButton={'radio'} titleRadioButton={'title'}
                                   labelRadioButton={'group1'} reverseRadioButton={false} disabledRadioButton={false}
                                   inlineRadioButton={false} isValidRadioButton={false} isInvalidRadioButton={false}
                                   feedbackTooltipRadioButton={false} />
            </div>
        </>
    )
}

export default Wellcome