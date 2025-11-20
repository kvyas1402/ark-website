export interface TeamMember {
  id: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  bio: string;
  image: string;
  experience: string;
  skills: string[];
}

const SHEET_ID = process.env.REACT_APP_GOOGLE_SHEET_ID;
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const SHEET_NAME = 'Team';

export const fetchTeamMembers = async (): Promise<TeamMember[]> => {
  if (!SHEET_ID || !API_KEY) {
    console.error('Google Sheets API credentials not configured');
    return [];
  }

  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (!data.values || data.values.length < 2) {
      return [];
    }

    const [headers, ...rows] = data.values;
    
    return rows.map((row: string[], index: number) => ({
      id: (index + 1).toString(),
      name: row[0] || '',
      position: row[1] || '',
      email: row[2] || '',
      phone: row[3] || '',
      bio: row[4] || '',
      image: row[5] || '/ARK.png',
      experience: row[6] || '',
      skills: row[7] ? row[7].split(',').map(skill => skill.trim()) : []
    }));
  } catch (error) {
    console.error('Error fetching team data:', error);
    return [];
  }
};