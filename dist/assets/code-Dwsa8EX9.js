const n=`# Sign Typed Data - Code Example

## Using @tomo-inc/wallet-connect-kit

\`\`\`typescript
import { useAccount } from "@tomo-inc/wallet-connect-kit";
import { fromHex } from "viem";

function Example() {
  const { currentProvider, address } = useAccount();

  const signTypedData = async () => {
    if (!currentProvider || !address) return;
    try {
      const chainIdHex = (await currentProvider.request({ method: "eth_chainId" })) || "0x1";
      const chainId = fromHex(chainIdHex as \`0x\${string}\`, "number");

      const types = {
        EIP712Domain: [
          { name: "name", type: "string" },
          { name: "version", type: "string" },
          { name: "chainId", type: "uint256" },
          { name: "verifyingContract", type: "address" },
        ],
        Person: [
          { name: "name", type: "string" },
          { name: "wallet", type: "address" },
        ],
        Mail: [
          { name: "from", type: "Person" },
          { name: "to", type: "Person" },
          { name: "contents", type: "string" },
        ],
      };

      const domain = {
        name: "Ether Mail",
        version: "1",
        chainId: chainId,
        verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
      };

      const message = {
        from: {
          name: "Cow",
          wallet: "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826",
        },
        to: {
          name: "Bob",
          wallet: "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB",
        },
        contents: "Hello, Bob!",
      };

      const data = {
        types,
        primaryType: "Mail",
        domain,
        message,
      };

      const signature = await currentProvider.request({
        method: "eth_signTypedData_v4",
        params: [address, JSON.stringify(data)],
      });

      console.log("Typed data signature:", signature);
    } catch (error) {
      console.error("Sign typed data failed:", error);
    }
  };

  return (
    <button onClick={signTypedData}>
      Sign Typed Data
    </button>
  );
}
\`\`\`

## Simple Example

\`\`\`typescript
const typedData = {
  types: {
    EIP712Domain: [{ name: "name", type: "string" }],
    Message: [{ name: "content", type: "string" }],
  },
  primaryType: "Message",
  domain: { name: "MyApp" },
  message: { content: "Hello World" },
};

const signature = await currentProvider.request({
  method: "eth_signTypedData_v4",
  params: [address, JSON.stringify(typedData)],
});
\`\`\`
`;export{n as default};
