const router = require('express').Router();
const { Score } = require('../../models');


router.get('/:id', async (req, res) => {
    // find all scores for a user by user `id`
    
    try {
      const challengeDataById = await Score.findAll({
        where: { user_id: req.params.id },
        
      })
      if (!challengeDataById) {
        res.status(404).json({ message: 'No challenge found with that id!' });
        return;
      }
      res.status(200).json(challengeDataById);
  
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/',  async (req, res) => {
    // Add a score for a user challenge
    try {
        const newScore = await Score.create(
            {
            user_score: req.body.user_score,
            challenge_id:  req.body.challenge_id,
            user_id: req.body.user_id
        }

        );
       
        console.log(newScore);
        res.status(200).json(newScore);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id',  async (req, res) => {
    // update a score for a user challenge
    try {
        const updatedScore = await Score.update(req.body ,
        {
            where: {
                user_id: req.params.id
            }

        });
        if (!updatedScore) {
            res.status(404).json({ message: 'No score for this user' });
            return;
        }
        console.log(updatedScore);
        res.status(200).json(updatedScore);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id',  async (req, res) => {
    // Add a score for a user challenge
    try {
        const deletedScore = await Score.destroy(
        {
            where: {
                user_id: req.params.id
            }

        });
        if (!deletedScore) {
            res.status(404).json({ message: 'No score for this user' });
            return;
        }
        
        res.status(200).json(deletedScore);
    } catch (err) {
        res.status(400).json(err);
    }
});

  module.exports = router; 
