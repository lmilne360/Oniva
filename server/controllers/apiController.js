module.exports = {
  index: (req, res) => {
    res.status(200);
    res.send('Api is working from controller');
  },
};
