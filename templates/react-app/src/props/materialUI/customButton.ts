import * as React from 'react';
export interface CustomButtonProps {
    id: string,
    title: string,
    variant: 'text' | 'contained' | 'outlined',
    loading: boolean,
    loadingIndicator: string,
    size: 'sm' | 'lg'
    customClassBtn: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}