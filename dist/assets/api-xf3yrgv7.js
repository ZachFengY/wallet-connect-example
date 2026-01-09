const n=`# chainId

## Description

The ID of the specific chain the wallet is currently connected to. Format depends on the chain type (hex string for EVM, decimal string for others).

## Property

\`chainId?: string\`

## Source

\`useAccount()\` hook from \`@tomo-inc/wallet-connect-kit\`

## Type

\`string | undefined\` - Chain ID in the appropriate format for the chain type

## Format

- **EVM chains**: Hex string (e.g., \`"0x1"\` for Ethereum mainnet, \`"0x89"\` for Polygon)
- **Other chains**: Decimal string or chain-specific format

## Usage

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function ChainIdDisplay() {
  const { chainId, address } = useAccount();

  if (!address) {
    return <div>Not connected</div>;
  }

  return (
    <div>
      <div>Chain ID: {chainId || "N/A"}</div>
    </div>
  );
}
\`\`\`

## Notes

- Returns \`undefined\` if wallet is not connected
- Format depends on chain type
- Chain ID changes when user switches chains
- Common EVM chain IDs:
  - \`0x1\` - Ethereum Mainnet
  - \`0x89\` - Polygon
  - \`0x38\` - BNB Smart Chain
  - \`0xa\` - Optimism

## Related Properties

- \`chainType\` - Current chain type
- \`address\` - Wallet address
- \`switchChain()\` - Method to switch chains
`;export{n as default};
