import cors from 'cors';
import express from 'express';
// 모든 출처 허용 + 모든 메서드 허용 + 모든 헤더 허용
const app = express();
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"], // 모든 메서드 허용
    allowedHeaders: ["*"], // 모든 헤더 허용
}));

app.options("*", cors());
// import {Router} from 'express';
// import cors from 'cors';
//
// const allowedOrigins = [
//     "https://iq6900.com",
//     "https://elizacodein.com",
//     "https://eliza-codein.pages.dev",
//     "https://testbrowserforiq.web.app",
//     "https://127.0.0.1:3000",
//     "https://localhost:3000"
// ];
//
// export default (router: Router): void => {
//     const r = Router();
//     r.use(
//         cors({
//             origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
//                 if (!origin || allowedOrigins.includes(origin)) {
//                     callback(null, true);
//                 } else {
//                     callback(new Error("Not allowed by CORS"));
//                 }
//             },
//         })
//     );
//
//     router.use('/', r);
// }