export const userRegisterCtrl = async (req, res) => {
  try {
    res.json({
      status: "sucess",
      data: "user register"
    })
  } catch (error) {
    res.json(error.message)
  }
}

export const logginUser = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user login",
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
  try {
    const user = req.params;
    res.json({
      status: "success",
      data: `profile of user ${user.id}`,
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
