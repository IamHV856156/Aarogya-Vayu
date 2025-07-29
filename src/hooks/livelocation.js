import { useState, useEffect,useCallback} from 'react';

const OPENCAGE_API_KEY = process.env.REACT_APP_OPENCAGE_API_KEY;

const useGeolocation = (onLocationFound) => {
  const [locationLoading, setlocationLoading] = useState(true);
  const[latitude,setlatitude]=useState(null);
  const[longitude,setlongitude]=useState(null);
  const[locationname,setlocationname]=useState(null);

  const getGeoLocation = useCallback(async () => {
    setlocationLoading(true); 

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const userlat = (position.coords.latitude);
          const userlon = (position.coords.longitude);
          setlatitude(userlat);
          setlongitude(userlon);
          console.log("Geolocation obtained: Lat:", userlat, "Lon:", userlon);

         if (!OPENCAGE_API_KEY) {
            console.error("OpenCage API Key is not defined.");
            alert("API Key not found.");
            setlocationLoading(false);
            if (typeof onLocationFound === 'function') {
                onLocationFound("API Key Missing");
            }
            return;
          }

          try {
            const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${userlat}+${userlon}&key=${OPENCAGE_API_KEY}&language=en&pretty=1`);
            const data = await response.json();

            if (data.results && data.results.length > 0) {
              const components = data.results[0].components;
              const city = components.city || components.town || components.village || components.county || components.state ||data.results.formatted;

              setlocationname(city);
              console.log("Reverse Geocoded City:", city);
              onLocationFound(city); 
            } else {
              console.warn("No results found for reverse geocoding.");
              onLocationFound("Unknown Location"); 
            }
          } catch (error) {
            console.error("Error during reverse geocoding:", error);
            alert("Error getting location details. Please try searching manually.");
            onLocationFound("");
          } finally {
            setlocationLoading(false); 
          }
        },
        (error) => {
          console.error("Error getting geolocation:", error.message, "Code:", error.code);
          setlocationLoading(false); 

          let errorMessage = "Could not get your location. Please try searching manually.";
          if (error.code === error.PERMISSION_DENIED) {
            errorMessage = "Location access denied. Please allow location access or use the search bar.";
          } else if (error.code === error.TIMEOUT) {
            errorMessage = "Getting location timed out. Please try again.";
          }
          alert(errorMessage);
          setlocationname("Default City");
          if (typeof onLocationFound === 'function') {
            onLocationFound("Default City");
          }
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
      setlocationLoading(false);
      setlocationname("Browser Not Supported");
      if (typeof onLocationFound === 'function') {
        onLocationFound("Browser Not Supported");  
      }
      
    }
  },[onLocationFound]);

  useEffect(() => {
    getGeoLocation();
  }, [getGeoLocation]);

  return {locationLoading,latitude ,longitude};
};

export default useGeolocation;