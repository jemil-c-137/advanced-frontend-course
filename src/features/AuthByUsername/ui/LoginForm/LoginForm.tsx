import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

export const LoginForm = () => {
    const { t } = useTranslation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onUsernameChange = (value: string) => {
        setUsername(value);
    };

    const onPasswordChange = (value: string) => {
        setPassword(value);
    };

    return (
        <div className={cls.loginForm}>
            <Input
                value={username}
                autofocus
                onChange={onUsernameChange}
                type="text"
                placeholder={t('usernamePlaceholder')}
                className={cls.input}
            />
            <Input
                value={password}
                autoFocus
                onChange={onPasswordChange}
                type="text"
                placeholder={t('passwordPlaceholder')}
                className={cls.input}
            />
            <Button className={cls.loginBtn}>{t('login')}</Button>
        </div>
    );
};
