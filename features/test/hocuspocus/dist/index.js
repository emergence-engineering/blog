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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_ws_1 = __importDefault(require("express-ws"));
const server_1 = require("@hocuspocus/server");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = parseInt((_a = process.env.PORT) !== null && _a !== void 0 ? _a : "8080");
// const dbConfig: DatabaseConfiguration = {
//   fetch: async (data: fetchPayload) => {
//   },
//   store: (): void => {
//     // we do nothing here, the user will store the data on click events
//   }
// };
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    // Configure hocuspocus
    const server = server_1.Server.configure({
        port: PORT,
        extensions: [
        // new Database(dbConfig)
        ]
    });
    const { app } = (0, express_ws_1.default)((0, express_1.default)());
    app.get("/", (request, response) => {
        response.send("Hello World!");
    });
    app.ws("/collaboration/:document", (websocket, request) => {
        console.log("asdasd");
        server.handleConnection(websocket, request, request.params.document);
    });
    app.listen(PORT, () => {
        console.log(`App is listening on ${PORT}`);
    });
});
startServer();
