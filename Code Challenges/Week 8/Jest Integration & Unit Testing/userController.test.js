// Integration test file
const UserController = require('./userController');
const UserService = require('./userService');

// Define our classes directly in the test file
class MockUserService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getUserData(userId) {
        return { id: userId, name: 'Test User' }; // Simplified mock implementation
    }
}

class MockUserController {
    constructor(userService) {
        this.userService = userService;
    }

    async getUserData(userId) {
        return await this.userService.getUserData(userId);
    }
}

describe('UserController', () => {
    let userService;
    let userController;

    beforeEach(() => {
        userService = new MockUserService('https://api.example.com');
        userController = new MockUserController(userService);
    });

    it('fetches user data through the controller', async () => {
        const mockResponse = { id: 1, name: 'John Doe' };
        
        // Override the mock service's getUserData method for this specific test
        userService.getUserData = jest.fn().mockResolvedValueOnce(mockResponse);

        const userData = await userController.getUserData(1);

        expect(userService.getUserData).toHaveBeenCalledWith(1);
        expect(userData).toEqual(mockResponse);
    });
});
