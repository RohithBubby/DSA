/*
debounce - https://www.youtube.com/watch?v=Zo-6_qx8uxg&ab_channel=AkshaySaini
throttling - https://www.youtube.com/watch?v=81NGEXAaa3Y&ab_channel=AkshaySaini
debounce vs throttling - https://www.youtube.com/watch?v=tJhA0DrH5co&ab_channel=AkshaySaini

article - https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf
*/

//Debounce ================
/*
    it triggers the api/function after certain amount of time once user stops their action.

    example/ best suited for implementing suggesting input field 
        - where API will be triggerd only when user stops for certain amount of time like "pausing", instead of calling on every character
*/

const debounce = (func, delay) => {
  let inDebounce;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};

//Throttle ====================
/*
    it triggers in intervals of specified delay
        best suited for buttons clicks, firing games etc.,
*/

const throttle = (func, delay) => {
  let flag = true;
  return function () {
    const context = this;
    const args = arguments;
    if (flag) {
      func.apply(context, args);
      flag = false;
      setTimeout(() => (flag = true), delay);
    }
  };
};
