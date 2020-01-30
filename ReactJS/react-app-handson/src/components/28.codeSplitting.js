import React, { Component, Suspense,lazy } from 'react'
import Loading from './28.loading';
const OtherComponent = React.lazy(()=>import('./28.otherComponent'));
const AnotherComponent = lazy(()=>import('./28.anotherComponent'));

export class CodeSplitting extends Component {

    constructor(props) {
        super(props)
        // One of the way of lazy loading in case of code splitting
        import('./28.math').then(math=>console.log(`Addition of 2 numbers lazily ${math.add(1,2)}`));
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                {/* 
                    - The lazy component should be rendered inside a `Suspense` component,
                    which allows us to show fallback content(such as loading indicator) 
                    while we're waiting for lazy component to load.

                    - The `fallback` prop accepts any React element you want to render while
                    waiting for the component to load.

                    - You can place the `Suspense` component anywhere above lazy component. You
                    can even wrap multiple lazy component with a single `Suspense` component.
                    
                */}
                <Suspense fallback={<Loading />}>
                    <OtherComponent />
                    <AnotherComponent />
                </Suspense>
            </div>
        )
    }
}

export default CodeSplitting

/**
 * Code-splitting:
 *  - It is a feature supported by bundlers like Webpack, Rollup and
 *    Browserify which can create multiple bundles that can be dynamically
 *    loaded at runtime.
 *  
 *  - Doing it help you 'lazy-load' just the things that are currently needed by
 *    the user, which can dramatically improve the performance of your app. While you
 *    haven't reduced the overall amount of code in your app, you've avoided loading
 *    code that the user may never need, and reduced the code needed during the initial
 *    load.
 * 
 * Named Exports:
 *  - React.lazy currently suppors only default exports. If the module you want to 
 *  import uses named exports, you can create an intermediate module that reexports it as 
 *  the default. This ensures that tree shaking keeps working and that you don’t pull in
 *  unused components
 * 
 *  // ManyComponents.js
 *  export const MyComponent = ...
 *  export const MyUnusedComponent = ...
 * 
 * // MyComponent.js
 * export { MyComponent as default } from "./ManyComponents.js";
 * 
 * // MyApp.js
 * import React, { lazy } from 'react';
 * const MyComponent = lazy(() => import("./MyComponent.js"));
 *  
 */

