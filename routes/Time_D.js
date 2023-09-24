const express = require('express');
const router = express.Router()
module.exports = router;

router.get("/List/:employee_id?", (req, res) => {
    const { employee_id } = req.params;

    let q = "SELECT * FROM `timeentry`";

    if (employee_id) {
        q += " WHERE `employee_id` = ?";
    }

    db_pool.query(q, [employee_id], function(err, rows, fields) {
        if (err) {
            res.status(500).json({ message: err });
        } else {
            res.status(200).json(rows);
        }
    });
});

