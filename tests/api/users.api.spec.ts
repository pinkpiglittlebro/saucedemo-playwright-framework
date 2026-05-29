import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {

    test('GET users returns successful response', async ({ request }) => {

        const response = await request.get('https://jsonplaceholder.typicode.com/users');

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.length).toBeGreaterThan(0);
        expect(body[0]).toHaveProperty('id');
        expect(body[0]).toHaveProperty('email');
    });
});