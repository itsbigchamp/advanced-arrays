let studentNames = ['tommy','louis','barbie']

let teachers = [
{
    name: 'john',
    subjects:'arrays,javascript,mongodb'
},
{
    name: 'todd',
    subjects: 'arrays,javascript'
}
]

// sort()
// const sortedStudentNames = studentNames.sort();
// console.log(sortedStudentNames)

// filter()
const filteredStudentNames = studentNames.filter(
    // function (student) {
    //     return student == 'louis'
    // }
    // (student) => {
    //     return student === 'barbie'
    // }
    // (student) => student === 'tommy'
    (student) => true // dont do this
)
// console.log(filteredStudentNames)


// studentNames = studentNames.filter((student) => true)

// const tommy = studentNames.find((student) => student === 'tommy')
// console.log(tommy)

// const someTommy = studentNames.some((student) => student === 'tommy')
// console.log("Do we have at least a tommy?",someTommy )

// const everyTommy = studentNames.every((student) => student === 'tommy')
// console.log("Everyone's a tommy?",everyTommy )

// studentNames.forEach((student)  => {
//     console.log(student)
// })

// const justTheNames = teachers.map((teacher) => {
//     return teacher.name
// })
// console.log(justTheNames)

let numbers = [10,20,30]

let totals = numbers.reduce((accumulator, currentValue, index, array) =>{
    return accumulator + currentValue;
},0)
console.log(totals)

let total = 0
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]
}
console.log(total)

total = numbers.reduce((total,currentNumber) => total + currentNumber,0)
console.log(total)

