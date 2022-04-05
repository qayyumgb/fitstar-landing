export interface IAmbassadors {
    status: boolean;
    message: string;
    totalRecord: number;
    ambassador: IAmbassador[];
}

export interface IAmbassador {
    name: string;
    title: string;
    description: string;
    picture: string;
    facebook: string;
    youtube: string;
    tiwtter: string;
    active: boolean;
    isDeleted: boolean;
    _id: string;
    instagram: string;
    createdAt: Date;
    updatedAt: Date;
}

