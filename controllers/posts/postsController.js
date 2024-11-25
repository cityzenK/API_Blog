export const createPost = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "post created"
    });
  } catch (error) {
    res.json(error.message);
  }
}

export const getPostByID = async (req, res) => {
  const post = req.params;
  try {
    res.json({
      status: "sucess",
      data: `get post: ${post.id}`,
    });
  } catch (error) {
    res.json(error.message);
  }
}

export const getAllPosts = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "get all posts",
    });
  } catch (error) {
    res.json(error.message);
  }
}

export const deletePost = async (req, res) => {
  const post = req.params;
  try {
    res.json({
      status: "success",
      data: `post ${post.id} deleted`,
    });
  } catch (error) {
    res.json(error.message);
  }
}

export const updatePostbyID = async (req, res) => {
  const post = req.params;
  try {
    res.json({
      status: "sucess",
      data: `post ${post.id} updated`
    });
  } catch (error) {
    res.json(error.message);
  }
}
