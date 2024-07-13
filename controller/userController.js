import User from "../models/usersModel.js";

export async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
}

export async function getUserById(req, res) {
  try {
    let user = await User.findById(req?.params?.id).lean();
    console.log(user);
    if(user === null){
      res.status(404).json({message: "user not found"})
    }else{
      res.status(200).json(user);
    }
    } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
};

export async function createUser(req, res) {
  try {
    const user = await User.create(req?.body);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
};

export async function updateUser(req, res) {
  console.log(req);
  try {
    let updatedUser = await User.findByIdAndUpdate(req?.params?.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
};

export async function deleteUser(req, res) {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(204);
  } catch (error) {
    console.log("Error creating user:", error);

    res.status(500).json({ message: "Internal Server Error" });
  }
}
