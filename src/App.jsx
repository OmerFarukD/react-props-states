import './App.css'
import List1 from "./components/List1.jsx";
import List2 from "./components/List2.jsx";
import List3 from "./components/List3.jsx";
import List from "./components/List.jsx";
import UserInfo from "./components/UserInfo.jsx";
import UserList from "./components/UserList.jsx";
import StateManagement from "./components/StateManagment.jsx";
import Counter from "./components/Counter.jsx";
import Input from "./components/Input.jsx";
import FruitList from "./components/FruitList.jsx";

// parent component
function App() {

  const  takim3 = ["Esmanur Akdoğan",'Elif Okur','Beyzanur Kaymak']
  const kisiler = ['Yunus Emre Cinbolat','Doğukan Bayazıt','Eda Esen','Senanur Yurdakul','Özlem Arslan']
  const takim2 = ['Ahmet Hakan Albayrak','Emre Işık','Eren Genç']
  const  sehirler = ['Tunceli','Malatya','Elazığ','Bingöl']

 /*   const  kisi_adi = 'İbrahim'
    const kisi_email = 'ibrahim@gmail.com'
    const kisi_programalama_dilleri = ['Java','Python','C#','SQL']
    const  kisi_yas = 26*/

    const  kisi = {
      name: 'İbrahim',
      email: 'ibrahim@gmail.com' ,
      programs:['Java','Python','C#','SQL'],
      age: 26
    }



  return (
    <div style={{margin:"0px"}}>

{/*      <h2>Parlayan Yıldızlar takımı : </h2>
      <List members ={kisiler}/>


      <h2>Haddini Bilbao</h2>
      <List members ={takim2}/>


      <h2>Malesef Takımı</h2>
      <List members ={takim3}/>

      <h2>Şehirler</h2>
      <List members ={sehirler}/>*/}

{/*        <UserList/>*/}

        <StateManagement/>
        <Counter/>

      <hr/>
      <Input/>
      <hr/>

      <FruitList/>




    </div>
  )
}

export default App
