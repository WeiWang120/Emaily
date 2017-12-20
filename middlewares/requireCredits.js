module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.send({ error: "Not enough credits!" }).status(403);
  }
  next();
}
