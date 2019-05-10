/**
 * Note: LifeCycle methods are only present in class components, not in functional ones
 * 
 * Lifecycle methods:
 *  + Mounting(constructor, getDerivedStateFromProps(static), render & componentDidMount)
 *  + Updating(getDerivedStateFromProps(static), shouldComponentUpdate, render, getSnapshotBeforeUpdate & componentDidUpdate)
 *  + Unmounting(componentWillUnmount)
 *  + Error Handling(getDerivedStateFromError(static),componentDidCatch)
 */

/**
 * Mounting:
 *  + constructor(props):
 *      - A special function that will be called whenever a new component is created.
 *      - Initializing state
 *      - Binding event handlers
 *      - Do not cause side effects in constructor by various actions. e.g. HTTP Request
 *      - While writing user defined constructors, take care of the following:
 *          ~ super(props) -- it'll call the base class constructor, and this.props can only be used after it
 *          ~ Directly override this.state -- constructor is the only place where you can direcly override 
 *            this.state without causing error, or else in other place you have to use this.setState etc. without
 *            causing any side effects like making Ajax calls.
 *  + static getDerivedState(props,state): 
 *      - It is a rarely used lifecycle method.
 *      - It is used when state of the component depends on changes in props over time.
 *      - As it is a static method so it doesn't have access to this keyword. So we have to return an object 
 *        that represents new state of the component. 
 *      - Side effects could be caused by fetching data from endpoints, etc. 
 *  + render():
 *      - It is the only required method in class component. We just read this.props and this.state and return
 *        the JSX that defines the UI.
 *      - It is a pure function, for the given props and state it should always return the same UI
 *      - Do not change state or interact with DOM or make Ajax calls. 
 *      - Children component lifecycle methods are also executed. 
 *  + componentDidMount():
 *      - This method will be called only once in whole lifecycle of a component.
 *      - It is invoked immediately after a component and all its children component have been rendered to DOM.
 *      - It is a prefect place to cause side effects: Ex: interact with the DOM, or perform any Ajax calls to load data 
 */

/**
 * Updating:(components being rendered either being changes for props or states)
 *  + static getDerivedStateFromProps(props,state): 
 *      - Returns null or object representing current state of the compoenent.
 *      - Method is called every time a component is re-rendered.
 *      - It is used when the state depends on props of the component.
 *      - Side effects could be caused by fetching data from endpoints, etc. 
 *      - One of the rarely used method in updating
 *  + shouldComponentUpdate(nextProps, nextState):
 *      - Get the updated props and decides if a methods should be re-rendered or not
 *      - By default a class component renders when state is changed but this method could prevent that if coded
 *        accordingly.
 *      - It is generally used for performance optimization
 *      - We should avoid side effects by getting API calls etc. inside the same
 *      - It is also a rarely used lifecycle method
 *  + render():
 *      - Only required method
 *      - Read props and state and return JSX
 *      - Avoid changing the state or interacting with DOM or make Ajax calls while doing the same
 *  + getSnapshotBeforeUpdate(prevProp,prevState):
 *      - Called right before the changes from the virutal DOM are to be reflected in the DOM
 *      - Rarely used methods.
 *      - Used to capture some information before updating the DOM(like get scroll positiona and update the same
 *        after some calculations)
 *      - Method will either return null or a return value. Retured value will be passed as the third parameter
 *        to the next below method.
 *  + componentDidUpdate(prevProp,prevState,snapshot):
 *      - This method will be called after the render is finished after the re-render cycles
 *      - Guranteed to called once in each re-render cycle
 *      - Can cause side effects. Can make Ajax calls without any issue. 
 */

/**
 * Unmounting:
 *  + componentWillUnmount():
 *      - Method is invoked immediately before a component is unmounted and destroyed.
 *      - Can do cleanup tasks here like: cancelling any network request, removing event handler, cancelling any
 *        subscriptions and also invalidating timers.
 *      - Do not call setState method(as the component is not re-rendered after it is unmounted)
 */

/**
 * Error handling:
 *  + getDerivedStateFromError(static),componentDidCatch are the methods in it
 *  + When there is an error either during rendering, in a lifecycle method, or in the constructor of any child
 *    component.
 */