export interface customBadgeProps {
        idBadge: string,
        bsPrefixBadge?: string,
        bgBadge: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | undefined,
        pillBadge?: boolean,
        title: string,
        textBadge: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'white' | 'muted' | undefined
        customClassBadge: string
}