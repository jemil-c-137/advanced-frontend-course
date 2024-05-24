import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { getLoginPassword } from '../../model/selector/getLoginPassword';
import { getLoginUsername } from '../../model/selector/getLoginUsername';
import { getLoginIsLoading } from '../../model/selector/getLoginIsLoading';
import { getLoginError } from '../../model/selector/getLoginError';
import cls from './LoginForm.module.scss';

const initialReducers: ReducerList = {
    loginForm: loginReducer,
};

const LoginForm = memo(() => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

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
        // eslint-disable-next-line i18next/no-literal-string
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
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
        </DynamicModuleLoader>
    );
});

LoginForm.displayName = 'LoginForm';

export default LoginForm;
