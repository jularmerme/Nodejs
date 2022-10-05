exports.getPackages = async (req, res) => {
  try {
    res.status(200).json({
      message: 'You can nos get the requested packages for your request',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.invalid = async (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: 'Invalid Path',
  });
};
