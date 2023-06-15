const router = require("express").Router();
const usersModel = require("./usersModel");


router.get("/users", (req,res, next)=>{
    try {
        const allUsers = usersModel.getAllUsers();
        res.json(allUsers);
    } catch (error) {
        next(error);
    }
});
router.post("/register", (req,res, next)=>{
    try {
        
    } catch (error) {
        next(error);
    }
});
router.post("/login", (req,res, next)=>{
    try {
        
    } catch (error) {
        next(error);
    }
});









module.exports = router;