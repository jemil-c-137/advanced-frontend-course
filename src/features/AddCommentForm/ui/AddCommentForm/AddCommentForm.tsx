import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '@/features/AddCommentForm/model/slice/addCommentFormSlice';
import {
    getAddCommentFormText,
    getAddCommentFormError,
} from '@/features/AddCommentForm/model/selectors/addCommentFormSelectors';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { HStack } from '@/shared/ui/Stack';
import cls from './AddCommentForm.module.scss';

const reducer: ReducerList = {
    addCommentForm: addCommentFormReducer,
};

interface AddCommentFormProps {
    onSendComment: (text: string) => void
}

const AddCommentForm = memo(({ onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text);
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    if (error) {
        return <div>{t('serverError')}</div>;
    }

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <HStack data-testid="AddCommentForm" justify="between" max className={cls.addCommentForm}>
                <Input
                    data-testid="AddCommentForm.Input"
                    placeholder={t('addCommentText')}
                    value={text}
                    onChange={onCommentTextChange} />
                <Button
                    data-testid="AddCommentForm.Button"
                    onClick={onSendHandler}
                    theme={ButtonTheme.OUTLINE}>
                    {t('sendComment')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
});

AddCommentForm.displayName = 'AddCommentForm';

export default AddCommentForm;
