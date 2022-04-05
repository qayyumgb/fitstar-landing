
export interface IBlog {
    status: boolean;
    message: string;
    totalRecord: number;
    blogs: Blog[];
}

export interface Blog {
    title: string;
    description: string;
    featuredImageOne: string;
    featuredImageTwo: string;
    authorImage: string;
    videoLink: string;
    details: string;
    active: boolean;
    isDeleted: boolean;
    _id: string;
    authorName: string;
    category: string;
    createdAt: Date;
    updatedAt: Date;
}
