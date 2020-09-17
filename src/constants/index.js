export const FIRST = 1;
export const LAST = 5;

export let initialState = [];

for (let i = FIRST; i <= LAST; i++) {
  initialState = [...initialState, { num: i, cantidad: 0 }];
}
