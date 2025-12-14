import Swal from "sweetalert2";
import { PostRequest } from "@/utility/api.ts";

type alertType = "success" | "warning" | "error" | "info" | "question";

export async function showAlert(type: alertType, message: string, confirmedAction?: Function, confirmBtnText: string = 'Ok', showCancelBtn: boolean = false, cancelBtnText: string = 'No'): Promise<void> {
    await Swal.fire({
        icon: type,
        text: message,
        confirmButtonText: confirmBtnText,
        showCancelButton: showCancelBtn,
        cancelButtonText: cancelBtnText,
        buttonsStyling: !1,
        padding: '2rem',
        heightAuto: false,
        allowEnterKey: false,
        scrollbarPadding: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
        customClass: {confirmButton: 'btn btn-primary', cancelButton: 'btn btn-active-light'}
    }).then(async (result) => {
        if (confirmedAction && result.isConfirmed)
            await confirmedAction()
    })
}

export const  showSuccessAlert = async(confirmAction: Function, successMessage: string = 'DoneSuccessfully'): Promise<void> => {
    return showAlert('success', successMessage, async () => {
        await confirmAction()
    })
}

export const showWarningAlert = async (warningMessage: string, confirmAction: Function, confirmBtnText: string = 'Yes'):Promise<void> => {
    return showAlert('warning', warningMessage, async () => {
        await confirmAction()
    }, confirmBtnText, true)
}

export const showErrorAlert = async (errorMessage: string, confirmAction?: Function): Promise<void> => {
    return showAlert('error', errorMessage, async () => {
        if(confirmAction){
            await confirmAction()
        }
    })
}

export const showCancelAlert = async (confirmAction: Function): Promise<void> => {
    return showAlert('warning', 'AreYouSureCancel', async () => {
            await confirmAction()
    }, 'YesCancel', true)
}

export const showConfirmDeleteAlert = (deleteApi: string, bodyParams: object, getterFunction: Function): Promise<void> => {
    return showAlert('warning', 'AreYouSureDelete', async () =>{
        const data = await PostRequest(deleteApi, {
            ...bodyParams
        })
        if(!data || !data.message.success)
            return
        await getterFunction()
    }, 'YesDelete', true)
}