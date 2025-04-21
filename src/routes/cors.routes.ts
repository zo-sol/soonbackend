import { Router } from 'express';
import cors from 'cors';

const allowedOrigins = [
    "https://iq6900.com",
    "https://elizacodein.com",
    "https://eliza-codein.pages.dev",
    "https://testbrowserforiq.web.app",
    "https://soon-iq-frontend.pages.dev",
    "https://bnb.iq6900.com",
    "https://soon.iq6900.com",
];

// CORS 옵션 명시
const corsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true, // 브라우저 credentials 포함 요청 지원
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
    optionsSuccessStatus: 204
};

export default (router: Router): void => {
    const r = Router();

    // 프리플라이트 요청 처리
    r.options('*', cors(corsOptions));

    // CORS 미들웨어 전체 라우터에 적용
    r.use(cors(corsOptions));

    // 이후 실제 API 등록
    router.use('/', r);
};