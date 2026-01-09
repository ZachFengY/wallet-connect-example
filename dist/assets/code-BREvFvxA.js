const n=`# Close Wallet Modal - Code Example

## Basic Usage

\`\`\`typescript
import { useWalletConnect } from "@tomo-inc/wallet-connect-kit";

function CloseModalButton() {
  const { closeModal, isOpenModal } = useWalletConnect();

  if (!isOpenModal) {
    return <div>Modal is not open</div>;
  }

  return <button onClick={closeModal}>Close Modal</button>;
}
\`\`\`

## With Conditional Rendering

\`\`\`typescript
import { useWalletConnect } from "@tomo-inc/wallet-connect-kit";

function ModalControls() {
  const { openModal, closeModal, isOpenModal } = useWalletConnect();

  return (
    <div>
      {isOpenModal ? (
        <button onClick={closeModal}>Close Modal</button>
      ) : (
        <button onClick={openModal}>Open Modal</button>
      )}
    </div>
  );
}
\`\`\`

## Complete Example

\`\`\`typescript
import { useWalletConnect } from "@tomo-inc/wallet-connect-kit";
import { useEffect } from "react";

function ModalManager() {
  const { openModal, closeModal, isOpenModal } = useWalletConnect();

  useEffect(() => {
    // Auto-close modal after 5 seconds if open
    if (isOpenModal) {
      const timer = setTimeout(() => {
        closeModal();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpenModal, closeModal]);

  return (
    <div>
      <div>Modal Status: {isOpenModal ? "Open" : "Closed"}</div>
      <button onClick={openModal}>Open</button>
      {isOpenModal && (
        <button onClick={closeModal}>Close</button>
      )}
    </div>
  );
}
\`\`\`
`;export{n as default};
