const router = require('express').Router();
const { Challenge } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    // find all challenges
    try {
        const challengeData = await Challenge.findAll()
        const challenges = challengeData.map(challenge => challenge.get({ plain: true }));


        res.status(200).json(challenges);
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/:id', async (req, res) => {
   
    // find a challenge by id
    try {
        const challengeDataById = await Challenge.findOne({
            where: { id: req.params.id },
    
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


// CREATE CHALLENGE
router.post('/', async (req, res) => {

    try {
        const newChallenge = await Challenge.create(req.body);
        console.log(newChallenge);
        res.status(200).json(newChallenge);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update a challenge
router.put('/:id',  async (req, res) => {
    try {
        const updatedChallenge = await Challenge.update(
            {
                title: req.body.title,
                description: req.body.description,

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

// delete a challenge
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const challengeData = await Challenge.destroy({
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