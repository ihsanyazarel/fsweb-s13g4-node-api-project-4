const userNameValidation = (req, res, next) => {
  try {
    const { username } = req.body;
    username
      ? next()
      : res.status(400).json({ message: "username bilgisi eksik" });
  } catch (error) {
    next(error);
  }
};
const passwordValidation = (req, res, next) => {
    try {
        const { password } = req.body;
        password
          ? next()
          : res.status(400).json({ message: "password bilgisi eksik" });
      } catch (error) {
        next(error);
      }
};

module.exports = { userNameValidation, passwordValidation };
