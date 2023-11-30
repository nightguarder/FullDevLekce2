//Default API komunikace
import express from 'express'
const router = express.Router()

// Users Example database
const usersDb = [
    { id: 1, name: 'Rostislav Javdavan', email: 'jadavan@example.com' },
    { id: 2, name: 'Cyril', email: 'cyril@example.com' },
    // Add more users as needed
];

router.get('/users/:id', function(req, res) {
    const selected = parseInt(req.params.id)
    const selectedUser = usersDb.find(user => user.id === selected);
    
    // Return the user or an error response
    res.json(selectedUser ? { SelectedUser: selectedUser } : { error: 'User not found' });
});

export default router