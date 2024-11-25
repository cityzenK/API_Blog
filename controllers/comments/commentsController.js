export const createComment = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "comment created",
    });
  } catch (error) {
    res.json(error.message);
  }
}

export const getCommentByID = async (req, res) => {
  const post = req.params;
  try {
    res.json({
      status: "success",
      data: `comment ${post.id} getted`,
    });
  } catch (error) {
    res.json(error.message);
  }
}

export const deleteCommnetByID = async (req, res) => {
  const comment = req.params;
  try {
    res.json({
      status: "success",
      data: `comment ${comment.id} deleted`,
    });
  } catch (error) {
    res.json(error.message);
  }
}

export const updateComment = async (req, res) => {
  const comment = req.params;
  try {
    res.json({
      status: "success",
      data: `comment ${comment.id} updated`,
    });
  } catch (error) {
    res.json(error.message);
  }
}
