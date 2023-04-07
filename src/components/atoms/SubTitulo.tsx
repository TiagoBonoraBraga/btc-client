import { SubTituloForm } from "./AtomsStyles/SubTitulo"

type TituloProps = {
  titulo: string;  
}

const SubTitulo = ({titulo}: TituloProps) => {
  return (
    <SubTituloForm>{titulo}</SubTituloForm>
  )
}

export default SubTitulo
