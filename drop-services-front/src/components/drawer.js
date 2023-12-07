import React, { useState } from 'react';
import Draggable from 'react-draggable';

const PullableMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDrag = (e, ui) => {
    // Adicione lógica personalizada conforme necessário durante o arrasto
    console.log(ui.deltaX, ui.deltaY);
  };

  const handleStop = (e, ui) => {
    // Quando o arrasto parar, verifique a posição do menu
    const { y } = ui;

    if (y >= 0) {
      // Se a posição Y for maior ou igual a 0, expanda o menu
      setIsExpanded(true);
    } else {
      // Se a posição Y for menor que 0, recolha o menu
      setIsExpanded(false);
    }
  };

  const containerStyles = {
    width: '100%',
    position: 'fixed',
    top: isExpanded ? '0' : '-50px',
    left: 0,
    transition: 'top 0.3s ease', // Adicione uma transição suave à mudança de altura
  };

  const contentStyles = {
    border: '1px solid black',
  };

  const handleStyles = {
    backgroundColor: 'red',
    width: '100%',
    height: '50px',
    top: isExpanded ? '-50px' : '0', // Posição top negativa para esconder a div handle
  };

  return (
    <Draggable
      axis="y"
      handle=".handle"
      onDrag={handleDrag}
      onStop={handleStop}
      bounds={{ top: -50, bottom: 0 }} // Defina os limites superiores e inferiores
    >
      <div style={containerStyles}>
        <div className="content" style={contentStyles}>
          {/* Conteúdo do menu */}
          <div style={contentStyles}>Conteúdo do menu</div>
          <div style={contentStyles}>Conteúdo do menu</div>
          <div style={contentStyles}>Conteúdo do menu</div>
          <div style={contentStyles}>Conteúdo do menu</div>
          <div style={contentStyles}>Conteúdo do menu</div>
        </div>
        <div className="handle" style={handleStyles}>
          Arraste-me para baixo
        </div>
      </div>
    </Draggable>
  );
};

export default PullableMenu;
