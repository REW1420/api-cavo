const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.updateUserByID = async (req, res) => {
  try {
    const user_id = req.query.id;
    //check if theres an ID in the query
    if (!user_id) {
      return res.status(401).json({ message: "ID vacío" });
    }

    const allUsersEmail = await User.find({ _id: { $ne: user_id } });
    const isEmailInDB = await checkIfEmailExists(allUsersEmail, req.body.email);
    const user = await User.findById(user_id);

    //check if the new email is no in the DB
    if (isEmailInDB) {
      return res
        .status(401)
        .json({ message: "El correo electrónico ya existe" });
    } else {
      //check if the user with the ID exist
      if (!user) {
        return res.status(401).json({ message: "Usuario no encontrado" });
      }

      //encrypt password
      if (req.body.password) {
        req.body.password = await encryptPassword(req.body.password);
      }

      //update user
      const updatedUser = await User.findByIdAndUpdate(user_id, req.body, {
        new: true,
      });

      return res
        .status(200)
        .json({ message: "Usuario actualizado.", ...updatedUser._doc });
    }
  } catch (error) {
    console.log(error);
    //return message if the ID fail the validation
    if (error.name === "CastError") {
      return res.status(400).json({ error: "ID de usuario no válido" });
    }
    res
      .status(500)
      .json({ error: `Error al actualizar usuario ${error.name}` });
  }
};
exports.deleteUserByID = async (req, res) => {
  try {
    const user_id = req.query.id;
    //check if theres an ID in the query

    if (!user_id) {
      return res.status(401).json({ message: "ID vacío" });
    }
    const user = await User.findByIdAndDelete(user_id);

    //check if the user with the ID exist
    if (!user) {
      return res.status(404).json(`No se ha usuario con el ID ${user_id}`);
    }
    //delete user
    return res.status(200).json({ message: "Usuario eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    //return message if the ID fail the validation
    if (error.name === "CastError") {
      return res.status(400).json({ error: "ID de usuario no válido" });
    }
    res.status(500).json({ error: `Error al eliminar usuario ${error.name}` });
  }
};
exports.listAllUsers = async (req, res) => {
  try {
    //get all users
    const users = await User.find({});
    //check if theres no user in the collection and return a message
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "Colección vacía" });
    }
    //return list of users
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

exports.createUser = async (req, res) => {
  try {
    //get de data from body
    const { full_name, email, password } = req.body;
    //check if email is already in DB
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      //if the email is already in DB we return a message
      return res
        .status(409)
        .json({ message: "Este correo ya esta registrado" });
    }

    //encrypt password
    const passwordHash = await encryptPassword(password);

    const user = new User({
      full_name,
      email,
      password: passwordHash,
    });

    await user.save();
    return res
      .status(200)
      .json({ message: "Nuevo usuario agregado", ...user._doc });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Error al agregar un nuevo usuario" });
  }
};

const checkIfEmailExists = async (allUsersEmail, newEmail) => {
  const existingEmails = allUsersEmail.map((user) => user.email);
  return existingEmails.includes(newEmail);
};
async function encryptPassword(password) {
  try {
    const passString = password.toString();
    const saltRounds = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(passString, saltRounds);

    return passwordHash;
  } catch (error) {
    throw error;
  }
}
