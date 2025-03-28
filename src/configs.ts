import { PublicKey } from "@solana/web3.js";

export const configs = {
    network: process.env.NETWORK_URL || '',
    dbSeed: process.env.DB_SEED || '',
    dataSeed: process.env.DATA_SEED || '',
    port: process.env.MYPORT || 8080,
    mongoUri: process.env.MONGO_URL || '',
}

export const constants = {
    expectedReceiver: new PublicKey("4w2UTBBaBfC16fuqk7nCr58FTx8mwqK3cimeT5uvy9Xh"),
    programId: new PublicKey("HyPbmCVDcEu1vNHzPCghb9skQEbam2LBQEk9BFZQphHQ")
}