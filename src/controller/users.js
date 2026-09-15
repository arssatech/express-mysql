const getAllUsers = (req, res) => {
    res.json({
        Message: 'GET all users success',
    });
}

const createNewUser = (req, res) => {
    res.json({
        Message: 'CREATE new users success',
    });
    next();
};

module.exports = {
    getAllUsers,
    createNewUser,
};