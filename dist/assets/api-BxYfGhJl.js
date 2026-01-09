const n=`# Sign Message

## Description

Signs a message with the connected wallet. This is used for message verification and authentication.

## Method

\`signMessage(params)\`

## Source

\`useAccount()\` hook from \`@tomo-inc/wallet-connect-kit\`

## Parameters

\`\`\`typescript
{
  message: string; // Message to sign
  nonce?: string; // Optional nonce for additional security
}
\`\`\`

## Returns

\`Promise<string | Uint8Array>\` - The signature of the message

## Usage

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function SignMessageButton() {
  const { signMessage } = useAccount();

  const onSignMessage = async () => {
    const sig = await signMessage?.({ message: "Hello Tomo" });
    console.log("signature:", sig);
  };

  return <button onClick={onSignMessage}>Sign Message</button>;
}
\`\`\`

## Notes

- Requires wallet to be connected
- The signature format depends on the chain type (EVM, Solana, etc.)
- For EVM chains, returns a hex string
- For Solana, returns a Uint8Array

## Errors

- "Wallet not connected" - Wallet must be connected first
- "Message is required" - Message cannot be empty
- User rejection - User can reject the signing request
`;export{n as default};
