exports.getBookPackage = async (req, res) => {
  try {
    res.status(201).json({
      message: 'New booking added for the POST request',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
