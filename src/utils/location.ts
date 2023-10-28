export const fetchAddress = async (latitude: number, longitude: number): Promise<string> => {
    const baseUrl = 'https://nominatim.openstreetmap.org/reverse'
    const format = 'json';
    try {
        const response = await fetch(`${baseUrl}?format=${format}&lat=${latitude}&lon=${longitude}`);
        const data = await response.json();

        if (data.display_name) {
            return data.display_name;
        } else {
            throw new Error('No results found');
        }
    } catch (error) {
        throw error;
    }
}