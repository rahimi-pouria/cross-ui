export interface CustomInputProps {
    idInput: string
    title: string
    error: boolean,
    typeInput: string | 'password' | 'text' | '',
    variant: 'standard'| 'filled',
    customIconEye: string,
    placeholder: string,
    multiline: boolean,
    rows: number,
    defaultValue: string,
    helperText: string,
    required: boolean,
    showError: boolean,
    errorEmail: string,
    onValueChange?: (id: string, value: string, isValid: boolean) => void;
    onChange?: (value: (((prevState: string) => string) | string)) => void,
    onInputChange?: (id: string, value: string, isValid: boolean) => void;
}