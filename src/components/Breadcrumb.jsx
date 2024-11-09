import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import PropTypes from 'prop-types';

function Breadcrumb({ items }) {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            {items.map((item, index) => (
                <Link
                    key={index}
                    underline="hover"
                    color={index === items.length - 1 ? 'text.primary' : 'inherit'}
                    href={item.href}
                    aria-current={index === items.length - 1 ? 'page' : undefined}
                >
                    {item.label}
                </Link>
            ))}
        </Breadcrumbs>
    );
}

Breadcrumb.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            href: PropTypes.string
        })
    ).isRequired
};

export default Breadcrumb;
