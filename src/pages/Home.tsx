import Header from '../components/organisms/Header'
import React from 'react'

const Table = ({dados}:any) => {
  return(
    <>
    teste
    <table>
      {dados.cabecalho.map((elemento:any)=>
      <th>
        {elemento}        
      </th>
      )}
      {dados.dadosTable.map((elemento:any)=>
      <td>
        {elemento}       
      </td>
      )}      
    </table>
      
    </>
  )
}



const Home = () => {
  let dadosDaApi = {
    cabecalho: ["ID", 'Nome',"Score", "Tier", "Comissões"],
    dadosTable: [[1,"Leonardo", '10', 1, "Não"], [2,"Leonardo", '10', 1, "Não"], [3,"Leonardo", '10', 1, "Não"] ]
  }

  return (
  <>
    <header>
      <Header/>      
    </header>
      <Table dados={dadosDaApi}/>
  </>
  )
}

export default Home
