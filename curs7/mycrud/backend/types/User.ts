export interface BasicUser{
    id: number;
}
export interface User extends BasicUser{
    nume: string,
    prenume: string,
    datanastere:Date,
    email:string,
    telefon:string,
    dataadaugare:Date,
    actiune?:string
}
export interface UserWithDetails extends BasicUser, User{
    userID:number,
    user: User,
}