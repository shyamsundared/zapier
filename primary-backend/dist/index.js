"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const user_js_1 = require("./Router/user.js");
const zap_js_1 = require("./Router/zap.js");
app.use('/api/v1/user', user_js_1.userRouter);
app.use('/api/v1/zap', zap_js_1.zapRouter);
app.listen(3001, () => {
    console.log("server runnign");
});
//# sourceMappingURL=index.js.map