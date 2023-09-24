const express = require('express');
const router = express.Router()
module.exports = router;

router.post('/Entry', (req, res) => {
    const { employee_id, employee_name } = req.body;
    const entry_type = 'Entry';
    const timestamp = new Date();

    const query = 'INSERT INTO  timeentry (employee_id, employee_name, entry_type, timestamp) VALUES (?, ?, ?, ?)';
    const values = [employee_id, employee_name, entry_type, timestamp];

    db_pool.query(query, values, (err, result) => {
        if (err) {
            console.error('Database error:', err);
            res.status(500).json({ message: 'Database error' });
        } else {
            console.log('Inserted entry:', result.insertId);
            res.status(200).json({ message: 'Entry recorded.', entryId: result.insertId });
        }
    });
});

router.post('/Exit', (req, res) => {
    const { employee_id, employee_name } = req.body;
    const entry_type = 'Exit';
    const timestamp = new Date();

    const query = 'INSERT INTO  timeentry (employee_id, employee_name, entry_type, timestamp) VALUES (?, ?, ?, ?)';
    const values = [employee_id, employee_name, entry_type, timestamp];

    db_pool.query(query, values, (err, result) => {
        if (err) {
            console.error('Database error:', err);
            res.status(500).json({ message: 'Database error' });
        } else {
            console.log('Inserted exit:', result.insertId);
            res.status(200).json({ message: 'Exit recorded.', exitId: result.insertId });
        }
    });
});

