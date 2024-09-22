import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Input } from '@/shared/ui/Input/Input';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onAccept,
        onCancel,
        rate = 0,
    } = props;

    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [setIsModalOpen, hasFeedback, onAccept]);

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [starsCount, feedback, onAccept]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [starsCount, onCancel]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input value={feedback} onChange={setFeedback} placeholder={t('feedback')} />
        </>
    );

    return (
        <Card max>
            <VStack max>
                <Text title={title} />
                <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack>
                        {modalContent}
                        <HStack max justify="between">
                            <Button onClick={acceptHandler}>
                                {t('Send')}
                            </Button>

                            <Button onClick={cancelHandler} theme={ButtonTheme.OUTLINE}>
                                {t('cancel')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} lazy>
                    <VStack>
                        {modalContent}
                        <Button onClick={acceptHandler}>
                            {t('Send')}
                        </Button>

                        <Button onClick={cancelHandler} theme={ButtonTheme.OUTLINE}>
                            {t('cancel')}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});

RatingCard.displayName = 'RatingCard';
