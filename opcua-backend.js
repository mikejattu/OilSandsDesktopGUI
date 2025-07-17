const {
  OPCUAClient,
  AttributeIds,
  ClientSession,
  DataType
} = require('node-opcua');

const endpointUrl = "opc.tcp://localhost:4840"; // or your actual OPC UA server URL
let session;

(async () => {
  try {
    const client = OPCUAClient.create({ endpointMustExist: false });
    await client.connect(endpointUrl);
    session = await client.createSession();
    console.log("Connected to OPC UA Server.");
  } catch (err) {
    console.error("OPC UA connection failed:", err);
  }
})();

async function readNode(nodeId) {
  if (!session) return "No session";
  const dataValue = await session.read({ nodeId, attributeId: AttributeIds.Value });
  return dataValue.value.value;
}

async function writeNode(nodeId, value) {
  if (!session) return "No session";
  await session.writeSingleNode(nodeId, {
    value: {
      dataType: DataType.Double, // Adjust as needed
      value: parseFloat(value),
    }
  });
  return "Write successful";
}

module.exports = { readNode, writeNode };
