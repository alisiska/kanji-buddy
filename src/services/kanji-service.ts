export const getTobiraList = async (): Promise<any[]> => {
  try {
    const response = await fetch('/data/tobira.data.json');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Failed to fetch JSON:', err);
    return [];
  }
};
