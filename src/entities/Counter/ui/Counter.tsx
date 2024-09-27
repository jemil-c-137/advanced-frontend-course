import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useCounterValue();
    const { add, increment, decrement } = useActions();
    const { t } = useTranslation();

    const handleInc = () => {
        increment();
    };

    const handleDec = () => {
        decrement();
    };

    const handleFive = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                onClick={handleFive}
                data-testid="increment-btn5"
            >
                {t('add5')}
            </Button>
            <Button
                onClick={handleInc}
                data-testid="increment-btn"
            >
                {t('increment')}
            </Button>
            <Button
                onClick={handleDec}
                data-testid="decrement-btn"
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
