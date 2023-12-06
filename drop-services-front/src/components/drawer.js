import React from 'react';
import Draggable from 'react-draggable';

const PullableMenu = () => {
  const handleDrag = (e, ui) => {
    // Adicione lógica personalizada conforme necessário durante o arrasto
    console.log(ui.deltaX, ui.deltaY);
  };

  return (
    <Draggable axis="y" handle=".handle" onDrag={handleDrag} bounds={{ top: 0, bottom: 200 }}>
      <div style={{ width:'100%',position: 'fixed', top: -50, left: 0 }}>
      <div style={{ border: '1px solid black', padding: '16px' }}>
          Conteúdo do menu
        </div>
        <div className="handle" style={{backgroundColor:'red',width:'100%',height:"50px"}}>
          Arraste-me para baixo
        </div>
        
      </div>
    </Draggable>
  );
};

export default PullableMenu;
