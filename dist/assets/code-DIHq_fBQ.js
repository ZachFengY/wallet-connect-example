const n=`# Connect - Code Example

## Basic Usage

\`\`\`typescript
import { useWalletConnect } from "@tomo-inc/wallet-connect-kit";
import type { ConnectVariables } from "@tomo-inc/wallet-connect-kit";

function ConnectExample() {
  const { connect, isConnected } = useWalletConnect();

  const handleConnect = async () => {
    if (isConnected) {
      console.log("Already connected");
      return;
    }

    try {
      // Note: In practice, you would get the wallet from a wallet list
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

## Recommended: Use openModal Instead

\`\`\`typescript
import { useWalletConnect } from "@tomo-inc/wallet-connect-kit";

function ConnectButton() {
  const { openModal, isConnected, disconnect } = useWalletConnect();

  // For user-facing connections, use openModal() instead
  return (
    <button onClick={() => (isConnected ? disconnect() : openModal())}>
      {isConnected ? "Disconnect" : "Connect Wallet"}
    </button>
  );
}
\`\`\`

## With Error Handling

\`\`\`typescript
import { useWalletConnect } from "@tomo-inc/wallet-connect-kit";
import type { ConnectVariables } from "@tomo-inc/wallet-connect-kit";

function ConnectWithErrorHandling() {
  const { connect, isConnected } = useWalletConnect();

  const handleConnect = async () => {
    if (isConnected) {
      alert("Wallet is already connected");
      return;
    }

    try {
      const variables: ConnectVariables = {
        wallet: walletConnector,
        chainType: "evm",
      };
      const data = await connect(variables);
      console.log("Successfully connected:", data);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("already connected")) {
          alert("Wallet is already connected");
        } else {
          alert(\`Connection failed: \${error.message}\`);
        }
      }
    }
  };

  return <button onClick={handleConnect}>Connect</button>;
}
\`\`\`
`;export{n as default};
