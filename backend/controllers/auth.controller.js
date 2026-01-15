import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hash = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hash,
    });

    res.sendStatus(201);
  } catch (err) {
    res.status(500).json({ message: "Register failed" });
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.sendStatus(401);

    const ok = await bcrypt.compare(req.body.password, user.password);
    if (!ok) return res.sendStatus(401);

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET
    );

    res
      .cookie("token", token, { httpOnly: true })
      .sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
};
