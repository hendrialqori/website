interface article {
    title: string;
    highlight: string;
    created: string;
    tag: string;
    timeRead: string,
    slug: string
}

export interface ArticlesProps  {
    articles: article[]
}

export interface InputSearchProps {
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export interface ArticleCardProps extends article {
    size: 'card' | 'article'
  }


export interface SlugProps {
    data: article;
    content: any
}