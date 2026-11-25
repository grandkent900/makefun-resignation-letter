import { mkdirSync, writeFileSync } from "node:fs";

const letter = "After three years of capping you at 100 requests a minute, I am capping myself at zero.";

mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", letter + "\n");
