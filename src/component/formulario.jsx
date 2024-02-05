import React from "react";

function Formulario({label,type,placeholder,name,onChange}) {
  return (
<div className="flex  text-xl capitalize " >
<div className="m-auto w-1/4 border-2">
      <label className="border-2">{label}</label>
      <input className="w-full  "
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </div>
</div>
  );
}

export default Formulario;
