const path = require("path");
const {
  OPCUAServer,
  Variant,
  DataType,
  StatusCodes
} = require("node-opcua");

// Create server
const server = new OPCUAServer({
  port: 4840,
  resourcePath: "/UA/MyServer",
  buildInfo: {
    productName: "MyTestServer",
    buildNumber: "1",
    buildDate: new Date()
  },
  pkiFolder: path.join(__dirname, "pki") // Let OPCUAServer handle certs
});

let Level = 22.5;

server.initialize(() => {
  const addressSpace = server.engine.addressSpace;
  const namespace = addressSpace.getOwnNamespace();

  const device = namespace.addObject({
    organizedBy: addressSpace.rootFolder.objects,
    browseName: "MyDevice"
  });

  namespace.addVariable({
    componentOf: device,
    browseName: "Temperature",
    nodeId: "ns=1;s=Temperature",
    dataType: "Double",
    value: {
      get: () => new Variant({ dataType: DataType.Double, value: temperature }),
      set: (variant) => {
        temperature = variant.value;
        return StatusCodes.Good;
      }
    }
  });

  server.start(() => {
    const endpointUrl = server.endpoints[0].endpointDescriptions()[0].endpointUrl;
    console.log("🚀 OPC UA Server is running at:", endpointUrl);
  });
});
