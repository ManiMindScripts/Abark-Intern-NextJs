import bcrypt from "bcryptjs";
import { RegisterDTO, LoginDTO } from "./auth.dto";
import * as repo from "./auth.repository";

export const registerUser = async (data: RegisterDTO) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  return repo.createUser({ ...data, password: hashedPassword });
};

export const validateUser = async (data: LoginDTO) => {
  const user = await repo.findUserByEmail(data.email);
  if (!user) return null;

  const isValid = await bcrypt.compare(data.password, user.password);
  if (!isValid) return null;

  return user;
};