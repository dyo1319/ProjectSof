const express = require('express');
const router = express.Router()
module.exports = router;

const entryExitLog = {
    entryTime: null,
    exitTime: null,
};
router.post('/Entry', (req, res) => {
    const currentTime = new Date();
    entryExitLog.entryTime = currentTime;
    res.status(200).json({ message: 'Entry time recorded.', entryTime: currentTime });
});

router.post('/Exit', (req, res) => {
    const currentTime = new Date();
    entryExitLog.exitTime = currentTime;
    res.status(200).json({ message: 'Exit time recorded.', exitTime: currentTime });
});

router.get('/Times', (req, res) => {
    res.status(200).json(entryExitLog);
});
