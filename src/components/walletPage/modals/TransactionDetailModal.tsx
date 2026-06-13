import type { Transaction } from "@/core/types/Wallets";
import EscrowHoldModal from "./EscrowHoldModal";
import CreditModal from "./CreditModal";
import RefundModal from "./RefundModal";
import WithdrawalModal from "./WithdrawalModal";

interface Props {
  transaction: Transaction;
  onClose: () => void;
}

export default function TransactionDetailModal({
  transaction,
  onClose,
}: Props) {
  switch (transaction.type) {
    case "escrow":
      return <EscrowHoldModal transaction={transaction} onClose={onClose} />;
    case "credit":
      return <CreditModal transaction={transaction} onClose={onClose} />;
    case "refund":
      return <RefundModal transaction={transaction} onClose={onClose} />;
    case "withdrawal":
      return <WithdrawalModal transaction={transaction} onClose={onClose} />;
    default:
      return null;
  }
}
