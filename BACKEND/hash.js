require('dotenv').config();
const crypto = require('crypto');
const secret = (process.env.HASH);
const update = ("HERE")
const hash = crypto.createHash('sha256', secret)
    .update(update)
    .digest('hex');
console.log(hash);