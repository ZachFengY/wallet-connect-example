const n=`# Switch Chain - Code Example

## Basic Usage

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";
import type { SwitchChainOptions } from "@tomo-inc/wallet-connect-kit";

function SwitchChainExample() {
  const { switchChain, chainType } = useAccount();

  const handleSwitch = async () => {
    const options: SwitchChainOptions = {
      chainType: "evm",
      chainInfo: {
        id: 1,
        name: "Ethereum",
        nativeCurrency: {
          name: "Ether",
          symbol: "ETH",
          decimals: 18,
        },
        rpcUrls: {
          default: {
            http: ["https://eth.merkle.io"],
          },
        },
        blockExplorers: {
          default: {
            name: "Etherscan",
            url: "https://etherscan.io",
          },
        },
      },
    };

    try {
      const success = await switchChain(options);
      console.log("Switched:", success);
    } catch (error) {
      console.error("Failed:", error);
    }
  };

  return <button onClick={handleSwitch}>Switch to Ethereum</button>;
}
\`\`\`

## Switch to Different Chains

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";
import type { SwitchChainOptions } from "@tomo-inc/wallet-connect-kit";

function ChainSelector() {
  const { switchChain, chainType, chainId } = useAccount();

  const chains = [
    { id: 1, name: "Ethereum Mainnet" },
    { id: 137, name: "Polygon" },
    { id: 56, name: "BNB Smart Chain" },
  ];

  const handleSwitch = async (chainId: number) => {
    const options: SwitchChainOptions = {
      chainType: "evm",
      chainInfo: {
        id: chainId,
        name: chains.find((c) => c.id === chainId)?.name || "Unknown",
        nativeCurrency: {
          name: "Ether",
          symbol: "ETH",
          decimals: 18,
        },
        rpcUrls: {
          default: {
            http: ["https://eth.merkle.io"],
          },
        },
        blockExplorers: {
          default: {
            name: "Etherscan",
            url: "https://etherscan.io",
          },
        },
      },
    };

    try {
      await switchChain(options);
    } catch (error) {
      console.error("Switch failed:", error);
    }
  };

  return (
    <div>
      <div>Current: {chainId}</div>
      {chains.map((chain) => (
        <button key={chain.id} onClick={() => handleSwitch(chain.id)}>
          Switch to {chain.name}
        </button>
      ))}
    </div>
  );
}
\`\`\`

## With Error Handling

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";
import type { SwitchChainOptions } from "@tomo-inc/wallet-connect-kit";

function SwitchChainWithErrorHandling() {
  const { switchChain, chainType } = useAccount();

  const handleSwitch = async () => {
    if (!chainType) {
      alert("Please connect a wallet first");
      return;
    }

    try {
      const options: SwitchChainOptions = {
        chainType,
        chainInfo: {
          id: 1,
          name: "Ethereum",
          nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18,
          },
          rpcUrls: {
            default: {
              http: ["https://eth.merkle.io"],
            },
          },
        },
      };

      const success = await switchChain(options);
      if (success) {
        console.log("Chain switched successfully");
      }
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("rejected")) {
          alert("User rejected the chain switch");
        } else {
          alert(\`Switch failed: \${error.message}\`);
        }
      }
    }
  };

  return <button onClick={handleSwitch}>Switch Chain</button>;
}
\`\`\`
`;export{n as default};
