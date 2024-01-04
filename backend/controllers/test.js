const axios = require('axios');
const controllers = require('./controller'); 

jest.mock('axios');

describe('handleGetCryptoCoins', () => {
  test('should return data when API call is successful', async () => {
    const mockedData = ['crypto1', 'crypto2'];
    axios.get.mockResolvedValueOnce({ data: mockedData });
    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn(() => res),
      send: jest.fn(),
    };

    await controllers.handleGetCryptoCoins(req, res);

    expect(res.json).toHaveBeenCalledWith(mockedData);
    expect(res.status).not.toHaveBeenCalled();
  });

  test('should return 500 status when API call fails', async () => {
    axios.get.mockRejectedValueOnce(new Error('API Error'));
    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn(() => res),
      send: jest.fn(),
    };

    await controllers.handleGetCryptoCoins(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).not.toHaveBeenCalled();
  });
});

describe('handleGetTrendingCoins', () => {
  test('should return data when API call is successful', async () => {
    const mockedData = ['trend1', 'trend2'];
    axios.get.mockResolvedValueOnce({ data: mockedData });
    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn(() => res),
      send: jest.fn(),
    };

    await controllers.handleGetTrendingCoins(req, res);

    expect(res.json).toHaveBeenCalledWith(mockedData);
    expect(res.status).not.toHaveBeenCalled();
  });

  test('should return 500 status when API call fails', async () => {
    axios.get.mockRejectedValueOnce(new Error('API Error'));
    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn(() => res),
      send: jest.fn(),
    };

    await controllers.handleGetTrendingCoins(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).not.toHaveBeenCalled();
  });
});

describe('handleConvertAmount', () => {
  test('should return total amount when API call is successful', async () => {
    const req = {
      body: {
        coin_id: 'bitcoin',
        currency: 'usd',
        inputAmount: 10,
      },
    };
    const mockedData = {
      bitcoin: { usd: 50000 },
    };
    axios.get.mockResolvedValueOnce({ data: mockedData });
    const res = {
      json: jest.fn(),
      status: jest.fn(() => res),
      send: jest.fn(),
    };

    await controllers.handleConvertAmount(req, res);

    expect(res.json).toHaveBeenCalledWith({ total_amount: 500000 });
    expect(res.status).not.toHaveBeenCalled();
  });

  test('should return 500 status when API call fails', async () => {
    const req = {
      body: {
        coin_id: 'bitcoin',
        currency: 'usd',
        inputAmount: 10,
      },
    };
    axios.get.mockRejectedValueOnce(new Error('API Error'));
    const res = {
      json: jest.fn(),
      status: jest.fn(() => res),
      send: jest.fn(),
    };

    await controllers.handleConvertAmount(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).not.toHaveBeenCalled();
  });

  test('should return 400 status when required fields are missing', async () => {
    const req = {
      body: {
        coin_id: 'bitcoin',
      },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(() => res),
      send: jest.fn(),
    };

    await controllers.handleConvertAmount(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Pls fill all required fields' });
  });
});
