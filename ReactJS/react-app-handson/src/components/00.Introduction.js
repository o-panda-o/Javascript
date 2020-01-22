/**
 * JSX: 
 *  + HTML + JS
 *  + JSX produces react elements.
 */


/**
 * Embedding expression in JSX
 */

//Embedding variable
const name='Bibhuti Bhusan';
const element=<h1>Hello {name} </h1>;

//Embedding functions
const user={
    firstName:'Bibhuti',
    lastName:'Panda',
    avatarUrl:'https://google.com'
};
formatName=(user)=>user.firstName+' '+user.lastName;
const formattedElement=<h1>Hello {formatName(user)}</h1>

/**
 * JSX is an expression too
 */
greetUser=(user)=>{
    if(user) 
        return <h1>Hello {user}</h1>;
    else
        return <h1>Hello Stranger</h1>
}

/**
 * Specifying attributes/children with JSX
 * 
 * NOTE: JSX is closer to Javascript than HTML, so ReactDOM uses camelcase for property
 *       naming convention instead of HTML attribute name like class->className, tabindex->tabIndex
 */
const userImageElement=<img src={user.avatarUrl} />

// JSX prevents injection attack
// JSX represents objects(Babel compiles them to "react element")

/**
 * Elements:
 *  + Elements are the smallest building block of react app
 *  + Rendering an element into a DOM is usually done by a single `root` DOM usually
 *  + Updating the rendered element:
 *      - React elements are immutable.
 *      - React only updates what's necessary. React DOM compares the element with its 
 *        previous one, and only applies the DOM updates necessary to bring the DOM to 
 *        desired state.
 */

 /**
  * Component and Props:
  *     + Components let you split the UI into independent, reusable piece, and think about each
  *       piece in isolation.
  *     + Conceptually, components are like Javascript functions. They accept arbitary inputs(called "props")
  *       and return React elements describing what should appear on screen.
  *     + NOTE: React treats components starting with lowecase letters as DOM tags.eg. div vs Welcome
  *     + All React components must act like pure functions with respect to their props.
  */
