const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const generatePDFReport = (formData, riskFactors = []) => {
  const {
    name,
    gender,
    age,
    unit,
    totalCholesterol,
    ldlCholesterol,
    hdlCholesterol,
    triglycerides,
  } = formData;
  console.log(formData);
  const doc = new PDFDocument();
  const filename = 'report.pdf';
  doc.fontSize(20).text('Health Report', { align: 'center' });
  doc.moveDown();
  doc.fontSize(12).text(`Name: ${name}`);
  doc.fontSize(12).text(`Gender: ${gender}`);
  doc.fontSize(12).text(`Age: ${age}`);
  doc.fontSize(12).text(`Unit: ${unit}`);
  doc.moveDown();
  doc.fontSize(12).text(`Total blood Cholesterol: ${totalCholesterol}`);
  doc.fontSize(12).text(`LDL Cholesterol: ${ldlCholesterol}`);
  doc.fontSize(12).text(`HDL Cholesterol: ${hdlCholesterol}`);
  doc.fontSize(12).text(`Triglycerides: ${triglycerides}`);
  doc.moveDown();
  doc.fontSize(14).text('Risk Factors:', { underline: true });
  if (riskFactors.length > 0) {
    riskFactors.forEach((factor) => {
      doc.fontSize(12).text(`- ${factor}`);
    });
  } else {
    doc.fontSize(12).text('- No risk factors found');
  }

  // Finalize the PDF document
  doc.end();

  return { filename, doc };
};


const generateReport = (req, res) => {
  const {
    name,
    gender,
    age,
    unit,
    totalCholesterol,
    ldlCholesterol,
    hdlCholesterol,
    triglycerides,
    riskFactors, 
  } = req.body;


  const hdlRatio = totalCholesterol / hdlCholesterol;


  let calculatedRiskFactors = [];
  if (totalCholesterol >= 200) {
    calculatedRiskFactors.push('High cholesterol level');
  }
  if (hdlCholesterol < 40) {
    calculatedRiskFactors.push('Low HDL level');
  }
  if (ldlCholesterol >= 100) {
    calculatedRiskFactors.push('High LDL level');
  }

  const mergedRiskFactors = [...calculatedRiskFactors, ...(riskFactors || [])];
  console.log(mergedRiskFactors);
  
  res.render('report', {
    name,
    gender,
    age,
    unit,
    totalCholesterol,
    ldlCholesterol,
    hdlCholesterol,
    triglycerides,
    hdlRatio,
    riskFactors: mergedRiskFactors,
  });
};

const downloadReport = (req, res) => {
  const formData = req.body;
  console.log(formData);
  // Generate the PDF report
  const riskFactors = formData.riskFactors || [];
  const { filename, doc } = generatePDFReport(formData, riskFactors);

  // Set response headers for PDF download
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
  
  // Handle PDF document errors
  doc.on('error', (err) => {
    console.error(err);
    res.status(500).end();
  });

  // Pipe the PDF document to the response
  doc.pipe(res);

  // Finalize the PDF document
  doc.on('finish', () => {
    // Finalize the PDF document
    doc.end();
  })
};

module.exports = {
  generateReport,
  generatePDFReport,
  downloadReport,
};
