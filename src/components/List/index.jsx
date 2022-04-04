import { Card } from "../Card";
import "./styles.css";

export function List({ listTransactions }) {
   return (
      <section>
         <div className="listHeader">
            <span>Resumo financeiro</span>
            <nav>
               <button className="todos">Todos</button>
               <button>Entradas</button>
               <button>Despesas</button>
            </nav>
         </div>
         <div className="cards">
            {listTransactions.map((transaction, index) =>
            transaction.type === "Entrada" ? (
               <Card transaction={transaction} key={index} className="green" />
               ) : (
               <Card transaction={transaction} key={index} className="grey" />
               )
            )}
         </div>
      </section>
   );
}