# Simple Route for node express

## Install

```
npm install simple-route
```

## Create Object

```
const { Route, GET, POST, PUT, DELETE, ALL } = require("simple-route");

const auth = (req, res, next) => {
    console.log("Auth middleware");
    return next()
}

const token = (req, res, next) => {
    console.log("Token middleware");
    return next()
}

const routes = route.create({
    path: "/user",
    middlewares: [auth],
    method: GET,
    func: (req, res) => { res.send("This is home page") },
    childs: [
        {
            path: ':userid',
            method: GET,
            middlewares: [token],
            func: (req, res) => {
                res.send(`userid is ${req.params.userid}`);
            }
        }
    ]
});

```

## Use

```
const express = require('express');
const app = express();
routes.use(app);
routes.use(app, "api");
```


#### http://localhost/user

#### Response
```
This is home page
```
### Console
```
Middleware Auth
```


#### http://localhost/user/simpledev0042

#### Response
```
userid is simpledev0042
```
### Console
```
Middleware Auth
Middleware token
```