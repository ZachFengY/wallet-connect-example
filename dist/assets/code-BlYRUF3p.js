const n=`# balance - Code Example

## Basic Usage

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function BalanceDisplay() {
  const { balance, address } = useAccount();

  if (!address) {
    return <div>Not connected</div>;
  }

  return <div>Balance: {balance || "0.0"}</div>;
}
\`\`\`

## With Formatting

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function FormattedBalance() {
  const { balance, chainType } = useAccount();

  if (!balance) {
    return <div>Balance not available</div>;
  }

  const currency = chainType === "evm" ? "ETH" : "Unknown";
  const formatted = parseFloat(balance).toFixed(4);

  return (
    <div>
      <div>{formatted} {currency}</div>
    </div>
  );
}
\`\`\`

## With Loading State

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function BalanceWithLoading() {
  const { balance, address } = useAccount();

  if (!address) {
    return <div>Not connected</div>;
  }

  if (balance === undefined) {
    return <div>Loading balance...</div>;
  }

  return <div>Balance: {balance}</div>;
}
\`\`\`
`;export{n as default};
