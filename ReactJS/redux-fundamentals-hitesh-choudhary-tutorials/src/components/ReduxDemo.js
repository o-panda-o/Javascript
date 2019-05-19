import React, { Component } from 'react'
import { createStore } from 'redux';

class ReduxDemo extends Component {
    render() {

        // Step 2: Create a reducer(state and action)
        const reducer=(state,action)=>{
            if(action.type==="ATTACK"){//The syntax is always *.type
                return action.payload;
            }
            if(action.type==="GREEN-ATTACK"){//The syntax is always *.type
                return action.payload;
            }
            return state;// reducer should never return undefined
        }

        // Step 1: Create a store(requires reducer and state)
        const store=createStore(reducer,"peace");        

        // Step 3: Subscribe
        store.subscribe(()=>{
            console.log("Store is now",store.getState());
        })

        // Step 4: Dispatch action
        store.dispatch({
            type: "ATTACK",//First item is always type
            payload: "Iron Man"
        });
        store.dispatch({
            type: "GREEN-ATTACK",//First item is always type
            payload: "Hulk"
        });
        return (
            <div>
                Test
            </div>
        )
    }
}

export default ReduxDemo

/**
 * Both step 2 and 4 are usually kept in different files, so things get confusing
 */