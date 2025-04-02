import {Router} from 'express';
import cors from 'cors';

// export default (router: Router): void => {
//     const r = Router();
//     r.use(cors({
//         origin: '*', // 모든 origin 허용
//     }));
//
//     router.use('/', r);
// }

//
const allowedOrigins = [
    "https://iq6900.com",
    "https://elizacodein.com",
    "https://eliza-codein.pages.dev",
    "https://testbrowserforiq.web.app"


];
allowedOrigins.push('http://localhost:3000');
allowedOrigins.push('http://127.0.0.1:3000');
//     const allowedOrigins = [
//         "*"
//     ];

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
            methods: ['GET', 'POST'],
            preflightContinue: false,
            optionsSuccessStatus: 204
        })
    );

    router.use('/', r);
}