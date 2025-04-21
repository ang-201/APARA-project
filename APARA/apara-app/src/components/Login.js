import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [showMarcas, setShowMarcas] = useState(false);
  const [showCategorias, setShowCategorias] = useState(false);

  const marcas = ['Intel', 'AMD', 'NVIDIA', 'ASUS', 'Corsair'];
  const categorias = ['CPU', 'GPU', 'RAM', 'Placas Madre', 'Discos duros', 'Fuentes de poder'];

  return (
      <div className="min-h-screen bg-white flex flex-col justify-center items-center">
        <header className="bg-blue-900 text-white flex justify-between items-center px-6 py-4 w-full relative">
          <div className="text-xl font-bold">🅱️</div>

          <div className="flex space-x-4 relative">

            {/* Lista desplegable marcas */}
            <div
                className="relative"
                onMouseEnter={() => setShowMarcas(true)}
                onMouseLeave={() => setShowMarcas(false)}
            >
              <button className="bg-blue-900 text-white rounded px-4 py-1 z-10">Marcas</button>
              {showMarcas && (
                  <ul className="absolute top-full mt-1 left-0 bg-white text-blue-900 shadow-lg rounded z-20 w-40">
                    {marcas.map((marca, index) => (
                        <li key={index} className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                          {marca}
                        </li>
                    ))}
                  </ul>
              )}
            </div>

            {/* Lista desplegable  Categorías */}
            <div
                className="relative"
                onMouseEnter={() => setShowCategorias(true)}
                onMouseLeave={() => setShowCategorias(false)}
            >
              <button className="bg-blue-900 text-white rounded px-4 py-1 z-10">Categorías</button>
              {showCategorias && (
                  <ul className="absolute top-full mt-1 left-0 bg-white text-blue-900 shadow-lg rounded z-20 w-48">
                    {categorias.map((categoria, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                            onClick={() => {
                              navigate(`/productos?categoria=${categoria.toLowerCase()}`);
                            }}
                        >
                          {categoria}
                        </li>
                    ))}
                  </ul>
              )}
            </div>

            {/* Botones de contacto y ver productos */}
            <button className="font-bold">Contact</button>
            <button
                onClick={() => navigate('/productos')}
                className="bg-blue-900 text-white rounded px-4 py-1 hover:bg-blue-800"
            >
              Ver productos
            </button>
          </div>
        </header>

        <main className="flex flex-col items-center justify-center flex-grow text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">A.P.A.R.A</h1>
          <div className="space-x-4">
            <button className="px-6 py-2 border border-blue-900 text-blue-900 rounded hover:bg-blue-100">
              Login
            </button>
            <button className="px-6 py-2 bg-blue-900 text-white rounded hover:bg-blue-800">
              Registro
            </button>
          </div>
        </main>

        <footer className="bg-blue-900 h-10 w-full"></footer>
      </div>
  );
}

export default Login;