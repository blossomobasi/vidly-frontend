export interface LoginInput {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
}

export interface RegisterInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: "user" | "admin";
    date: string;
}
export interface UserResponse {
    status: string;
    data: IUser[];
}
