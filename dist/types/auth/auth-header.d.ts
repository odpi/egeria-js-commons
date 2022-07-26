export declare function authHeader(): {
    "x-auth-token": string;
} | {
    "x-auth-token"?: undefined;
};
export declare function authHeaderWithContentType(): {
    "x-auth-token": string;
    "Content-Type": string;
    accept: string;
} | {
    "x-auth-token"?: undefined;
    "Content-Type"?: undefined;
    accept?: undefined;
};
