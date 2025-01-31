import db from "./db";
import { executeAction } from "./executeAction";
import { schema } from "./schema";
import bcrypt from "bcrypt";

const signUp = async (formData: FormData) => {
  return executeAction({
    actionFn: async () => {
      const email = formData.get("email");
      const password = formData.get("password");
      const validateData = schema.parse({ email, password });
      
      // Hacher le mot de passe avec bcrypt
      const hashedPassword = await bcrypt.hash(validateData.password, 10);
      
      await db.user.create({
        data: {
          email: validateData.email.toLowerCase(),
          password: hashedPassword,
        },
      });
    },
  });
};

export {  signUp };
