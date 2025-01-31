import { z } from "zod";
const schema = z.object({
    email: z.string().email(),
    password: z.string().min(4),

})

export { schema };