/**
 * Express can be used in building:
 *  + REST APIs
 *  + Middlewares
 */
/**
 * Middleware:
 *  + It takes a request object and either returns response to the client 
 *    or passes control to another middleware function.
 *  + In Express, every route-handler function((req,res)=>{}) is a middleware
 *    function.
 *  + In the previous section we had:
 *          `Request` -> `JSON Middleware` -> `Route Middleware` -> `Response`
 */
/**
 * An Express Application is nothing but a bunch of middleware functions.
 */
/**
 * Every middleware function has internally req,res,next.
 * It processes the req and puts it into req.body and then
 * passes to the next middleware function.
 */
/**
 * helmet:
 *  + helps secure your app by setting various http headers
 */
/**
 * morgan:
 *  + used to log http requests
 *  + not good to enable all the time in production as it can hamper
 *    the performance. Better to enable in certain situation.
 */
/**
 * Installing debug package:
 *  + npm install debug
 */
