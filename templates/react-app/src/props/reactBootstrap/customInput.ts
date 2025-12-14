export interface customInputProps {
    idInput: string,
    label: string,
    typeInput: string | 'password' | 'text' | '',
    customClassInput: string,
    customClassLabel: string,
    customIconEye: string,
    required: boolean,
    showError: boolean,
    errorEmail: string,
    onValueChange?: (id: string, value: string, isValid: boolean) => void;
    onChange?: (value: (((prevState: string) => string) | string)) => void,
    onInputChange?: (id: string, value: string, isValid: boolean) => void;
}