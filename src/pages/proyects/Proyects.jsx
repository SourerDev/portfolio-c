import ProyectsCrl from "../../components/carousels/ProyectsCrl";
import Proyect from "../../components/cards/Proyect";
import information from "../../information";
import styled from "styled-components";

export default function Proyects() {
  const { proyects } = information;
  return (
    <div className="min-h-screen md:flex flex-col items-center" id="proyects">
      <div className="h-[10%] p-2 mb-2 text-center text-txThird xl:h-[15vh]">
        <h1 className="text-3xl font-bold">Proyectos</h1>
        <p className="text-gray-500">Principales Proyectos</p>
      </div>

      <ProyectsCrl proyects={proyects} />

      <Media className="w-auto hidden md:flex flex-col items-center">
        {proyects.map((element, i) => (
          <Proyect
            key={i}
            title={element.name}
            description={element.shortDescription}
            image={element.image}
            gitLink={element.gitLink}
            demoLink={element.demoLink}
          />
        ))}
      </Media>
    </div>
  );
}

const Media = styled.div`
@media screen and (min-width:800px){
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}

@media screen and (min-width:1200px){
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

`