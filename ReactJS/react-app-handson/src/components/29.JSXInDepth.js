/**
 * JSX:
 *  - Fundamentally JSX provides a syntactic sugar for the
 *      React.createElement(component, props, ...children) function.
 * 
 *  - Specifying the react element type:
 *      + React must be in scope(i.e. imported or similar operation to be done)
 *      + User-Defined compoenets must be capitalized(if they are not then it is
 *        better to wrap them around a capitalized component or else it won't work)
 *      + Chosing the type at runtime, then use a capitalized compoenent, dynamic
 *        selection by using it directly from some props is not allowed.
 * 
 *  - Props in JSX:
 *      + JS expression as props could be passed
 *      + String literals could be passed
 *      + Props default to 'true'
 *      + Spread attributes could be used to pass the entire props
 * 
 *  - Children in JSX:
 *      + Javascript expressions can be passed as children
 *      + Function can be passed in children(say list rendering functions)
 *      + Booleans, Null, and undefined are ignored
 *      + 0 is not false inside children
 *      + If you want to display a falsy value then you have to convert them to string
 */


