import React from 'react';
import { useAtom } from 'jotai';

import { contactSuccessState, contactErrorState } from '@/others/atoms';

import CustomAlert from '@/components/parts/CustomAlert';

const Notice = () => {
    const [successIsOpen, setSuccessIsOpen] = useAtom(contactSuccessState);
    const [errorIsOpen, setErrorIsOpen] = useAtom(contactErrorState);

    if (successIsOpen) {
        return (
            <CustomAlert
                status='success'
                title='お問い合わせを受け付けました'
                isOpen={successIsOpen}
                setIsOpen={setSuccessIsOpen}
            />
        );
    };

    if (errorIsOpen) {
        return (
            <CustomAlert
                status='error'
                title='入力内容をご確認ください'
                isOpen={errorIsOpen}
                setIsOpen={setErrorIsOpen}
            />
        );
    };

    return <div />
}

export default Notice;
