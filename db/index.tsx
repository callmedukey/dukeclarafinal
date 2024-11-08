import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

const drizzleClient = () => drizzle({ client: sql });

export default drizzleClient;
