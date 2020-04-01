/*
const r1 = (state, payload, initialState) => {};
const r2 = (state, payload, initialState) => {};

 export default (state = {}, { type, payload }) =>
  Reducer.of(state, payload, initialState)
    .switch(type)
    .case('value 1', r1)
    .case('value 2', r2)
    .defualt(state);
 */
export default function(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}
