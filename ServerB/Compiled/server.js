"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const port = 4000;
const app = express();
app.listen(port, () => {
    console.log(`SERVER B STARTED ON ${port}`);
});
//# sourceMappingURL=server.js.map