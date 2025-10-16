"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const index_js_1 = require("../types/index.js");
const index_js_2 = require("../db/index.js");
const middleware_js_1 = require("../middleware.js");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_js_1 = require("../config.js");
const router = (0, express_1.Router)();
router.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    console.log(body);
    const parsed = index_js_1.signupschema.safeParse(body);
    if (!parsed.success) {
        return res.status(400).json({
            message: "password and email requrie atleat 6 chars"
        });
    }
    const userexists = yield index_js_2.client.user.findFirst({
        where: {
            email: parsed.data.username,
        }
    });
    if (userexists) {
        return res.json({
            message: "user already exists"
        });
    }
    const user = yield index_js_2.client.user.create({
        data: {
            email: parsed.data.username,
            password: parsed.data.password,
            name: parsed.data.name
        }
    });
    return res.json({
        message: " account created successfully"
    });
}));
router.post('/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const parsed = index_js_1.signinschema.safeParse(body);
    if (!parsed.success) {
        return res.status(413).json({
            message: "invalid credentials"
        });
    }
    const user = yield index_js_2.client.user.findFirst({
        where: {
            email: parsed.data.username,
            password: parsed.data.password
        }
    });
    if (!user) {
        return res.status(403).json({
            message: "invalid credentials"
        });
    }
    const token = jsonwebtoken_1.default.sign({
        id: user.id
    }, config_js_1.JWT_SECRET);
    res.json({
        token: token
    });
}));
router.get('/', middleware_js_1.authmiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const id = req.id;
    const user = yield index_js_2.client.user.findFirst({
        where: {
            email: req.body.username,
        },
        select: {
            email: true,
            name: true
        }
    });
    res.json({
        user
    });
}));
exports.userRouter = router;
//# sourceMappingURL=user.js.map