

export interface ISponsorEntity {
    status: boolean;
    message: string;
    totalRecord: number;
    sponsors: ISponsors[];
}

export interface ISponsors {
    image: string;
    active: boolean;
    isDeleted: boolean;
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}

