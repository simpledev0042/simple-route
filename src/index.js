var express = require('express');

const { GET, POST, PUT, DELETE, ALL, RouteObject } = require("./RouteObject")

class Route {
    router;
    constructor( route = new RouteObject()){
        this.router = express.Router();
        this.generate(
            route,
            [], 
            []
        );
    }

    static create({path = "", middlewares = [], method = GET, func = (req, res) => {}, childs = []}) {
        const obj = new Route(new RouteObject(path, middlewares, method, func, childs));
        return obj;
    }

    generate (routeObj = new RouteObject(), cm = [], cr = []) {
        routeObj.middlewares || (routeObj.middlewares = []);
        routeObj.childs || (routeObj.childs = []);
        const ms = [ ...cm, ...routeObj.middlewares ];
        const rs = [...cr, routeObj.path];
        const r = this.generateRoute( rs );
        console.log( r )
        switch (routeObj.method) {
            case GET:
                this.router.get(r, ...ms, routeObj.func);
                break;
            case POST:
                this.router.post(r, ...ms, routeObj.func);
                break;
            case PUT:
                this.router.put(r, ...ms, routeObj.func);
            case DELETE:
                router.delete(r, ...ms, routeObj.func);
            case ALL:
                this.router.all(r, ...ms, routeObj.func);
            default:
                break;
        }
        if( routeObj.childs ) {
            const nChilds = routeObj.childs.length;
            for( let i = 0; i < nChilds; i ++ ) {
                const child = routeObj.childs[i];
                this.generate(
                    child, 
                    ms,
                    rs
                );
            }
        }
        
    }

    generateRoute(routes = []) {
        let res = routes.join("/");
        while(res.indexOf("//") >= 0) res = res.replace("//", "/");
        return res;
    }

    use(app, path = "") {
        app.use(path, this.router);
    }
}

module.exports = { GET, POST, PUT, DELETE, ALL, RouteObject, Route };