const validateAssignmentData = (req, res, next) => {
  const newAssignment = req.body;

  if (newAssignment.title.length > 35) {
    return res.json({ message: "Title must not be over 35 characters" });
  }
  if (newAssignment.description.length > 150) {
    return res.json({ message: "Description must not exceed 150 characters" });
  }
  if (
    !Array.isArray(newAssignment.categories) ||
    newAssignment.categories.length === 0
  ) {
    return res.json({
      message: "Categories must be an array with at least 1 value",
    });
  }

  next();
};
export default validateAssignmentData;
