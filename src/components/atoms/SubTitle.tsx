import { SubTitleForm } from "./AtomsStyles/SubTitle"

type TituloProps = {
  titulo: string;  
}

const SubTitle = ({titulo}: TituloProps) => {
  return (
    <SubTitleForm>{titulo}</SubTitleForm>
  )
}

export default SubTitle
