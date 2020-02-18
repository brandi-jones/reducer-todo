
//initial state
export const initialNotes = {
    todos: [
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
};



export const reducer = (state, action) => {
    switch (action.type) {



        default: 
            return state;
    }
};