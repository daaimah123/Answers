// integration test
const UserController = require('./userController');
const UserService = require('./userService');

describe('UserController', () => {
    let userService;
    let userController;

    beforeEach(() => {
        userService = new UserService('https://api.example.com');
        userController = new UserController(userService);
    });

    it('fetches user data through the controller', async () => {
        const mockResponse = { id: 1, name: 'John Doe' };
        global.fetch = jest.fn().mockResolvedValueOnce(new Response(JSON.stringify(mockResponse)));

        const userData = await userController.getUserData(1);

        expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/users/1');
        expect(userData).toEqual(mockResponse);
    });
});
