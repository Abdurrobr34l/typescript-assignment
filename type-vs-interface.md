# Difference between Type and Interface in TypeScript

### Introduction
We use TypeScript for static type checking before runtime. We have keywords called Type and Interface in TypeScript which are actually used to define object shape. These keywords only exist in TypeScript.

###### • Type can be used for many things where as Interface is actually designed to define object shapes. Both of them have same code structure just one difference, see below code.
```
type name = {}
interface secName {}
```

###### • Type alias cannot be redeclared in same scope but Interface name can be because TypeScript allows declaration merging for Interface not Type.
```
type name = {}
type name = {} //Duplicate identifier name(error)

interface secName {}
interface secName {}
```

###### • In Interface we use extends(keyword) to inherit properties from one interface to another Interface, like this same happens in Types but using intersections(&).
```
type name = {
  name: string
}
type employ = name & {
  employed : string
}

const Employeee:employ = {
  name : "Abdur",
  employed : "yes"
}

console.log(Employeee); --> { name: 'Abdur', employed: 'yes' }

-------------------------------------------

interface student {
  name:string
}
interface topper extends student {
  result: string
}

const details:topper = {
  name: "Rob",
  result: "Pass"
}

console.log(details); --> { name: 'Rob', result: 'Pass' }
```

### Conclusion: 
Use Interface for defining object shape because we cannot do union(directly), primitive and tuple. We can do intersection in both Type and Interface. So use Type for most of the things where we cannot use Interface. Both are useful, and the choice depends on what you need to define.