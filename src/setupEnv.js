const { TextEncoder, TextDecoder } = require("util");

// Define TextEncoder globally before react-router-dom is imported
Object.assign(global, { TextDecoder, TextEncoder });
