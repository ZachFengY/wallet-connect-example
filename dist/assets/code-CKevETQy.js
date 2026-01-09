const n=`# Sign-in with Wallet - Code Example

## Basic Usage

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function SignInExample() {
  const { signInWithWallet } = useAccount();

  const onSignin = async () => {
    try {
      const token = await signInWithWallet();
      console.log("token:", token);
    } catch (error) {
      console.error("Sign in failed:", error);
    }
  };

  return <button onClick={onSignin}>Sign In With Wallet</button>;
}
\`\`\`

## With Custom Parameters

\`\`\`typescript
import type { SignInParams } from "@tomo-inc/wallet-connect-kit";
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function CustomSignIn() {
  const { signInWithWallet } = useAccount();

  const handleSignIn = async () => {
    const params: SignInParams = {
      scheme: "https",
      domain: window.location.host,
      statement: "Requesting Connection",
      version: "1",
      nonce: Math.random().toString(36).slice(2),
      issuedAt: new Date().toISOString(),
      resources: ["https://example.com"],
    };

    try {
      const signature = await signInWithWallet(params);
      console.log("Signature:", signature);

      // Send to backend for authentication
      // await fetch('/api/auth', {
      //   method: 'POST',
      //   body: JSON.stringify({ signature, params })
      // });
    } catch (error) {
      console.error("Failed:", error);
    }
  };

  return <button onClick={handleSignIn}>Sign In</button>;
}
\`\`\`

## Complete Authentication Flow

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";
import { useState } from "react";

function AuthenticationFlow() {
  const { signInWithWallet, address } = useAccount();
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    if (!address) {
      alert("Please connect your wallet first");
      return;
    }

    setLoading(true);
    try {
      const signature = await signInWithWallet();
      setToken(signature as string);

      // Store token for future requests
      localStorage.setItem("authToken", signature as string);
    } catch (error) {
      console.error("Authentication failed:", error);
      alert("Sign in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {token ? (
        <div>Authenticated! Token: {token.substring(0, 20)}...</div>
      ) : (
        <button onClick={handleSignIn} disabled={loading}>
          {loading ? "Signing in..." : "Sign In With Wallet"}
        </button>
      )}
    </div>
  );
}
\`\`\`
`;export{n as default};
