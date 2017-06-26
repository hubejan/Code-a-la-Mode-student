/* Dependencies */


/* Initial State */
const initialState = {
  code: { source: 'INITIAL SOURCE CODE!!! INITIAL SOURCE CODE!!! INITIAL SOURCE CODE!!!'},
  snapshots: { list: [],
               selected: {}, 
             },
};

/* Reducer Function */
export default (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    default:
        return newState;
  }
  return newState;
}
