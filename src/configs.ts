import { PublicKey } from "@solana/web3.js";

export const configs = {
    network: process.env.NETWORK_URL ,
    dbSeed: process.env.DB_SEED || '',
    dataSeed: process.env.DATA_SEED || '',
    port: process.env.MYPORT || 8080,
    mongoUri: process.env.MONGO_URL || '',
}

export const constants = {
    expectedReceiver: new PublicKey("8t7MxB6WaYCMmo9xDd2Dq22rchLxZMagWQMC7YpeYfKp"),
    programId: new PublicKey("3zupncdFe5CDG1bnVFbbKbMC8zr8j1VoyyBcWQwoA2dc") //testnet

}