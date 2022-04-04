import "./styles.css";
import { useState } from "react";

export function Form({ listTransactions, setListTransactions }) {
  const [valueInput, setValueInput] = useState();
  const [descInput, setDescInput] = useState("");
  const [valueType, setValueType] = useState("Entrada");

  const handleInfos = (descInput, valueInput, valueType) =>
    setListTransactions([...listTransactions, {
      description: descInput,
      type: valueType,
      value: valueInput,
    }]);

  return (
    <form>
      <span>Descrição</span>
      <input
        type="text"
        value={descInput}
        onChange={(event) => setDescInput(event.target.value)}
        placeholder="Digite aqui sua descrição"
      />
      <span className="ex">Ex: Compra de roupas</span>
      <div>
        <span className="label">Valor</span>
        <span>Tipo de valor</span>
      </div>
      <div className="inputs">
        <input
          type="text"
          value={valueInput}
          onChange={(event) => setValueInput(event.target.value)}
          placeholder="R$ 1.00"
        />
        <select
          name="valueType"
          value={valueType}
          onChange={(event) => setValueType(event.target.value)}
        >
          <option value="Entrada">Entrada</option>
          <option value="Saída">Saída</option>
        </select>
      </div>
      <button type="submit" onClick={(event) => {event.preventDefault()
        if(descInput !== ""){handleInfos(descInput, valueInput, valueType)}
         }}>Inserir valor</button>
    </form>
  );
}