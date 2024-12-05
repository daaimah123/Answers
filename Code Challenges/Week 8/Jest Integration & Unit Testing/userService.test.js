// unit test
const UserService = require('./userService');

describe('UserService', () => {
    let userService;

    beforeEach(() => {
        userService = new UserService('https://api.example.com');
    });

    it('fetches user data successfully', async () => {
        const mockResponse = { id: 1, name: 'John Doe' };
        global.fetch = jest.fn().mockResolvedValueOnce(new Response(JSON.stringify(mockResponse)));

        const userData = await userService.getUserData(1);

        expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/users/1');
        expect(userData).toEqual(mockResponse);
    });

    it('handles errors gracefully', async () => {
        global.fetch = jest.fn().mockRejectedValueOnce(new Error('Network error'));

        await expect(() => userService.getUserData(1)).rejects.toThrow('Network error');
    });
});
