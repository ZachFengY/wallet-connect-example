const n=`# Switch Chain

## Description

Switches the connected wallet to a different chain. This method will attempt to switch the chain, and if the chain is not added to the wallet, it will automatically add it first.

## Method

\`switchChain(options: SwitchChainOptions)\`

## Source

\`useAccount()\` hook from \`@tomo-inc/wallet-connect-kit\`

## Parameters

\`\`\`typescript
interface SwitchChainOptions {
  chainType: ChainType; // Chain type (e.g., "evm", "solana", "aptos")
  chainInfo: Chain; // Chain information object
}

interface Chain {
  id: number; // Chain ID
  name: string; // Chain name
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: {
    default: {
      http: string[];
    };
  };
  blockExplorers?: {
    default: {
      name: string;
      url: string;
    };
  };
  testnet?: boolean;
}
\`\`\`

## Returns

\`Promise<boolean>\` - \`true\` if chain switch was successful, \`false\` otherwise

## Usage

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
      console.log("Switch successful:", success);
    } catch (error) {
      console.error("Switch failed:", error);
    }
  };

  return <button onClick={handleSwitch}>Switch Chain</button>;
}
\`\`\`

## Notes

- Requires wallet to be connected first
- If the chain is not added to the wallet, it will be added automatically
- For EVM chains, this uses \`wallet_switchEthereumChain\` or \`wallet_addEthereumChain\`
- User may reject the chain switch request

## Errors

- "Wallet not connected" - Wallet must be connected first
- User rejection - User can reject the chain switch request
- Chain not supported - Chain type not supported by wallet
`;export{n as default};
