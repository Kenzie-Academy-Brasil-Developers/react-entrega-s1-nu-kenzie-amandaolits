import "./styles.css";
import { FaTrash } from "react-icons/fa";

export function Card({ transaction, className }) {
  return (
    <div className={className}>
      <div>
        <p>{transaction.description}</p>
        <div>
          <span>R$ {transaction.value}</span>
          <button>
            <FaTrash className="trash--icon" />
          </button>
        </div>
      </div>
      <span>{transaction.type}</span>
    </div>
  );
}