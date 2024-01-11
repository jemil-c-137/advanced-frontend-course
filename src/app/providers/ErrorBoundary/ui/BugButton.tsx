/* eslint-disable i18next/no-literal-string */
import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

export const BugButton = () => {
    const [error, setError] = useState(false);

    const throwError = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error('BugButton caused error for dev');
        }
    }, [error]);

    return (
        <div>
            <Button onClick={() => throwError()}>throw error</Button>
        </div>
    );
};
