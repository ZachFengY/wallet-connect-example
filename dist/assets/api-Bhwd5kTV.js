const n=`# Quick Start

## Overview

Get started with Wallet Connect SDK in minutes. This guide will walk you through the basic setup and usage.

## Installation

\`\`\`bash
npm install @tomo-inc/wallet-connect-kit
\`\`\`

## Basic Setup

### 1. Wrap your app with WalletConnectProvider

\`\`\`tsx
import { WalletConnectProvider } from "@tomo-inc/wallet-connect-kit";

export default function App() {
  return (
    <WalletConnectProvider>
      <YourApp />
    </WalletConnectProvider>
  );
}
\`\`\`

### 2. Use the hooks

The SDK provides two main hooks:

- \`useWalletConnect()\` - For modal control and connection state
- \`useAccount()\` - For account info and actions

## Key Concepts

- **Provider**: Wrap your app with \`WalletConnectProvider\` to enable wallet functionality
- **Hooks**: Use \`useWalletConnect\` and \`useAccount\` to interact with wallets
- **Modal**: The SDK provides a built-in wallet selection modal
- **Connection State**: Track connection status with \`isConnected\`

## Next Steps

- Explore the \`useWalletConnect\` hook for connection management
- Explore the \`useAccount\` hook for account information and signing
- Check out the EVM Test Functions for chain-specific operations
`;export{n as default};
