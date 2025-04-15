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

let keys=Object.keys(userProfile)
// console.log(keys)
let values=Object.values(userProfile)
// console.log(values)


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
