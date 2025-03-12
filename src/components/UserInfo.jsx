import React from 'react';

function UserInfo({info}) {

    /*const email = props.email;
    const age = props.age;
    const programms = props.programms;
    const  name = props.name;*/

/*    const {name,age,email,programms} = props;*/

    return (
        <div>
            <h2>{name}</h2>
            <p><strong>Kişinin emaili : </strong>{info.email}</p>
            <p><strong>Kişinin Yaşı : </strong>{info.age}</p>

            <h3>Programlama Dilleri</h3>
            <ul>
                {
                    info.programs.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))
                }
            </ul>

            <hr/>
        </div>
    );
}

export default UserInfo;