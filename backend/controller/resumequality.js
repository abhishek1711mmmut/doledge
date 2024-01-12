const calculateResumeQualityScore = () => {
    // const randomScore = Math.floor(Math.random() * (100 - 70 + 1) + 70); //for 70-100
    const randomScore = Math.floor(Math.random() * (70 - 50 + 1) + 50); // for 50-70
    return randomScore;
  };
  
  const getResumeQualityScore = (req, res) => {
 
    setTimeout(() => {
      const qualityScore = calculateResumeQualityScore();
      res.json({ qualityScore });
    }, 15000); // 15 seconds delay
  };
  
  module.exports = {
    getResumeQualityScore,
  };
  