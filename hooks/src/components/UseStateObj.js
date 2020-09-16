import React, {useState} from 'react'

function UseStateObj() {
    const [person, setPerson] = useState({firstName: 'Alessio', lastName: "Canestrelli"})
    return (
        <div>
            {/* <input type="text" value={person.firstName} onChange={(e) => setPerson({firstName: e.target.value})}/>
            <input type="text" value={person.lastName} onChange={(e) => setPerson({lastName: e.target.value})}/> */}
            <input type="text" value={person.firstName} onChange={(e) => setPerson({...person, firstName: e.target.value})}/>
            <input type="text" value={person.lastName} onChange={(e) => setPerson({...person, lastName: e.target.value})}/>
            <p>{JSON.stringify(person)}</p>
        </div>
    )
}

export default UseStateObj
