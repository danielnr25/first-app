import { useState } from "react";
import html2canvas from "html2canvas";
import "./App.css";

function App() {
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [image, setImage] = useState("");

  const handleData1 = (e) => {
    setData1(e.target.value);
  };

  const handleData2 = (e) => {
    setData2(e.target.value);
  };

  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const onClickExportar = (e) => {
    html2canvas(document.querySelector("#meme")).then((canvas) => { 
      var imgData = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.download = "meme.png";
      link.href = imgData;
      link.click();
    });
  }

  return (
    <div className=" bg-black flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-center font-semibold text-4xl text-blue-600">App de Generador de Memes 😎</h1>
      <div className="text-center mt-4">
        <label className="block mb-2 text-sm font-medium text-white">
          Seleccione una opcion:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5"
          onChange={handleImage}
        >
          <option value="fire">Casa en llamas</option>
          <option value="futurama">Futurama</option>
          <option value="history">History Channel</option>
          <option value="philosoraptor">Philosoraptor</option>
          <option value="smart">Smart Guy</option>
          <option value="spiderman">Spiderman</option>
        </select>
      </div>
      <div className="flex flex-col py-8 space-y-4">
        <input
          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5"
          type="text"
          onChange={handleData1}
          placeholder="Etiqueta 1"
        />
        <input
          className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5"
          type="text"
          onChange={handleData2}
          placeholder="Etiqueta 2"
        />
        <button
          type=""
          className="bg-indigo-600 border border-gray-300 rounded-lg text-white hover:bg-indigo-400 text-base w-96 p-2.5"
          onClick={onClickExportar}
        >
          Exportar
        </button>
      </div>

      <div className="flex flex-col" id="meme">
        <span className="mt-2 absolute text-center text-4xl justify-center w-96 text-white">{data1}</span>
        <span className="mt-72 absolute text-center text-4xl justify-center w-96 text-white">{data2}</span>
        <img className="w-96" src={"/img/" + image + ".jpg"} alt="img" />
      </div>
    </div>
  );
}

export default App;
