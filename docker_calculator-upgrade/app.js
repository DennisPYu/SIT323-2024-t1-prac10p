const express = require('express');
const app = express();


// Modulo
app.get('/modulo', (req, res) => {
    const {
        dividend,
        divisor
    } = req.query;
    if (parseFloat(divisor) === 0) {
        return res.status(400).json({
            error: 'Division by zero is not allowed.'
        });
    }
    if (isNaN(dividend) || isNaN(divisor)) {
        return res.status(400).json({
            error: 'Invalid input. Please provide valid numbers.'
        });
    }
    const result = parseFloat(dividend) % parseFloat(divisor);
    res.json({
        result
    });
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Internal Server Error'
    });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});