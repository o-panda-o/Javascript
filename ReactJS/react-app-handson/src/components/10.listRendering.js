import React from 'react'
import Person from './10.person';

function NameList() {
    const names=['Bibhuti','Bhusan','Panda','Bibhuti']
    // Using `index as key` is a very bad idea, sometime it creates serious troubles.
    // So it is better not to use them unless and until you don't have an option
    const nameList=names.map((name,index)=><h2 key={index}>{index} -- {name}</h2>);


    const persons = [
        {
          id: 1,
          name: 'Bruce',
          age: 30,
          skill: 'React'
        },
        {
          id: 2,
          name: 'Clark',
          age: 25,
          skill: 'Angular'
        },
        {
          id: 3,
          name: 'Diana',
          age: 28,
          skill: 'Vue'
        }
      ]
    // Adding key property value is important to avoid warnings. Also it is supposed
    // to something which is unique to that list. Also `key` prop is not accessible as
    // a prop in child component. It handles list iteration, addition and deletion 
    // using a key efficiently, or else it has to use brute force approach for all.
    const personList=persons.map(person => <Person key={person.id} person={person} />);
    return (
        <div>
            {/* 
            // Most non-sense way of looping
            <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> 
            */}

            {/*
            // Getting the logic out is one of the best way
            {
                names.map((name)=><h2>{name}</h2>)
            } 
            */}

            {
                personList
            }
            {
              nameList
            }
        </div>
    )
}

export default NameList

/**
 * Use index as key for the following scenarios:(Avoid it as much as possible)
 *  + The item of the list don't have a unique id
 *  + The list is static, i.e. it won't change
 *  + The list will never be reordered or filtered.
 */