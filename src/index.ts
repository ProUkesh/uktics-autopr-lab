const express = require('express');
const healthzRoute = require('./routes/healthz');

const app = express();

app.use('/api/healthz', healthzRoute);

const __uktics_test__: number = 0;

// Existing content of src/index.ts
// ...

void __uktics_test__;

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});