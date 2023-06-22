const userService = require("./user.service");

exports.getAllUsers = async (req, res) => {
    try {
        const result = await userService.getAllUsers();
        res.status(200).json({
            success: true,
            message: "Successfully loaded data",
            meta: result.total,
            data: result.users,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to load users",
        });
    }
};

exports.createUser = async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400).json({
            success: false,
            message: "All fields are required",
        });
        return;
    }

    try {
        const alreadyExists = await userService.getUserByEmail(email);

        if (alreadyExists) {
            res.status(400).json({
                success: false,
                message: "User already exists",
            });
            return;
        }

        const result = await userService.createUser(name, email, phone);
        res.status(200).json({
            success: true,
            message: "User created successful",
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to create user",
        });
    }
};


exports.updateUser = async (req, res) => {
    try {
    const { id } = req.params
    const updatedData = req.body

    const result = await userService.updateUser(id, updatedData);
    res.status(200).json({
      success: true,
      message: 'User update successful',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to update',
    })
  }
};

exports.deleteUser = async (req, res) => {
try {
    const { id } = req.params
    const result = await userService.deleteUser(id);
    res.status(200).json({
      success: true,
      message: 'Successfully delete user',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to delete',
    })
  }
};
