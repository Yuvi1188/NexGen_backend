const newCustomerTemplate = (name, email, phone, subject, message) => {
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>New Customer Form</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }

            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }

            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }

            .header {
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 20px;
            }

            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }

            .field {
                margin-bottom: 10px;
                text-align: left;
            }

            .label {
                font-weight: bold;
            }

            .value {
                margin-left: 10px;
            }

            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <a href="https://yourwebsite.com"><img class="logo" src="https://via.placeholder.com/200x100.png?text=Your+Logo" alt="Company Logo"></a>
            <div class="header">New Customer Form Submission</div>
            <div class="body">
                <div class="field">
                    <span class="label">Name:</span><span class="value">${name}</span>
                </div>
                <div class="field">
                    <span class="label">Email:</span><span class="value">${email}</span>
                </div>
                <div class="field">
                    <span class="label">Phone:</span><span class="value">${phone}</span>
                </div>
                <div class="field">
                    <span class="label">Subject:</span><span class="value">${subject}</span>
                </div>
                <div class="field">
                    <span class="label">Message:</span><span class="value">${message}</span>
                </div>
            </div>
            <div class="support">If you have any questions or need assistance, please feel free to reach out to us at <a href="mailto:support@yourwebsite.com">support@yourwebsite.com</a>. We are here to help!</div>
        </div>
    </body>
    </html>`;
};

module.exports = newCustomerTemplate;
