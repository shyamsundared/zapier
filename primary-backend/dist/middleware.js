"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authmiddleware = authmiddleware;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_js_1 = require("./config.js");
function authmiddleware(req, res, next) {
    const token = req.headers.authorization;
    try {
        const payload = jsonwebtoken_1.default.verify(token, config_js_1.JWT_SECRET);
        //@ts-ignore
        req.id = payload.id;
        next();
    }
    catch (error) {
        res.status(403).json({
            message: "not loged in"
        });
    }
}
//# sourceMappingURL=middleware.js.map