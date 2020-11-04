export enum TypeAction
{
    SET_ADDUSER = "SET_ADDUSER",
    RESET_ADDUSER = "RESET_ADDUSER"
}


export type TypeProps = {
    title: string;
    name: string;
    lastname: string;
    birthday: number;
    nationality: string;
    citizenid: string;
    gender: string;
    passport: string;
    expectedsalary: number;
}