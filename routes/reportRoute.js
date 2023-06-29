const express = require('express');
const router = express.Router();

// Controller for generating the report
const { generateReport, downloadReport,generatePDFReport } = require('../controllers/generateController');

// Route to generate the report
router.post('/generate-report', generateReport);
router.get('/download-report', downloadReport);
const {registerUser,loginUser} =  require("../controllers/userController");
router.post("/register",registerUser);
router.post("/login",loginUser);
module.exports = router;
