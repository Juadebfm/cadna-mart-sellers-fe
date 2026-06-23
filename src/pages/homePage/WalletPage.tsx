import { useState } from "react";
import WalletBalanceCard from "@/components/walletPage/WalletBalanceCard";
import WalletActions from "@/components/walletPage/WalletActions";
import WithdrawForm from "@/components/walletPage/WithdrawForm";
import WalletFilters from "@/components/walletPage/WalletFilters";
import TransactionHistory from "@/components/walletPage/TransactionHistory";
import TransactionDetailModal from "@/components/walletPage/modals/TransactionDetailModal";
import { MOCK_TRANSACTIONS, type Transaction } from "@/core/types/Wallets";

export default function WalletPage() {
  const kycDone = true; // toggle: true = KYC verified, false = KYC pending

  const [showWithdrawForm, setShowWithdrawForm] = useState(false);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);

  const balance = 40700;

  const filtered = MOCK_TRANSACTIONS.filter((t) => {
    const matchesSearch = t.title.toLowerCase().includes(search.toLowerCase());
    const matchesType =
      typeFilter === "All Types" ||
      (typeFilter === "Credits" && t.type === "credit") ||
      (typeFilter === "Withdrawals" && t.type === "withdrawal") ||
      (typeFilter === "Escrows" && t.type === "escrow") ||
      (typeFilter === "Refunds" && t.type === "refund");
    const matchesStatus =
      statusFilter === "All Statuses" || t.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  const transactions = filtered;

  return (
    <div className="space-y-5">
      <WalletBalanceCard balance={balance} kycPending={!kycDone} />

      <WalletActions
        kycPending={!kycDone}
        showWithdrawForm={showWithdrawForm}
        onToggleWithdraw={() => {
          setShowWithdrawForm((v) => !v);
        }}
      />

      {showWithdrawForm && (
        <WithdrawForm
          onSubmit={() => {
            setShowWithdrawForm(false);
          }}
        />
      )}

      <WalletFilters
        search={search}
        onSearch={setSearch}
        typeFilter={typeFilter}
        onTypeChange={setTypeFilter}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
      />

      <TransactionHistory
        transactions={transactions}
        onSelect={setSelectedTransaction}
      />

      {selectedTransaction && (
        <TransactionDetailModal
          transaction={selectedTransaction}
          onClose={() => {
            setSelectedTransaction(null);
          }}
        />
      )}
    </div>
  );
}
