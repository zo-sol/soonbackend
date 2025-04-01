import { PublicKey } from "@solana/web3.js";

export const configs = {
    network: "https://rpc.testnet.soo.network/rpc",
    dbSeed: process.env.DB_SEED || '',
    dataSeed: process.env.DATA_SEED || '',
    port: process.env.MYPORT || 8080,
    mongoUri: process.env.MONGO_URL || '',
}

export const constants = {
    expectedReceiver: new PublicKey("9q1FEzFWr39bwmYEofu7DTX2qUAJK6oiytavxiqqPVmA"),
    programId: new PublicKey("Bwe1NNEGgxPrTzb1FXGcdfUTmMKfinfJ5fkb48hEUfcw") //testnet
   // programId: new PublicKey("HyPbmCVDcEu1vNHzPCghb9skQEbam2LBQEk9BFZQphHQ")//mainnet

   // programId: new PublicKey("6ryCoEffUvi484etNsgMMQSPWNUod9YAJqTcKEPHnoPh")//bnb test




}