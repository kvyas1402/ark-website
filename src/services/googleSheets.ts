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
      name: member.name || '',
      position: member.position || '',
      email: member.email || '',
      phone: member.phone || '',
      bio: member.bio || '',
      image: member.image || '/ARK.png',
      experience: member.experience || '',
      skills: member.skills ? member.skills.split(',').map((skill: string) => skill.trim()) : []
    }));
  } catch (error) {
    console.error('Error fetching team data:', error);
    return [];
  }
};