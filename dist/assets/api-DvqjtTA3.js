const n=`# Sign-in with Wallet

## Description

Signs in with the wallet using SIW (Sign-In with Wallet) protocol. This generates a signature that can be used for authentication and getting a token.

## Method

\`signInWithWallet(params?)\`

## Source

\`useAccount()\` hook from \`@tomo-inc/wallet-connect-kit\`

## Parameters

\`\`\`typescript
interface SignInParams {
  scheme: string; // Protocol scheme (e.g., "https")
  domain: string; // Domain name
  statement: string; // Statement to sign
  version: string; // Protocol version (e.g., "1")
  nonce: string; // Random nonce
  issuedAt: string; // ISO timestamp
  resources?: string[]; // Optional resources
}
\`\`\`

## Returns

\`Promise<string | Uint8Array>\` - The signature/token for authentication

## Usage

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function SignInButton() {
  const { signInWithWallet } = useAccount();

  const onSignin = async () => {
    const token = await signInWithWallet();
    console.log("token:", token);
  };

  return <button onClick={onSignin}>Sign In With Wallet</button>;
}
\`\`\`

## Notes

- This will show a modal/popup for the user to approve
- The signature can be sent to your backend for authentication
- Follows the SIW (Sign-In with Wallet) standard
- Parameters are optional, defaults will be used if not provided

## Errors

- "Wallet not connected" - Wallet must be connected first
- User rejection - User can reject the signing request
`;export{n as default};
