import React from 'react';

const Notification = ({active, value}) => {
    const style = `notification ${active && "show"}`;

    return(<div className={style}>{value}</div>);
}

export default Notification;