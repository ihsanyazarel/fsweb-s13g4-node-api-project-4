const router = require("express").Router();
const usersModel = require("./usersModel");
const middleware = require("./usersMiddleware");


router.get("/users", (req,res, next)=>{
    try {
        const allUsers = usersModel.getAllUsers();
        res.json(allUsers);
    } catch (error) {
        next(error);
    }
});
router.post("/register",middleware.userNameValidation, middleware.passwordValidation, (req,res, next)=>{
    try {
        const newUser = usersModel.insertUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
});
router.post("/login", middleware.userNameValidation, middleware.passwordValidation, middleware.findUserValidation, (req,res, next)=>{
    try {
        res.json({message: `Sayın ${req.body.username}, hoşgeldiniz...`});
    } catch (error) {
        next(error);
    }
});









module.exports = router;