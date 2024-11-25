const express = require("express");
const zod = require("zod");
const app = express();
/*
{
    email: string => email
    password: atleast 8 letters
    country: "IN" or "US"
} 
*/

const schema = zod.object({
    email: z.string().email(),
    password: z.string().min(8),
    country: z.literal("IN").or(z.literal("US")),
    kidneys: z.array(z.number())
})