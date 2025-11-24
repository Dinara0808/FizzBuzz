//
let students = ["Ali, Vali, Guli"];

//royxatni oxirina ele qoshadi
students. push('Gani')
console.log(students)
//oxirgi ele olib tashlidi
students.pop()
console.log(students)
// aldina ele qoshadi
students.unshift('Sanjar')
console.log(students)
// aldindagi ele olib tashladi
students.shift()
console.log (students)

students[1] = 'Avaz'
console.log (students)

let fIsm = prompt('Ism kiriting:')
let dogriIsm = fIsm.slice(0,1).toUpperCase() +  fIsm.slice(1).toLocaleLowerCase()
// true  / false
if(students.includes(dogriIsm)){
    alert('Royhatda bor')

} else{
    alert('Royhatda yoq')
}
// Prompt orqali raqam sorab olamiz
let raqam = prompt('Raqam kiriting:')
// 15a bolinsa Fizzbuzz, 5 bolinsa Buzz, 3 bolinsa Fizz
if (raqam % 15 ==0){
    alert('Fizzbuzz')
}else if(raqam % 5 ==0){
    alert('Buzz')
}else if(raqam % 3 ==0){
    alert('Fizz')
}else{
    alert(raqam)
    // 3siga ham bolinmasa sonni ozini chiqaramiz
}
// Alertda chiqqan javobni chiqarib baramiz