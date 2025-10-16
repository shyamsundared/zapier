"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
//app.use(cors())
const user_js_1 = require("./Router/user.js");
const zap_js_1 = require("./Router/zap.js");
app.use('/api/v1/user', user_js_1.userRouter);
app.use('/api/v1/zap', zap_js_1.zapRouter);
app.listen(3000, () => {
    console.log("server runnign");
});
//# sourceMappingURL=index.js.map