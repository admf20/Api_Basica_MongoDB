const UserCtr = {}

const UserModel = require('../models/users');

UserCtr.getUser = async (req,res) => {
    const Users = await UserModel.find();
    res.json({
        status: 204,
        message: "Usuarios Encontrados",
        data: Users
    });
}

UserCtr.getUsers = async (req,res) => {
    const Users = await UserModel.findById(req.params.id)
    res.json({
        status: 204,
        message: "Usuarios Encontrado",
        data: Users
    });
}

UserCtr.CreateUser = async (req,res) => {
    const {name, username, password} = req.body;

    const NewUser = new UserModel({
        name,
        username,
        password
    });
    await NewUser.save();
    res.json({
        status: 201,
        message: "Usuario Creado",
    });
}

UserCtr.UpdateUser = async (req,res) => {
    const {name, username, password} = req.body;

    await UserModel.findOneAndUpdate({_id: req.params.id}, {
        name,
        username,
        password
    });
    res.json({
        status: 204,
        message: "Usuario Actualizado",
    });
}

UserCtr.DeleteUser = async (req,res) => {
    await UserModel.findByIdAndDelete(req.params.id)
    res.json({
        status: 204,
        message: "Usuario Eliminado"
    });
}

module.exports = UserCtr;