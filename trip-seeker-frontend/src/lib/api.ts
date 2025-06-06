const API_URL = 'http://localhost:5001/api';

export const api = {
  async getDestinations() {
    console.log('API: Fetching destinations from:', `${API_URL}/destinations`);
    try {
      const response = await fetch(`${API_URL}/destinations`, {
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const contentType = response.headers.get('content-type');
      console.log('API: Response content type:', contentType);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API: Server error response:', errorText);
        throw new Error(`Failed to fetch destinations: ${errorText}`);
      }

      const data = await response.json();
      console.log('API: Received destinations:', data);
      return data;
    } catch (error) {
      console.error('API: Error fetching destinations:', error);
      throw error;
    }
  },

  async getPackages() {
    console.log('API: Fetching packages from:', `${API_URL}/packages`);
    try {
      const response = await fetch(`${API_URL}/packages`, {
        headers: {
          'Accept': 'application/json'
        }
      });

      const contentType = response.headers.get('content-type');
      console.log('API: Response content type:', contentType);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API: Server error response:', errorText);
        throw new Error(`Failed to fetch packages: ${errorText}`);
      }

      const data = await response.json();
      console.log('API: Received packages:', data);
      return data;
    } catch (error) {
      console.error('API: Error fetching packages:', error);
      throw error;
    }
  }
};
