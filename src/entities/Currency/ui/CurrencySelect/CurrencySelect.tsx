import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

const options = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

interface CurrencySelectProps {
    value: string;
    onChange: (currency: Currency) => void;
    readonly?: boolean;
    className?: string;
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        value, onChange, readonly, className,
    } = props;
    const { t } = useTranslation();

    const onCurrencyChange = useCallback((value: string) => {
        onChange(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={className}
            label={t('currency')}
            onChange={onCurrencyChange}
            value={value}
            readonly={readonly}
            options={options} />
    );
});

CurrencySelect.displayName = 'CurrencySelect';
