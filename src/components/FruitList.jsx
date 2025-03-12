import React, {useState} from 'react';



function FruitList(props) {

    const [fruits, setFruits] = useState(['Kivi','Mango','Üzüm']);
    const  [fruit, setFruit] = useState('');


    function handleSubmit(e){
        e.preventDefault();
        setFruits([...fruits,fruit])
        setFruit('')
    }
    return (
        <div>

            <form  onSubmit={handleSubmit}>
                <div>
                    <label >Meyve Adı</label>
                    <input

                        value={fruit}
                        onChange={(e)=> setFruit(e.target.value)}
                        type="text"/>
                </div>

                <div>
                    <button type={"submit"}>Ekle</button>
                </div>

            </form>


            <ul>
                {fruits.map((meyve,index)=>(
                    <li key={index}>{meyve}</li>
                ))}
            </ul>

        </div>
    );
}

export default FruitList;
