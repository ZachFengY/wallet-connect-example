const n=`# Connect

## Description

Connects to a wallet programmatically. This method requires a wallet connector object and is typically used internally by the SDK. For user-facing connections, use \`openModal()\` instead.

## Method

\`connect(variables?: ConnectVariables)\`

## Source

\`useWalletConnect()\` hook from \`@tomo-inc/wallet-connect-kit\`

## Parameters

\`\`\`typescript
interface ConnectVariables {
  wallet: Connector; // Wallet connector object
  chainType: ChainType; // Chain type (e.g., "evm", "solana", "aptos")
  chainId?: string; // Optional chain ID
}
\`\`\`

## Returns

\`Promise<ConnectData>\` - Connection data including address, chainId, and chainType

\`\`\`typescript
interface ConnectData {
  address: string;
  chainId: string;
  chainType: ChainType;
}
\`\`\`

## Usage

\`\`\`typescript
import { useWalletConnect } from "@tomo-inc/wallet-connect-kit";
import type { ConnectVariables } from "@tomo-inc/wallet-connect-kit";

function ConnectProgrammatically() {
  const { connect } = useWalletConnect();

  const handleConnect = async () => {
    try {
      // Note: You need to get the wallet connector from a wallet list
      const variables: ConnectVariables = {
        wallet: walletConnector, // From wallet list
        chainType: "evm",
        chainId: "0x1", // Optional
      };
      const data = await connect(variables);
      console.log("Connected:", data);
    } catch (error) {
      console.error("Connection failed:", error);
    }
  };

  return <button onClick={handleConnect}>Connect</button>;
}
\`\`\`

## Notes

- This method is typically used internally by the SDK
- For user-facing connections, use \`openModal()\` which handles wallet selection
- Requires a valid wallet connector object
- Will throw an error if wallet is already connected

## Errors

- "Wallet is already connected" - Wallet must be disconnected first
- "Provider not available for this chain type" - Chain type not supported by wallet
`;export{n as default};
