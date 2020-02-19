const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // CHECKLIST Routes
    const checklistService = require('../api/checklist/checklistService')
    checklistService.register(router, '/checklists')
}