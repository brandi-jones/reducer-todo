
//initial state
export const initialNotes = 
    [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Learn about Redux',
            completed: false,
            id: 2324544636
        }
    ]
;



export const reducer = (state, action) => {
    console.log("in reducer, state:", state)
    switch (action.type) {
        case 'ADD_ITEM':
            const newItem = {
                item: action.payload,
                completed: false,
                id: Date.now()
            };
            return [
                ...state,
                newItem
            ];
        case 'TOGGLE_COMPLETE':
            const newTodoList = state.map(item => {
                if (item.id === action.payload) { //if item id we are mapping over, is === to the ID we sent over of the clicked item
                    //toggle complete
                    return {
                        ...item, 
                        completed: !item.completed
                    }
                } 
                else {
                    return item;
                }
            })
            return (
                newTodoList
            )
        case 'CLEAR_COMPLETE':
            const newToDoList = state.filter(item => item.completed === false)
            return (
                newToDoList
            )
        
        default: 
            return state;
    }
};