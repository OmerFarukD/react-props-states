import React, {useState} from 'react';

function Input(props) {
    
    const  [number1,setNumber1]= useState(0);
    const  [number2,setNumber2]= useState(0);
    const [sum, setSum] = useState(0);

    function  handleOnChange(e){
        if (e.target.name==="number1"){
            setNumber1(e.target.value);
        }

        if (e.target.name==="number2"){
            setNumber2(e.target.value);
        }
    }


    function  handleSubmit(e){


        e.preventDefault();
        setSum(Number(number1)+ Number(number2));
    }

    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label> Sayı 1 </label>
                <input
                    name="number1"
                    onChange={handleOnChange} type="number"/>
            </div>


            <div>
                <label> Sayı 2 </label>
                <input
                    name="number2"
                    onChange={handleOnChange}
                    type="number"/>
            </div>

            <div>
                <label>Sonuç : </label>
                <input value={sum} type="text" readOnly/>
            </div>
            <div>
                <button type={"submit"} style={{color:"red",background:"yellow"}}>Hesapla</button>
            </div>

            <p>sayı1 : {number1}, sayı2: {number2}</p>
        </form>
    );
}

export default Input;