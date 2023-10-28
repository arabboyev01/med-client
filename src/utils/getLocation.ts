export const getLocation = (): Promise<{ latitude: number; longitude: number }> => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({
            latitude,
            longitude,
          });
        },
        (error: GeolocationPositionError) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              reject('User denied geolocation request.');
              break;
            case error.POSITION_UNAVAILABLE:
              reject('Geolocation information is unavailable.');
              break;
            case error.TIMEOUT:
              reject('Geolocation request timed out.');
              break;
            default:
              reject('An unknown error occurred.');
          }
        }
      );
    } else {
      reject('Geolocation is not available in this browser.');
    }
  });
};
