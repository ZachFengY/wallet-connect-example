const n=`# Open Wallet Modal

## Description

Opens the wallet connection modal. This modal allows users to select and connect to a wallet.

## Method

\`openModal()\`

## Source

\`useWalletConnect()\` hook from \`@tomo-inc/wallet-connect-kit\`

## Parameters

None

## Returns

\`void\` - No return value

## Usage

\`\`\`typescript
import { useWalletConnect } from "@tomo-inc/wallet-connect-kit";

function ConnectButton() {
  const { openModal, isConnected, disconnect } = useWalletConnect();

  return (
    <button onClick={() => (isConnected ? disconnect() : openModal())}>
      {isConnected ? "Disconnect" : "Connect Wallet"}
    </button>
  );
}
\`\`\`

## Related Methods

- \`closeModal()\` - Closes the modal
- \`isOpenModal\` - Boolean state indicating if modal is open
- \`disconnect()\` - Disconnects the wallet
`;export{n as default};
