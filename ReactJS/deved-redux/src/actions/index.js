export const increment=(count=0)=>{
    return{type:'INCREMENT',payload:count};
}

export const decrement=()=>{
    return{type:'DECREMENT'};
}