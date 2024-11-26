export const createCategorie = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "category created",
    });
  } catch (error) {
    res.json(error.message);
  }
}

export const getCategorie = async (req, res) => {
  const category = req.params;
  try {
    res.json({
      status: "success",
      data: `category: ${category.id} route`,
    })
  } catch (error) {
    res.json(error.message);
  }
}

export const deleteCategorie = async (req, res) => {
  const category = req.params;
  try {
    res.json({
      status: "success",
      data: `category ${category.id} deleted`,
    })
  } catch (error) {
    res.json(error.message);
  }
}

export const updateCategorie = async (req, res) => {
  const category = req.params;
  try {
    res.json({
      status: "success",
      data: `category ${category.id} update`,
    })
  } catch (error) {
    res.json(error.message);
  }
}
