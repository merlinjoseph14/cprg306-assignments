

export default function StudentObjComp({studentObj}){

    //destructuring =renaming but same value
    let {
        studentName:name,
        studentAge:age,
        address: {city, province:prv}
    } = studentObj;

    //mx = margin on x axis, my = margin on y axis, mr = margin on right side
    return (
        <div className="bg-green-500 border border-red-500 mb-5">
            <h3 className="text-2xl font-bold">{name}</h3>
            <p>Age: {age}</p>
            <p>{city}, {prv}</p>
        </div>
    );

}