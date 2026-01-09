const n=`# chainType

## Description

The type of blockchain the wallet is currently connected to (e.g., "evm", "solana", "aptos", "dogecoin").

## Property

\`chainType?: ChainType\`

## Source

\`useAccount()\` hook from \`@tomo-inc/wallet-connect-kit\`

## Type

\`ChainType | undefined\` - Chain type string or undefined if not connected

Possible values:

- \`"evm"\` - EVM-compatible chains (Ethereum, Polygon, BSC, etc.)
- \`"solana"\` - Solana blockchain
- \`"aptos"\` - Aptos blockchain
- \`"dogecoin"\` - Dogecoin blockchain

## Usage

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function ChainTypeDisplay() {
  const { chainType, address } = useAccount();

  if (!address) {
    return <div>Not connected</div>;
  }

  return (
    <div>
      <div>Chain Type: {chainType || "Unknown"}</div>
    </div>
  );
}
\`\`\`

## Notes

- Returns \`undefined\` if wallet is not connected
- Chain type determines which methods and features are available
- Different chain types have different address formats and RPC methods

## Related Properties

- \`chainId\` - Current chain ID
- \`address\` - Wallet address
- \`currentWallet\` - Current wallet connector
`;export{n as default};
