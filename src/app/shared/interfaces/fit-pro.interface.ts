import { MyProfile } from "./profile.interface";

export interface IFitPro {
    status: boolean;
    message: string;
    users: MyProfile[];
}

export interface IProfileId {
    status: boolean;
    message: string;
    profile: MyProfile;
}



export interface Ad {
    serviceTitle: string;
    interests: any[];
    compensation: string;
    sessionName: string;
    activities: null;
    days: any[];
    intensityLevel: string;
    location: string;
    time: string;
    description: string;
    price: number;
    file: string;
    spotsAvailbe: number;
    _id: string;
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
    membership: string;
    _id: string;
    productsRating: any[];
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

export interface Gallery {
    url: string;
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
    number: number | null;
    measurement: string;
}

export interface Portfolio {
    imageBefore: string;
    imageAfter: string;
    description: string;
    _id: string;
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
    age: number | null;
    dietType: string;
    bodyType: string;
    activites: Activite[];
    aboutMe: string;
    productsRating: ProductsRating[];
    sponsorImages: any[];
}

export interface Activite {
    name: string;
    code: string;
}

export interface ProductsRating {
    product: string;
    review: string;
    starts: number;
    _id: string;
}

export interface Qualifications {
    degree: string;
    professions: string;
    experience: string;
    certification: Activite[];
    specialities: number[];
    languages: Activite[];
    trainingMethodsAndStyles: string;
    fitnessAward: any[];
    productsRating: any[];
}

export interface Video {
    url: string;
    videoType: string;
    _id: string;
}
