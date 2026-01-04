import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { customBreadcrumbsProps } from "../../props/bootstrap/customBreadcrumbs";
import { Link } from 'react-router-dom';

const CustomBreadcrumbs = (props: customBreadcrumbsProps) => {
    return (
        <>
            <Breadcrumb className={props.customClassWrapperBreadcrumb}>
                {props.itemBreadcrumbs &&
                    props.itemBreadcrumbs.map((item) => (
                        <Breadcrumb.Item className={props.customClassBreadcrumbItem} key={item.id}>
                            <Link className={props.customClassBreadcrumbLink} to={item.href}>{item.title}</Link>
                        </Breadcrumb.Item>
                    ))}
            </Breadcrumb>
        </>
    )
}

export default CustomBreadcrumbs;