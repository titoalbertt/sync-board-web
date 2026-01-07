import * as schema from "./schema.ts";
import { privateEnv } from "../config/privateEnv.ts";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

const pool = new pg.Pool({ connectionString: privateEnv.DATABASE_URL });
const database = drizzle(pool, { schema, logger: true });

export { database, pool };
