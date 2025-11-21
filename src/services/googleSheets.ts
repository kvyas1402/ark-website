export interface TeamMember {
  id: string;
  name: string;
  role: string;
  profile: string;
  image: string;
  displayOrder: number;
}



export const fetchTeamMembers = async (): Promise<TeamMember[]> => {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbzvrUM22D30QUG5K3IIkZWUNg7P-A2AXCWNyTZGVmHV3BV6ahzMp5ZcuBt0LuvLaJTXGQ/exec', {
      method: 'GET',
      mode: 'cors'
    });
    
    const data = await response.json();
    
    if (!data || !Array.isArray(data)) {
      return [];
    }
    
    return data.map((member: any, index: number) => ({
      id: (index + 1).toString(),
      name: member.Name || '',
      role: member.Role || '',
      profile: member.Profile || '',
      image: member['Image URL'] || '/ARK.png',
      displayOrder: member['Display Order'] || index + 1
    })).sort((a, b) => a.displayOrder - b.displayOrder);
  } catch (error) {
    console.error('Error fetching team data:', error);
    return [];
  }
};