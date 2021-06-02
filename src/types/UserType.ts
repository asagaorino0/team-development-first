export type MondaiType = {
    id: number,
    name: string,
    url: string,
    isStart: boolean,
}
export type UsersType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address_street: string,
    address_suite: string,
    address_city: string,
    address_zipcode: string,
    geo_lat: string,
    geo_lng: string,
    geo_phone: string,
    geo_website: string,
    company_name: string,
    company_catchPhrase: string,
    company_bs: string,
}
export type UserType = {
    id: string;
    name: string;
    nameH: string;
    displayName: string;
    age: number;
    isLive: boolean;
}
export type counter = {
    count: number;
}
export type CpuType = {
    cpu: string;
}
