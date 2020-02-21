const restful = require('node-restful')
const mongoose = restful.mongoose

const checklistSchema = new mongoose.Schema({
    description: { type: String, required: true },
    taskNumber: { type: String, required: true },
    backend: { type: Boolean, required: true, default: false },
    frontend: { type: Boolean, required: true, default: false },
    database: { type: Boolean, required: true, default: false },
    backendList: {
        buildCreated: { type: Boolean, required: false, default: false },
        stressTest: { type: Boolean, required: false, default: false },
        sameBase: { type: Boolean, required: false, default: false },
    },
    frontendList: {
        snapshotUpdated: { type: Boolean, required: false, default: false },
        lintValid: { type: Boolean, required: false, default: false },
        invision: { type: Boolean, required: false, default: false }
    },
    databaseList: {
        adValid: { type: Boolean, required: false, default: false }
    },
    defaultList: {
        poApproves: { type: Boolean, required: false, default: false },
        hasTimebox: { type: Boolean, required: false, default: false },
        storieValid: { type: Boolean, required: false, default: false },
        storieQAValid: { type: Boolean, required: false, default: false },
        scopeApproves: { type: Boolean, required: false, default: false },
        updatePoApproves: { type: Boolean, required: false, default: false },
        securityCheck: { type: Boolean, required: false, default: false },
        externalApproves: { type: Boolean, required: false, default: false },
        rollbackVerify: { type: Boolean, required: false, default: false },
        hasDeploy: { type: Boolean, required: false, default: false },
        storieDoc: { type: Boolean, required: false, default: false }
    }    
})

module.exports = restful.model('Checklist', checklistSchema)