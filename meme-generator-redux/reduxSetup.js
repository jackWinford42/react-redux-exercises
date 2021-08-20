const INITIAL_STATE = { imgs: [] };
function addImgUrl(state = INITIAL_STATE, action, url = "") {
    switch (action.type) {
        case "INSERT":
            return { ...state, imgs: [...state.imgs, url] };
    
        default:
            return state;
    }
}

const store = Redux.createStore(addImgUrl);