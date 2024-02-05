import React from "react";
import { useState } from "react";
import Formulario from "./formulario";
import Table from "./table";

function Lista() {
  const [listas, setListas] = useState([]);
  const [formData, setFormData] = useState({});
  const [mesageError, setMesageError] = useState("");

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMesageError("");
  };

  const handleSubmit = (e) => {
    console.log(handleSubmit);
    
    e.preventDefault();
    if (
      formData?.name &&
      formData?.apellido &&
      formData?.edad &&
      formData?.peso &&
      formData?.experiencia &&
      formData?.labor
    ) {
      const newWorks = {
        id: Math.round(Math.random() * 1000),
        name: formData?.name,
        apellido: formData?.apellido,
        edad: formData?.edad,
        peso: formData?.peso,
        experiencia: formData?.experiencia,
        labor: formData?.labor,
      };
      setListas([...listas, newWorks]);
    } else {
      setMesageError("debes de llenar el formulario");
    }
  };
  const remove = (lisid) => {
    const eliminar = listas.filter((lista)=> lista.id !== lisid );
    setListas( eliminar)
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="" >
        <div className="text-center mx-96">
         <div className=""> <h1 className="  py-2 capitalize text-4xl ">Formulario</h1></div>
        </div>
        <Formulario
          label="nombre"
          name="name"
          onChange={onChange}
          placeholder="nombre del trabajador"
          type="text"
          value={formData?.name}
        />
        <Formulario
          label="apellido"
          name="apellido"
          onChange={onChange}
          placeholder="apellido del trabajador"
          type="text"
          value={formData?.apellido}
        />
        <Formulario
          label="edad"
          name="edad"
          onChange={onChange}
          placeholder="edad del trabajador"
          type="number"
          value={formData?.edad}
        />
        <Formulario
          label="peso"
          name="peso"
          onChange={onChange}
          placeholder="peso del trabajador"
          type="number"
          value={formData?.peso}
        />
        <Formulario
          label="años de  experiencia"
          name="experiencia"
          onChange={onChange}
          placeholder="años de experiencia del trabajador"
          type="number"
          value={formData?.experiencia}
        />
        <Formulario
          label="labor"
          name="labor"
          onChange={onChange}
          placeholder="labor del trabajador"
          type="text"
          value={formData?.labor}
        />

        <div>{mesageError}</div>
        <div className="text-center"><button className="bg-blue-700 px-20 py-3 rounded-xl my-4 ">Guardar Datos</button></div>
      </form>
      <Table listas={listas} remove={remove} />
    </div>
  );
}

export default Lista;
