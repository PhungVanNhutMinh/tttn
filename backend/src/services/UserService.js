const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const { generalAccessToken, generalRefreshToken } = require("./JwtService");

const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, password, confirmPassword, phone } = newUser

        try {
            const checkUser = await User.findOne({
                email: email
            })
            if (checkUser !== null) {
                resolve({
                    status: 'Err',
                    message: 'the email is already'
                })
            }
            const hash = await bcrypt.hash(password, 10);
            const createdUser = await User.create({
                name,
                email,
                password: hash,
                confirmPassword: hash,
                phone
            })
            if (createdUser) {
                return resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: createdUser
                });
            }
        } catch (e) {
            reject(e);
        }
    });
}
const loginUser = (userLogin) => {
    return new Promise(async (resolve, reject) => {
        const { email, password } = userLogin

        try {
            const checkUser = await User.findOne({ email: email })
            if (checkUser === null) {
                return resolve({
                    status: 'ERR',
                    message: 'the email is not defined'
                })
            }

            const comparePassword = bcrypt.compareSync(password, checkUser.password)
            if (!comparePassword) {
                return resolve({
                    status: 'ERR',
                    message: 'the password or user is incorrect'
                })
            }

            const access_token = await generalAccessToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            })
            const refresh_token = await generalRefreshToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            })
            return resolve({
                status: 'OK',
                message: 'SUCCESS',
                access_token,
                refresh_token,
            });
        } catch (e) {
            reject(e);
        }
    });
}

const updateUser = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await User.findById(id)
            if (checkUser === null) {
                return resolve({
                    status: 'OK',
                    message: 'the user is not defined'
                })
            }
            const updatedUser = await User.findByIdAndUpdate(id, data, { new: true })
            return resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedUser
            });
        } catch (e) {
            reject(e);
        }
    });
}

const deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await User.findById(id)
            if (checkUser === null) {
                return resolve({
                    status: 'OK',
                    message: 'the user is not defined'
                })
            }
            await User.findByIdAndDelete(id)
            return resolve({
                status: 'OK',
                message: 'DELETE SUCCESS'
            });
        } catch (e) {
            reject(e);
        }
    });
}

const getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allUser = await User.find()
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: 'allUser'
            });
        } catch (e) {
            reject(e);
        }
    });
}

const getDetailsUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findById(id)
            if (user === null) {
                return resolve({
                    status: 'OK',
                    message: 'the user is not defined'
                })
            }
            return resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: user
            });
        } catch (e) {
            reject(e);
        }
    });
}


module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllUser,
    getDetailsUser,

};