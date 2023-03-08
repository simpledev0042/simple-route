import { GET } from "simple-route/src/RouteObject";
import { PUT } from "simple-route/src/RouteObject";
import { DELETE } from "simple-route/src/RouteObject";
import { POST } from "simple-route/src/RouteObject";
import { ALL } from "simple-route/src/RouteObject";
import { RouteObject } from "simple-route/src/RouteObject";
import { RouteObjectInterface } from "simple-route/types/RouteObject";
export class Route {
    static create({ path, middlewares, method, func, childs }: RouteObjectInterface): Route;
    constructor(route?: RouteObject);
    router: any;
    generate(routeObj?: RouteObject, cm?: any[], cr?: any[]): void;
    generateRoute(routes?: any[]): string;
    use(app: any, path?: string): void;
}
export { GET, POST, PUT, DELETE, ALL, RouteObject };
