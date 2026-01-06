import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const CustomBadge = () => {
    return (
        <>
            <Badge badgeContent={4} color="primary">
                <MailIcon color="action" />
            </Badge>
        </>
    )
}

export default CustomBadge;