const { json } = require("express");
const { User } = require("../models/user");
const userHandlers = require("../handlers/userHandlers")

async function getUserListController (req, res) {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getUserByIdController (req, res) {
    try {
        const user = userHandlers.findUserById(req.params.id)
        if (user == null) {
          return res.status(404).send('User not found');
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function postUserNewController (req, res) {
    try {
        const { id, username, isAdmin, email, password } = req.body;
        await User.create({ id, username, isAdmin, email, password });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function putUserController (req, res) {
    const user = userHandlers.findUserById(req.params.id);
    if (user == null) {
        return res.status(404).send('User not found');
    }

    if (req.body.id != null) {
        user.id = req.body.id;
    }
    else {
        user.id = null;
    }

    if (req.body.username != null) {
        user.username = req.body.username;
    }
    else {
        user.username = null;
    }

    if (req.body.isAdmin != null) {
        user.isAdmin = req.body.isAdmin;
    }
    else {
        user.isAdmin = null;
    }

    if (req.body.email != null) {
        user.email = req.body.email;
    }
    else {
        user.email = null;
    }

    if (req.body.password != null) {
        user.password = req.body.password;
    }
    else {
        user.password = null;
    }
    try {
        user.save();
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function patchUserController (req, res) {
    const user = userHandlers.findUserById(req.params.id);
    if (user == null) {
        return res.status(404).send('User not found');
    }

    if (req.body.id != null) {
        user.id = req.body.id;
    }
    if (req.body.username != null) {
        user.username = req.body.username;
    }
    if (req.body.isAdmin != null) {
        user.isAdmin = req.body.isAdmin;
    }
    if (req.body.email != null) {
        user.email = req.body.email;
    }
    if (req.body.password != null) {
        user.password = req.body.password;
    }
    try {
        user.save();
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


async function deleteUserController(req, res) {
    try {
        const user = userHandlers.findUserById(req.params.id);
        if (user == null) {
            return res.status(404).send('User not found');
        }
        await user.remove();
        res.json({ DeletedUser: user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    getUserListController,
    getUserByIdController,
    postUserNewController,
    putUserController,
    patchUserController,
    deleteUserController
}