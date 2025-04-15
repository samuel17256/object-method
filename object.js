//1:merging two objects
let personalInfo={
    firstName:'Nanbam',
    lastName:'Luka',
    age:20,
}

let contactInfo={
    email:'samuelnanbam@gmail.com'
}

let userProfile=Object.assign(personalInfo,contactInfo)
// console.log(userProfile)

//2:printing the keys and values
let product={
    product1:'melon',
    product2:'garri',
    product3:'sugar'
}
let keys=Object.keys(product)
console.log('keys', keys)
let values=Object.values(product)
console.log('values', values)


//3:creating settings
let settings={
    theme:'Dark',
    notifications:true,
}
Object.freeze(settings)

if(Object.isFrozen(settings)){
    console.log('settings is frozen')
}else{
  settings.theme='white';
}
console.log(Object.isFrozen(settings))
