export type option = {
    id: string,
    value: string,
    label: string,
}

export interface customSelectProps  {
    id: string,
    label: string,
    customClassLabel: string,
    ariaLabel: string
    option: option[],
    customClassOption: string,
    required: boolean,
    showError:boolean,
    customClassSelect: string,
    onValueChange?: (id: string, value: string, isValid: boolean) => void;
    onChange?: (value: (((prevState: string) => string) | string)) => void,
    onInputChange?: (id: string, value: string, isValid: boolean) => void;
}