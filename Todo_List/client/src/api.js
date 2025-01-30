const API_BASE_URL = 'http://localhost:5000/api';

export const registerUser = async (username, password) => {
  const res = await fetch(`${API_BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
};

export const loginUser = async (username, password) => {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
};

export const getTasks = async (token) => {
  console.log('Sending Token in Request:', token);

  const res = await fetch(`${API_BASE_URL}/tasks`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  console.log('API Response from getTasks:', data);
  return data;
};

export const addTask = async (token, text) => {
  console.log('Sending Token for Adding Task:', token);

  const res = await fetch(`${API_BASE_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ text }),
  });

  const data = await res.json();
  console.log('🛠 Task Added Response:', data);
  return data;
};

export const updateTask = async (token, taskId) => {
  console.log('🔍 Sending Token for Updating Task:', token);

  const res = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  console.log(' Task Updated Response:', data);
  return data;
};

export const deleteTask = async (token, taskId) => {
  console.log('🔍 Sending Token for Deleting Task:', token);

  const res = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  console.log('🛠 Task Deleted Response:', await res.json());
};
