import {Router} from 'express';
import cors from 'cors';
//
// const allowedOrigins = [
//     "https://iq6900.com",
//     "https://elizacodein.com",
//     "https://eliza-codein.pages.dev",
//     "https://testbrowserforiq.web.app"
//
// ];
const allowedOrigins = [
    "*"
];

export default (router: Router): void => {
    const r = Router();
    r.use(
        cors({
            origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
                if (!origin || allowedOrigins.includes(origin)) {
                    callback(null, true);
                } else {
                    callback(new Error("Not allowed by CORS"));
                }
            },
        })
    );

    router.use('/', r);
}
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