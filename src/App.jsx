import './App.css'
import List1 from "./components/List1.jsx";
import List2 from "./components/List2.jsx";
import List3 from "./components/List3.jsx";
import List from "./components/List.jsx";

// parent component
function App() {

  const  takim3 = ["Esmanur Akdoğan",'Elif Okur','Beyzanur Kaymak']
  const kisiler = ['Yunus Emre Cinbolat','Doğukan Bayazıt','Eda Esen','Senanur Yurdakul','Özlem Arslan']
  const takim2 = ['Ahmet Hakan Albayrak','Emre Işık','Eren Genç']
  const  sehirler = ['Tunceli','Malatya','Elazığ','Bingöl']

  return (
    <div style={{margin:"0px"}}>

      <h2>Parlayan Yıldızlar takımı : </h2>
      <List members ={kisiler}/>


      <h2>Haddini Bilbao</h2>
      <List members ={takim2}/>


      <h2>Malesef Takımı</h2>
      <List members ={takim3}/>

      <h2>Şehirler</h2>
      <List members ={sehirler}/>


    </div>
  )
}

export default App
