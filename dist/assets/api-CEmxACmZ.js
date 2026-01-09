const n=`# isConnected

## Description

A boolean property that indicates whether a wallet is currently connected.

## Property

\`isConnected: boolean\`

## Source

\`useWalletConnect()\` hook from \`@tomo-inc/wallet-connect-kit\`

## Type

\`boolean\` - \`true\` if wallet is connected, \`false\` if not connected

## Usage

\`\`\`typescript
import { useWalletConnect } from "@tomo-inc/wallet-connect-kit";

function ConnectionStatus() {
  const { isConnected, openModal, disconnect } = useWalletConnect();

  return (
    <div>
      <div>Status: {isConnected ? "Connected" : "Not Connected"}</div>
      {isConnected ? (
        <button onClick={disconnect}>Disconnect</button>
      ) : (
        <button onClick={openModal}>Connect</button>
      )}
    </div>
  );
}
\`\`\`

## Related Properties

- \`isOpenModal\` - Modal open status
- \`isConnecting\` - Connection in progress status

## Related Methods

- \`connect()\` - Connect to a wallet
- \`disconnect()\` - Disconnect the wallet
- \`openModal()\` - Open wallet selection modal
`;export{n as default};
