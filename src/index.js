import "babel-polyfill";
import mod from "./foo";

/* eslint-disable no-console */
window.print = () => {
    console.log(`number: ${mod.foo(2)}`);
    console.log(mod.bar());
};