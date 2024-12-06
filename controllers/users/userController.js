import User from "../../model/User/User.js";
import bcrypt from "bcrypt";
import { createToken } from "../../utils/generateToken.js";

export const userRegisterCtrl = async (req, res) => {
  const {
    firstname,
    lastname,
    profilePhoto,
    email,
    password
  } = req.body
  try {
    const userFound = await User.findOne({ email });
    if (userFound) {
      return res.json({
        msg: 'User Already Exist'
      })
    }
    //TODO: Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create the user
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword
    });

    res.json({
      status: "sucess",
      data: user
    })
  } catch (error) {
    res.json(error.message)
  }
}

export const logginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (!userFound) {
      return res.json({
        msg: "Wrong login credentials"
      });
    }

    const isPasswordMatched = await bcrypt.compare(password, userFound.password);
    if (!userFound || !isPasswordMatched) {
      return res.json({
        msg: "Wrong login credentials"
      });
    }

    res.json({
      status: "success",
      data: {
        firstname: userFound.firstname,
        lastname: userFound.lastname,
        email: userFound.email,
        token: createToken(userFound._id)
      }
    });
  } catch (error) {
    res.json(error.message);
  }
}

export const userController = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "profile route",
    })
  } catch (error) {
    res.json(error.message)
  }
}

export const userProfile = async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findById(id);
    res.json({
      status: "success",
      data: user
    })
  } catch (error) {
    res.json(error.message)
  }
}

export const deleteUserbyID = async (req, res) => {
  try {
    const user = req.params
    res.json({
      status: "success",
      data: `delete user profile ${user.id}`,
    })
  } catch (error) {
    res.json(error.message)
  }
}

export const updateUserbyID = async (req, res) => {
  try {
    const user = req.params
    res.json({
      status: "success",
      data: `update user profile ${user.id}`,
    })
  } catch (error) {
    res.json(error.message)
  }
}
