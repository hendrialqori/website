// Home page
interface article {
    id: number;
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
    value: string;
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export interface ArticleCardProps extends article {
    size: 'small' | 'medium' | 'large'
  }

// Slug page
export interface SlugProps {
    data: article;
    content: any
}

// Portfolio page
export interface ProjectTypes {
    id: number;
    avatar: string;
    title: string;
    stack: string[];
    desc: string;
    link: {
        github: string;
        demo: string;
    }
}

export interface LinkProps {
    activeSlug?: boolean
    children: string
    href: string
}