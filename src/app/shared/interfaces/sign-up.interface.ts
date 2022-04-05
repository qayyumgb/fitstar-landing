export interface IRegister {
    fullName: string;
    email: string;
    password: string;
    role: string;
    location: string;
}

export interface IRegisterResponse {
    status: boolean;
    message: string;
}
