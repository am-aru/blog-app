import express from "express";
import { Router } from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controller/userController.js";

const userRouter = Router();


userRouter.get("/" , getUsers);
userRouter.get("/:id" , getUserById);
userRouter.post("/" , createUser);
userRouter.put("/:id" , updateUser);
userRouter.delete("/:id" , deleteUser);

export default userRouter;