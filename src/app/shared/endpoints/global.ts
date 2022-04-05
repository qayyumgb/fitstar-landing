import { environment } from 'src/environments/environment';

export const API_URL: string = environment.api_url;
export const API_ENDPOINTS = {

    //auth
    loginIn: `${API_URL}auth/signin`,
    signUp: `${API_URL}auth/signup`,

    // Landing 
    getLandingPage: `${API_URL}landing/get/`,

    // sponsor
    sponsorList: `${API_URL}sponsors/get/`,

    // ambassador
    ambassadorList: `${API_URL}ambassadors/get/`,

    // blog
    blogList: `${API_URL}blogs/get/`,


    // profile
    profileInfo: `${API_URL}users/my/profile`,
    updateProfile: `${API_URL}users/profile/update/basic/info`,
    profileById: `${API_URL}users/get/profile/`,


    // Fitness pro
    fitnessPro: `${API_URL}users/get/pro`,
    fitnessDir: `${API_URL}users/get/ `,
    fitnessDirFilter: `${API_URL}users/fitstars/list`,




}