const fs = require('fs')
let course_file = require('./files/data.json')
let passing_file = require('./files/passing.json')
// console.log(course_file)
// console.log(passing_file)
let course_data = course_file
let passing_data = passing_file

passing_data["sem9"] = 32;
passing_data["sem10"] = 32;

const writeData = (course_data)=>{
    fs.writeFile("./files/data.json",JSON.stringify(course_data),()=>{
        console.log("Done writing to data.json")
    })
} 

const writePassing = (passing_data) => {
    fs.writeFile("./files/passing.json",JSON.stringify(passing_data),()=>{
        console.log("Done writing to passing.json")
    })
}

writeData(course_data)
writePassing(passing_data)
