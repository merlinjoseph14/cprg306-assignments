import StudentComp from "./student-component";
import StudentObjComp from "./student-obj-component";


export default function PROPOSpAGE() {

    return 

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

    let studentTwo = {
        studentName: "Alice",
        studentAge: 23,
        address: {
            city: "Edmonton",
            province: "AB"
        }
    };

    return (
        //<StudentComp/> = sefl-terminating component 
        //<main className="p-5"> = styling
        <main className="p-5"> 
            <StudentComp
            sName={studentOne.studentName}
            sAge={studentOne.studentAge}
            sCity={studentOne.address.city}
            sProvince={studentOne.address.province}
            />
            <StudentObjComp studentObj={studentOne}/>
            <StudentObjComp studentObj={studentTwo}/>
            <StudentComp sName="Kevin" sAge="28" cCity="Lethbridge" sProvince="AB"/> 
            
        </main>
    );
}