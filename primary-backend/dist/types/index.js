"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zapcreateschema = exports.signinschema = exports.signupschema = void 0;
const zod_1 = require("zod");
exports.signupschema = zod_1.z.object({
    name: zod_1.z.string().min(3),
    username: zod_1.z.string().min(5),
    password: zod_1.z.string().min(6)
});
exports.signinschema = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string()
});
exports.Zapcreateschema = zod_1.z.object({
    availableTriggerId: zod_1.z.string(),
    triggerMetadata: zod_1.z.any().optional(),
    actions: zod_1.z.array(zod_1.z.object({
        availableActionId: zod_1.z.string(),
        actionMetadata: zod_1.z.any().optional()
    }))
});
//# sourceMappingURL=index.js.map