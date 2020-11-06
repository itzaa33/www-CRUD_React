export enum TypeAction
{
    SET_ADDUSER = "SET_ADDUSER",
}


export type TypeProps = TypeUser[] | null

export type TypeUser = {
    id: string;
    title: string;
    name: string;
    lastname: string;
    birthday: number;
    nationality: string;
    citizenid: string;
    gender: string;
    phonenumber: string;
    passport: string;
    expectedsalary: string;
}