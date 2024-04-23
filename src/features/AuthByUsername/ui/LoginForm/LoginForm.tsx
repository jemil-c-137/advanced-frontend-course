import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginActions } from '../../model/slice/loginSlice';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { getLoginState } from '../../model/selector/getLoginState';
import cls from './LoginForm.module.scss';

export const LoginForm = memo(() => {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

    const onUsernameChange = useCallback(
        (value: string) => {
            dispatch(loginActions.setUserName(value));
        },
        [dispatch],
    );

    const onPasswordChange = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={cls.loginForm}>
            <Text title={t('loginForm')} />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                value={username}
                autofocus
                onChange={onUsernameChange}
                type="text"
                placeholder={t('usernamePlaceholder')}
                className={cls.input} />
            <Input
                value={password}
                autoFocus
                onChange={onPasswordChange}
                type="text"
                placeholder={t('passwordPlaceholder')}
                className={cls.input} />
            <Button
                onClick={onLoginClick}
                className={cls.loginBtn}
                disabled={isLoading}>
                {t('login')}
            </Button>
        </div>
    );
});

LoginForm.displayName = 'LoginForm';
