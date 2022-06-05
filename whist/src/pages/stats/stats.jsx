import StatsTotal from "../../components/stat_total/stat_total";
import StatsUnique from "../../components/stats_unique/stats_unique";
import LastTransactions from "../../components/last_transactions/last_transactions";

export default function Stats() {
  return (
    <div>
      <StatsTotal />
      <StatsUnique />
      <LastTransactions />
    </div>
  );
}
