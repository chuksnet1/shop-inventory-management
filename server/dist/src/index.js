"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const dashboardRoutes_1 = __importDefault(require("./routes/dashboardRoutes"));
const productRoute_1 = __importDefault(require("./routes/productRoute"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const expenseRoute_1 = __importDefault(require("./routes/expenseRoute"));
// CONFIGURATION
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use((0, morgan_1.default)("common"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
/*ROUTES */
app.use("/dashboard", dashboardRoutes_1.default); // http://localhost:8000/dashboard
app.use("/product", productRoute_1.default);
app.use("/user", userRoute_1.default);
app.use("/expense", expenseRoute_1.default);
/**SERVER */
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
