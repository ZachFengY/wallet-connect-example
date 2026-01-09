const n=`# Quick Start - Code Examples

## Complete Setup Example

\`\`\`tsx
// App.tsx
import React from "react";
import { WalletConnectProvider } from "@tomo-inc/wallet-connect-kit";

export default function App() {
  return (
    <WalletConnectProvider>
      <YourApp />
    </WalletConnectProvider>
  );
}
\`\`\`

## Connect Button Example

\`\`\`tsx
import { useWalletConnect } from "@tomo-inc/wallet-connect-kit";

export function ConnectButton() {
  const { openModal, isConnected, disconnect } = useWalletConnect();

  return (
    <button onClick={() => (isConnected ? disconnect() : openModal())}>
      {isConnected ? "Disconnect" : "Connect Wallet"}
    </button>
  );
}
\`\`\`

## Account Info and Signing Example

\`\`\`tsx
import { useAccount } from "@tomo-inc/wallet-connect-kit";

export function AccountInfo() {
  const { address, chainId, signMessage, signInWithWallet } = useAccount();

  const onSignMessage = async () => {
    const sig = await signMessage?.({ message: "Hello Tomo" });
    console.log("signature:", sig);
  };

  const onSignin = async () => {
    const token = await signInWithWallet();
    console.log("token:", token);
  };

  return (
    <div>
      <div>Address: {address}</div>
      <div>ChainId: {chainId}</div>
      <button onClick={onSignMessage}>Sign Message</button>
      <button onClick={onSignin}>Sign In With Wallet</button>
    </div>
  );
}
\`\`\`

## Complete Example

\`\`\`tsx
import React from "react";
import {
  WalletConnectProvider,
  useWalletConnect,
  useAccount,
} from "@tomo-inc/wallet-connect-kit";

function WalletDemo() {
  const { openModal, isConnected, disconnect } = useWalletConnect();
  const { address, chainId, signMessage, signInWithWallet } = useAccount();

  return (
    <div>
      {isConnected ? (
        <div>
          <div>Address: {address}</div>
          <div>Chain ID: {chainId}</div>
          <button onClick={() => signMessage?.({ message: "Hello" })}>
            Sign Message
          </button>
          <button onClick={disconnect}>Disconnect</button>
        </div>
      ) : (
        <button onClick={openModal}>Connect Wallet</button>
      )}
    </div>
  );
}

export default function App() {
  return (
    <WalletConnectProvider>
      <WalletDemo />
    </WalletConnectProvider>
  );
}
\`\`\`
`;export{n as default};
