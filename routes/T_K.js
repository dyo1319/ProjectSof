const express = require('express');
const router = express.Router()
module.exports = router;

router.get("/",(req, res) => {

    res.render("mainPage", {pageTitle:"בוקר טוב"});

});

router.post("/Add",function(req,res){

    let {employee_id,first_name,last_name,email,other_employee_details}=req.body;

    let q='INSERT INTO `employee` ( `employee_id`, `first_name`, `last_name`, `email`, `other_employee_details`) ';
    q += `VALUES ( '${employee_id}', '${first_name}', '${last_name}', '${email}', '${other_employee_details}')`;

    db_pool.query(q, function(err, rows, fields){

        if(err){
            res.status(500).json({message: err})
            // throw err;
        }else{
            res.status(200).json({message: "OK",lastId:rows.insertId});
        }

    });


});

router.put("/Edit/:employee_id", function (req, res) {
    // Extract employee details from the request body
    const { first_name, last_name, email, other_employee_details } = req.body;
    const employee_id = req.params.employee_id;

    // Build the SQL query to update the employee using parameterized query
    let q = `UPDATE employee SET first_name=?, last_name=?, other_employee_details=? WHERE employee_id=?`;
    let values = [first_name, last_name, other_employee_details, employee_id];

    // Only include email in the query if it's provided
    if (email && email !== "") {
        q = `UPDATE employee SET first_name=?, last_name=?, email=?, other_employee_details=? WHERE employee_id=?`;
        values = [first_name, last_name, email, other_employee_details, employee_id];
    }

    // Execute the SQL query to update the employee
    db_pool.query(q, values, function (err, result) {
        if (err) {
            console.error("Database error:", err);
            res.status(500).json({ message: "Database error" });
        } else {
            console.log("Rows affected:", result.affectedRows);
            res.status(200).json({ message: "Employee updated" });
        }
    });
});

router.delete("/Delete/:employee_id", function (req, res) {
    const employee_id = req.params.employee_id;

    // Build the SQL query to delete the employee
    let q=`DELETE FROM \`employee\` WHERE employee_id='${employee_id}' `;

    // Execute the SQL query to delete the employee
    db_pool.query(q, [employee_id], function (err, result) {
        if (err) {
            console.error("Database error:", err);
            res.status(500).json({ message: "Database error" });
        } else {
            if (result.affectedRows === 0) {
                res.status(404).json({ message: "Employee not found" });
            } else {
                res.status(200).json({ message: "Employee deleted" });
            }
        }
    });
});

router.get("/List",(req, res) => {

    let q="SELECT * FROM `employee` ";

    db_pool.query(q, function(err, rows, fields){

        if(err)
        {
            res.status(500).json({message: err})
            // throw err;
        }
        else
        {
            res.status(200).json(rows );
        }

    });
});







