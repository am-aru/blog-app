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
    res.json(user);
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
  console.log(req);
  try {
    await User.findByIdAndDelete(req?.params?.id);
    res.status(204).json({ isDeleted: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
};
