import InstanceChecker from './instance-checker';
import Unicorn from './unicorn';


const emptyObject = {};
console.log(InstanceChecker.isUnicorn(emptyObject));

const myUnicorn = new Unicorn("Steve", ["green", "blue"]);
console.log(InstanceChecker.isUnicorn(myUnicorn));