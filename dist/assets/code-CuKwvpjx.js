const n=`# address - Code Example

## Basic Usage

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function AddressDisplay() {
  const { address } = useAccount();

  if (!address) {
    return <div>Not connected</div>;
  }

  return <div>Address: {address}</div>;
}
\`\`\`

## With Formatting

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";

function FormattedAddress() {
  const { address } = useAccount();

  if (!address) {
    return <div>Not connected</div>;
  }

  const shortAddress = \`\${address.substring(0, 6)}...\${address.substring(address.length - 4)}\`;

  return (
    <div>
      <div>Full: {address}</div>
      <div>Short: {shortAddress}</div>
    </div>
  );
}
\`\`\`

## With Copy Functionality

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";
import { useState } from "react";

function AddressWithCopy() {
  const { address } = useAccount();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!address) return;
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  if (!address) {
    return <div>Not connected</div>;
  }

  return (
    <div>
      <div>{address}</div>
      <button onClick={handleCopy}>
        {copied ? "Copied!" : "Copy Address"}
      </button>
    </div>
  );
}
\`\`\`
`;export{n as default};
