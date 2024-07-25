import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

const options = [
    { value: Country.Australia, content: Country.Australia },
    { value: Country.US, content: Country.US },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Britain, content: Country.Britain },
    { value: Country.Italy, content: Country.Italy },
];

interface CountrySelectProps {
    value: string;
    onChange: (country: Country) => void;
    readonly?: boolean;
    className?: string;
}

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        value, onChange, readonly, className,
    } = props;
    const { t } = useTranslation();

    const onCountryChange = useCallback((value: string) => {
        onChange(value as Country);
    }, [onChange]);

    return (
        <Select
            className={className}
            label={t('currency')}
            onChange={onCountryChange}
            value={value}
            readonly={readonly}
            options={options} />
    );
});

CountrySelect.displayName = 'CountrySelect';
