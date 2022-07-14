//GoogleFirestore Initialization
//Refer: https://www.youtube.com/watch?v=Z87OZtIYC_0
const admin = require('firebase-admin')
const serviceAccount = require('./firebaseServiceAccountKey.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})
module.exports = admin.firestore()
//---------------------
