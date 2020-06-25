import React from 'react';
import { render, wait, cleanup } from '@testing-library/react';
import App from './App';
import axios from 'axios';

afterEach(cleanup);

test('mocking axios request', async () => {
	const data = {
		data: [
			{
				id: 1,
				title: 'title 1'
			},
			{
				id: 2,
				title: 'title 2'
			},
			{
				id: 3,
				title: 'mocked title'
			}
		]
	};
	axios.get.mockResolvedValueOnce(data);
	const { getByText } = render(<App />);
	await wait(() => {
		expect(getByText('mocked title'));
	});
});
