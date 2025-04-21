import React from 'react';

const products = [
  {
    id: 1,
    name: 'Procesador AMD Ryzen 5 5600X',
    description: '6 núcleos, 12 hilos, excelente rendimiento para gaming.',
    image: 'https://via.placeholder.com/150', // Puedes usar una imagen real
    price: '$180',
  },
  {
    id: 2,
    name: 'Tarjeta Gráfica NVIDIA RTX 3060',
    description: '8GB GDDR6, ideal para juegos en 1080p y 1440p.',
    image: 'https://via.placeholder.com/150',
    price: '$350',
  },
  {
    id: 3,
    name: 'Memoria RAM Corsair Vengeance 16GB (2x8)',
    description: '3200MHz DDR4, diseño elegante y alto rendimiento.',
    image: 'https://via.placeholder.com/150',
    price: '$70',
  },
  
];

function Productos() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Componentes para Armar tu PC</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-blue-900">{item.name}</h3>
            <p className="text-gray-700 mt-2">{item.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-lg font-bold text-green-600">{item.price}</span>
              <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;
