import * as React from "react";
import CustomAvatar from "@/components/materialUI/CustomAvatar.js";


const Wellcome = () => {

    return (
        <>
            <div className="d-flex p-3 flex-column gap-3 w-100 justify-content-center align-items-center">
               <div className="d-flex flex-column w-50 gap-4">
                   <CustomAvatar idAvatar={''} srcAvatar={'https://picsum.photos/1024/480/?image=29'} altAvatar={'Remy Sharp'} />
               </div>
            </div>
        </>
    )
}

export default Wellcome