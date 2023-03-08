export const POTS: "POST";
export const GET: "GET";
export const PUT: "PUT";
export const DELETE: "DELETE";
export const ALL: "ALL";

type MiddleWare = (req: any, res: any, next: any) => any;

export interface RouteObjectInterface {
    path?: string;
    middlewares?: MiddleWare[];
    method?: "GET" | "POST" | "PUT" | "DELETE" | "ALL";
    func?: (req: any, res: any) => any;
    childs?: RouteObjectInterface[]
}

export class RouteObject {
    constructor(path?: string, middlewares?: any[], method?: string, func?: (req: any, res: any) => void, childs?: RouteObject[]);
    path: string;
    middlewares: any[];
    method: string;
    func: (req: any, res: any) => void;
    childs: RouteObject[];
}
