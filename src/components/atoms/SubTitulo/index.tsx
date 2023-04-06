import { SubTituloForm } from "./style"

type TituloProps = {
  titulo: string;  
}

const SubTitulo = ({titulo}: TituloProps) => {
  return (
    <SubTituloForm>{titulo}</SubTituloForm>
  )
}

export default SubTitulo
