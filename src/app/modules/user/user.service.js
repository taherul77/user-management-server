const User = require("./user.model");

exports.getAllUsers = async () => {
    const users = await User.find({});
    const total = await User.countDocuments();

    return {
        users,
        total,
    };
};

exports.getUserByEmail = async (email) => {
    const result = await User.findOne({ email });
    return result;
};

exports.createUser = async (name, email, phone) => {
    const newUser = { name, email, phone };
    const result = await User.create(newUser);
    return result;
};

exports.updateUser = async (id, updatedData) => {
    const result = await User.findOneAndUpdate({ _id: id }, updatedData, {
        new: true,
    });
    return result;
};

exports.deleteUser = async (id) => {
  const result = await User.findByIdAndDelete(id);
  return result;
};
