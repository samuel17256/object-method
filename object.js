//merging two objects
let personalInfo={
    firstName:'Nanbam',
    lastName:'Luka',
    age:20,
}

let contactInfo={
    email:'samuelnanbam@gmail.com'
}

let userProfile=Object.assign(personalInfo,contactInfo)

console.log(userProfile)