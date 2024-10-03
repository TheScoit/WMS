

import { neon } from "@neondatabase/serverless";

import { drizzle } from "drizzle-orm/neon-http"; 

// import all (*) schemas from schema table
import * as schema from './schema'

const sql = neon("postgresql://Wastesystem_owner:BsPF1CKNV8Rj@ep-gentle-cherry-a58juwxc.us-east-2.aws.neon.tech/Wastesystem?sslmode=require")

export const db = drizzle(sql,{schema})

