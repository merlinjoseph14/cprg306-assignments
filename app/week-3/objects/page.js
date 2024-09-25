//CTRL + ? = comments out line

export default function ObjectsPage() {
    
//declaring a variable, {} = tells 'js that its gonna be an object, everythign inside {} are attributes
let studentOne = {
    studentName: "Melissa",
    studentAge: 21,
    hasGraduated: false, //boolean value
    schedule: ["CPRG123", "CPRG456", "CPRG789", "CPRG306"], //[] = an array
    address: {
        street: "123 main st.",
        city: "Calgary",
        province: "AB",
    },
        //is an object inside of an object
};

let {
    studentName,
    studentAge: age, //changing the variable but still retains the same value
    //schedule:[course1, course2, course3, webDev2]
    // schedule:[,,,webDev2] //, = represents index spaces in the index
    schedule:{3:webDev2},
    address: {city},
} = studentOne;


    return (
        // Dot Notation to access attribues/properties
        //studentOne. = accessing the object frist
        //[] arrays indexs start at 0
        //{studentOne.address.city} = accessing an attribute inside of object inside another object
        <main>
            <h1>Objects</h1>
            <h2>Dot Notation</h2> 
            <p>Name: {studentOne.studentName}</p> (/* /*)
            <p>Age: {studentOne.studentAge}</p>
            <p>Web Dev 2: {studentOne.schedule[3]}</p> 
            <p>City: {studentOne.address.city}</p> 
            <h2>Destructuring</h2>
            <p>Name: {studentName}</p>
            <p>Age: {age}</p>
            <p>Web Dev 2: {webDev2}</p>
            <p>City: {city}</p>
        </main>
    );
}