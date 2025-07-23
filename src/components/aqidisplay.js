import React from "react";
const Aqidisplay =({location,aqidata}) =>{
    if(!aqidata){
        return(
            //message container
        <div className="bg-white p-6 shadow-md rounded-lg mt-6 text-center max-w-3xl mx-auto font-sans darl:bg-gray-800">
            <p className="text-gray-600 text-lg dark:text-gray-300">Search For a Location to See AQI Data</p>
        </div>
        );
    }
    //we have to change it or should aliged with CPCB standars
    let aqicategory ='Good';
    let aqicolor ='bg-green-500';
    let textcolor ='text-green-700';//text color category ke liye

    if(aqidata.value >100 && aqidata.value <=200){
        aqicategory='Moderate';
        aqicolor='bg-yellow-500';
        textcolor='text-yellow-700';
    }else if (aqidata.value >200 && aqidata.value<=300){
        aqicategory='Poor';
        aqicolor='bg-orange-500';
        textcolor='text-orange-700';
    }else if (aqidata.value >300 && aqidata.value<=400){
        aqicategory='Very Poor';
        aqicolor='bg-red-500';
        textcolor='text-red-700';
    }else if (aqidata.value >400){
        aqicategory='Severe';
        aqicolor='bg-purple-500';
        textcolor='text-purple-700';
    }
    return(
        //main container
        <div className="bg-white p-6 shadow-md rounded-lg mt-6 max-w-3xl mx-auto font font-sans dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center dark:text-gray-100">Air Quality For {location}</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6">
                {/* aqi value circle */}
                <div className={`w-32 h-32 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-md ${aqicolor}`}>{aqidata.value}</div>
                {/* aqi category and last update info. */}
                <div className="text-center sm:text-left">
                    <p className="text-2xl font-semibold text-gray-700 dark:text-gray-200">Category: <span className={`font-extrabold ${textcolor}`}>{aqicategory}</span></p>
                    <p className="text-gray-600 text-sm mt-1 dark:text-gray-300">Last Updated:{aqidata.lastUpdate}</p>
                </div>
            </div>
            {/* pollutant details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 dark:text-gray-200">
                <div className="p-3 bg-gray-100 rounded-md shadow-sm dark:bg-gray-700">
                    <p className="font-semibold text-blue-700 dark:text-blue-300">PM2.5</p>
                    <p className="text-lg">{aqidata.pm25} µg/m³</p>
                </div>
                <div className="p-3 bg-gray-100 rounded-md shadow-sm dark:bg-gray-700">
                    <p className="font-semibold text-blue-700 dark:text-blue-300">PM10</p>
                    <p className="text-lg">{aqidata.pm10} µg/m³</p>
                </div>
                <div className="p-3 bg-gray-100 rounded-md shadow-sm dark:bg-gray-700">
                    <p className="font-semibold text-blue-700 dark:text-blue-300">NO2</p>
                    <p className="text-lg">{aqidata.no2} ppb</p>
                </div>
                <div className="p-3 bg-gray-100 rounded-md shadow-sm dark:bg-gray-700">
                    <p className="font-semibold text-blue-700 dark:text-blue-300">SO2</p>
                    <p className="text-lg">{aqidata.so2} ppb</p>
                </div>
                <div className="p-3 bg-gray-100 rounded-md shadow-sm dark:bg-gray-700">
                    <p className="font-semibold text-blue-700 dark:text-blue-300">O3</p>
                    <p className="text-lg">{aqidata.o3} ppb</p>
                </div>
                <div className="p-3 bg-gray-100 rounded-md shadow-sm dark:bg-gray-700">
                    <p className="font-semibold text-blue-700 dark:text-blue-300">CO</p>
                    <p className="text-lg">{aqidata.co} ppm</p>
                </div>
            </div>
        </div>
    );
};

export default Aqidisplay;