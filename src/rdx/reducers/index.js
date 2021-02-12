const initState = {
    options:false,
    styles:false,
    vil:""
};


const rootReducer = (state = initState, action) => {

    // if(action.type === 'SET_STYLE'){
    //
    //     document.documentElement.style.backgroundColor=action.style.body;
    //
    //     return{
    //         ...state,
    //         style:action.style
    //     }
    // }
    //
    // if(action.type === 'TOGGLE_OPTIONS'){
    //
    //     return{
    //         ...state,
    //         options:!state.options,
    //         styles:false
    //     }
    // }
    //
    // if(action.type === 'TOGGLE_STYLES'){
    //
    //
    //     return{
    //         ...state,
    //         styles:!state.styles,
    //         options:false
    //     }
    // }

    return state;
};


export default rootReducer;