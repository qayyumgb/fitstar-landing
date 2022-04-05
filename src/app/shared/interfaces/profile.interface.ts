import { AccountTabEnum } from "../enum/profile.enum";

export interface IProfileInfo {
    message: string;
    myProfile: MyProfile;
}

export interface IProfileInfoResponse {
    message: string;
    profile: MyProfile;
}

export class MyProfile {
    contactUs: ContactUs;
    fullName: string;
    image: string;
    location: string;
    rating: number = 0;
    ratingComment: string;
    proAbout: ProAbout;
    modelAbout: ModelAbout;
    centerAbout: CenterAbout;
    gallery: any[];
    _id: string;
    role: string;
    activeRole: string;
    user: string;
    videos: IVideo[];
    portfolio: any[];
    ads: Adds[];
    createdAt: Date;
    updatedAt: Date;
}

export interface CenterAbout {
    openSince: number;
    fitnessCenterType: string;
    language: string[];
    specialities: string[];
    hoursOfOperation: number;
    accomplishments: string;
    ourFitnessPro: any[];
    ourStory: string;
    _id: string;
    productsRating: ProductRating[] | any[];
}


export interface ProductRating {
    product: string;
    review: string;
    starts: number;
}

export interface ContactUs {
    address: string;
    phoneNo: string;
    blogLink: string;
    facebookLink: string;
    instagramLink: string;
    twitterLink: string;
    youtubeLink: string;
    websiteLink: string;
    bookingLink: string;
    linkForLivePortal: string;
    vimeoLink: string;
    otherLink: string;
}

export interface ModelAbout {
    height: Eight;
    weight: Eight;
    name: string;
    profileUrl: string;
    gender: string;
    age: number;
    bodyType: string;
    ethnicity: string;
    skinTone: string;
    eyeColor: string;
    hairLength: number;
    tattoos: string;
    piercings: string;
    experience: string;
    languages: any[];
    workingWithMedia: boolean;
    modelingInterest: any[];
    compensation: string;
    noteAboutCompensation: string;
    activites: any[];
    aboutMe: string;
    _id: string;
    productsRating: any[];
}

export interface Eight {
    number: number;
    measurement: string;
}

export interface ProAbout {
    business: Business;
    qualifications: Qualifications;
    personal: Personal;
    _id: string;
}

export interface Business {
    name: string;
    clientPreference: string;
    availabilityForInHomeTraining: string;
    availabilityForOnLineliveTraining: string;
    trainingRates: number;
    noteAboutTrainingRates: string;
}

export interface Personal {
    height: Eight;
    weight: Eight;
    name: string;
    profileUrl: string;
    gender: string;
    age: number;
    dietType: string;
    bodyType: string;
    activites: any[];
    aboutMe: string;
    productsRating: any[];
    sponsorImages: any[];
}

export interface Qualifications {
    degree: string;
    professions: string;
    experience: string;
    certification: any[];
    specialities: number;
    languages: any[];
    trainingMethodsAndStyles: string;
    fitnessAward: any[];
}



export interface IProfileInfoUpdate {
    role: string;
    fullName?: string;
    image?: string;
    location?: string;
}

export interface IVideo {
    url: string;
    videoType: string;
    _id: string;
}

export interface ITabsItems {
    name: string;
    code: AccountTabEnum
}

export interface Adds {
    serviceTitle: null | string;
    interests: Interest[];
    compensation: string;
    sessionName: string;
    activities: null;
    intensityLevel: null;
    location: string;
    time: null;
    description: string;
    price: null;
    file: string;
    spotsAvailbe: null | string;
    _id: null;
}

export interface Interest {
    name: string;
    code: number;
}