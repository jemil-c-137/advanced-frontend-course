import { User } from 'entities/User';

export enum ArticlesSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'created'
}

export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT'
}

interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType
}

export enum ArticleView {
    LIST = 'LIST',
    GRID = 'GRID',
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE
    code: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT
    paragraphs: string[]
    title?: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE
    src: string;
    title: string;
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECNOMICS = 'ECONOMICS'

}

export interface Article {
    id: string;
    user: User;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[]
    blocks: ArticleBlock[];
}
