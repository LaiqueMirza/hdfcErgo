const initialState = [];

const checkedBank = (state = initialState, action) => {
    switch(action.type){
        case 'CHECKED': {
            return action.payload
        };
        default:
            return state;
    }
}
export default checkedBank;