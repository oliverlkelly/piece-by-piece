const router = require('express').Router();
const { Challenge } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE CHALLENGE
router.post('/', withAuth, async (req, res) => {
   
    try {
        const newChallenge = await Challenge.create({
            title: req.body.title,
            description: req.body.description,
            starting_date: req.body.starting_date,
            ending_date: req.body.ending_date,
            repetitions: req.body.repetitions,
            user_id: req.session.user_id
        });
        console.log(newChallenge);
        res.json(newChallenge);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/', withAuth, async (req, res) => {
    try {
        const updatedChallenge = await Post.update(
            {
                title: req.body.title,
            description: req.body.description,
            starting_date: req.body.starting_date,
            ending_date: req.body.ending_date,
            repetitions: req.body.repetitions,
            user_id: req.session.user_id
            },
            {
                where: {
                    id: req.params.id
                }

            });
        if (!updatedChallenge) {
            res.status(404).json({ message: 'No challenge found with this id' });
            return;
        }
        res.status(200).json(updatedChallenge);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const challengeData = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!challengeData) {
            res.status(404).json({ message: 'No challenge found with this id!' });
            return;
        }

        res.status(200).json(challengeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;