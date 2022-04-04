import "./styles.css";

export function TotalMoney({ listTransactions }) {
  const result = listTransactions.reduce((acc, cur) => {
    if (cur.type === "Entrada") {
      return acc + Number(cur.value);
    } else {
      return acc - Number(cur.value);
    }
  }, 0);

  return (
    <div className="totalCard">
      <span>Valor total</span>
      <span>R$ {result}</span>
    </div>
  );
}