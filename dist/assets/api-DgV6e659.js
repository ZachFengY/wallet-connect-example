const n=`# Close Wallet Modal

## Description

Closes the wallet connection modal if it is currently open.

## Method

\`closeModal()\`

## Source

\`useWalletConnect()\` hook from \`@tomo-inc/wallet-connect-kit\`

## Parameters

None

## Returns

\`void\` - No return value

## Usage

\`\`\`typescript
import { useWalletConnect } from "@tomo-inc/wallet-connect-kit";

function ModalControls() {
  const { openModal, closeModal, isOpenModal } = useWalletConnect();

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpenModal && (
        <button onClick={closeModal}>Close Modal</button>
      )}
    </div>
  );
}
\`\`\`

## Related Methods

- \`openModal()\` - Opens the modal
- \`isOpenModal\` - Boolean state indicating if modal is open
`;export{n as default};
