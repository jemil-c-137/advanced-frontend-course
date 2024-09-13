import ListIcon from '@/shared/assets/icons/list.svg';
import GridIcon from '@/shared/assets/icons/grid.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '../../model/constants/constants';
import cls from './ArticlesViewSelector.module.scss';

const viewTypes = [
    {
        view: ArticleView.GRID,
        icon: GridIcon,
    },
    {
        view: ArticleView.LIST,
        icon: ListIcon,
    },
];

interface ArticlesViewSelectorProps {
    view?: ArticleView;
    onViewClick: (view: ArticleView) => void
}

export const ArticlesViewSelector = ({ view, onViewClick }: ArticlesViewSelectorProps) => {
    const onClick = (newView: ArticleView) => () => {
        onViewClick(newView);
    };

    return (
        <div>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    key={viewType.view}
                    onClick={onClick(viewType.view)}>
                    <Icon className={classNames('', { [cls.selected]: view === viewType.view })} Svg={viewType.icon} />
                </Button>
            ))}
        </div>
    );
};
