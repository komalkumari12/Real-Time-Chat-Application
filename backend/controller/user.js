const UserSchema = require("../model/user");

exports.login = async (req, res) => {
  try {
    const { username, password } = await UserSchema.find({});
    if (!username) {
      return res.status(404).json({
        message: "User not registered",
      });
    }

    //password not match condition

    // user logged in
  } catch (error) {
    return res.status().json({
      error: error.message,
    });
  }
};

exports.signup = async (req, res) => {
  try {
    const user = await UserSchema.create(req.body);

    return res.status().json({
      data: user,
      message: "User added successfully",
    });
  } catch (error) {
    return res.status().json({
      message: error.message,
    });
  }
};
