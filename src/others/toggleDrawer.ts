import React from 'react';

const toggleDrawer = (
        isOpen: boolean,
        setIsOpen:  (update?: React.SetStateAction<boolean>) => void | Promise<void>
    ) => (event: any) => {
    if (
        event && event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
        ) {
        return
    }

    setIsOpen(isOpen)
}

export default toggleDrawer;
