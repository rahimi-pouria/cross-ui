export interface customProgressBarProps {
    idProgressbar: string,
    nowProgressbar: number,
    labelProgressbar: string,
    visuallyHiddenProgressBar: boolean,
    variantProgressbar: 'success' | 'danger' | 'warning' | 'info' | string | undefined,
    stripedProgressbar: boolean,
    animatedProgressbar: boolean,
    minProgressbar: number,
    maxProgressbar: number,
}