# TypeScript's Type Hierarchy: Working with any, unknown, and never

### Introduction
Type hierarchy in TypeScript it is like an family tree, where some types are at top and others at bottom. unknown is a top level type where never is at bottom level in hierarchy and any bypasses normal type checking.

### Type: any
I can assign any value to my variable and won't get any error, if i run this code into an if else condition where I might do something related to data type then i will see an error. Suppose if i run an string method it will crash in runtime.
```
type name = {
  name: any
}
const Employeee:name = {
  name : 54,
}
Employeee.name.toLocaleLowerCase();

console.log(Employeee);
```

```
type name = {
  name: any
}
const Employeee:name = {
  name : 54,
}

console.log(Employeee);

------------ Below example show why any is bad

if (typeof Employeee.name === "string") {
  console.log("It is an string")
} else {
  console.log("It is not an string");
}

result --> It is not an string
```

### Type: unknown
When we call an API we are not sure what data type we will receive. If we try to run a string method on data the TypeScript will make me check its type first as shown in the example below.
```
type api = {
  data: unknown
  status : unknown
}
const fetchApi:api = {
  data : 45,
  status : "yes"
}
fetchApi.data.toLocaleLowerCase() --> fetchApi.data is of type unknown

console.log(fetchApi);
```
### Type: never
We have some function which might return error or never finished normally. Like returns an infinite value or error.

```
const infinitvalue = (num: number): never => {
  for (let i = num; ; i++) {
    console.log(i);
  }
};

console.log(infinitvalue(45));
```

### Why unknown is preferred instead of any? and Conclusion
TypeScript does not stop you when you use a type any value but it stops when you use an unknown type. Before using an unknown type value we need to check the type first or else we will face the error before runtime. In case of type any, we face the error during runtime.

Use unknown type instead of any because you don't know the data type of the value you get, but you need to check its data type before calling a method on it because TypeScript will show you an error message to do a type checking first then apply your desired method in it, all this happens before runtime and on the go which helps you to fix error on the go.