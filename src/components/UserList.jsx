import React from 'react';
import UserInfo from "./UserInfo.jsx";

function UserList(props) {

    const  kisiler = [{
        name: 'İbrahim',
        email: 'ibrahim@gmail.com' ,
        programs:['Java','Python','C#','SQL'],
        age: 26
    },
        {
            name: 'Mehmet',
            email: 'mehmet@gmail.com' ,
            programs:['Java','Python',],
            age: 24
        },
        {
            name: 'Ahmet',
            email: 'ahmet@gmail.com' ,
            programs:['C#','SQL'],
            age: 23
        },

    ]
    return (
        <div>
            {kisiler.map((value, index) => (

                <UserInfo info={value}/>
            ))}
        </div>
    )


}

export default UserList;
