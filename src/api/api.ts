import { TaskGroupProps } from '../components/types';

const url =
  'https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress';

async function fetchData(): Promise<TaskGroupProps[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = (await response.json()) as TaskGroupProps[];
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw new Error(
      'An error occurred while fetching data. Please try again later.'
    );
  }
}

export { fetchData };
