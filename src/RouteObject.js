const POTS = "POST";
const GET = "GET";
const PUT = "PUT";
const DELETE = "DELETE";
const ALL = "ALL";

class RouteObject {
    path;
    middlewares;
    method;
    func;
    childs;
    constructor (path = "", middlewares = [], method = GET, func = (req, res) => {}, childs = []) {
        this.path = path;
        this.middlewares = middlewares;
        this.method = method;
        this.func = func;
        this.childs = childs;
    }
}

module.exports = {
    POTS,
    GET,
    PUT, 
    DELETE,
    ALL,
    RouteObject
}