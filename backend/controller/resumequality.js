const calculateResumeQualityScore = () => {
  const randomScore = Math.floor(Math.random() * (70 - 50 + 1) + 50); // for 50-70
  return randomScore;
};

const getResumeQualityScore = (req, res) => {
  setTimeout(() => {
    const qualityScore = calculateResumeQualityScore();
    res.send(`your Resume Score: ${qualityScore}`);
  }, 1000);
};

module.exports = {
  getResumeQualityScore,
};
