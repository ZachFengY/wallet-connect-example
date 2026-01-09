const n=`# address

## Description

The connected wallet's address. The format depends on the chain type (EVM addresses are hex strings starting with 0x, Solana addresses are base58, etc.).

## Property

\`address: string\`

## Source

\`useAccount()\` hook from \`@tomo-inc/wallet-connect-kit\`

## Type

\`string\` - The wallet address in the appropriate format for the chain type

## Usage

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function AddressDisplay() {
  const { address } = useAccount();

  if (!address) {
    return <div>Not connected</div>;
  }

  return (
    <div>
      <div>Address: {address}</div>
      <div>Short: {address.substring(0, 6)}...{address.substring(address.length - 4)}</div>
    </div>
  );
}
\`\`\`

## Notes

- Returns empty string if wallet is not connected
- Format depends on chain type:
  - EVM: Hex string starting with \`0x\` (e.g., \`0x1a9626bfa0a8fa5aff2c7a887ed065000f7e87d29b26939a81c4bde7241001be\`)
  - Solana: Base58 string
  - Aptos: Hex string
- Address changes when wallet account changes

## Related Properties

- \`chainType\` - Current chain type
- \`chainId\` - Current chain ID
- \`currentWallet\` - Current wallet connector
`;export{n as default};
