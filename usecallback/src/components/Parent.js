import React, {useState, useCallback} from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function Parent() {
    const [age, setAge] = useState(20);
    const [salary, setSalary] = useState(1000)

    const incrementAge = () => {
        setAge(age + 1);
    };

    const incrementSalary = () => {
        setSalary(salary + 500);
    };

    // const incrementAge = useCallback(() => {
    //     setAge(age + 1);
    // }, [age]);
  
    // const incrementSalary = useCallback(() => {
    //     setSalary(salary + 500);
    // }, [salary])

    return (
        <div>
            <Title />
            <Count text="Age" count={age}/>
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count={salary}/>
            <Button handleClick={incrementSalary} >Increment Salary</Button>
        </div>
    )
}

export default Parent
