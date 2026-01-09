const n=`# Disconnect

## Description

Disconnects the currently connected wallet and clears the connection state.

## Method

\`disconnect()\`

## Source

\`useWalletConnect()\` hook from \`@tomo-inc/wallet-connect-kit\`

## Parameters

None

## Returns

\`Promise<void>\` - Resolves when disconnection is complete

## Usage

\`\`\`typescript
import { useWalletConnect } from "@tomo-inc/wallet-connect-kit";

function DisconnectButton() {
  const { disconnect, isConnected } = useWalletConnect();

  if (!isConnected) {
    return <div>Not connected</div>;
  }

  return <button onClick={disconnect}>Disconnect</button>;
}
\`\`\`

## Notes

- Clears all wallet connection state
- Resets account information
- User will need to reconnect to use wallet features again
- This is an async operation

## Related Methods

- \`openModal()\` - Opens the wallet connection modal
- \`isConnected\` - Boolean state indicating connection status
`;export{n as default};
