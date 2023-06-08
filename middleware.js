const authPage = (Permission) => {
  return (req, res, next) => {
    const userRole = req.body.role;
    if (Permission.includes(userRole)) {
      next();
    } else {
      res
        .status(401)
        .json({ message: "You are not authorized to access this page" });
    }
  };
};
const authCourse = (req, res, next) => {
  const courseNumber = parseInt(req.params.number);
  if (req.body.courses.includes(courseNumber)) {
    next();
  } else {
    res
      .status(401)
      .json({ message: "You are not authorized to access this course" });
  }
};
module.exports = { authPage, authCourse };
