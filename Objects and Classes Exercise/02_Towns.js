function createObjectsFromTable(table) {
    for (let row of table) {
      let [town, latitudeStr, longitudeStr] = row.split(' | ');
      let latitude = Number(latitudeStr.trim());
      let longitude = Number(longitudeStr.trim());
  
      let formattedLatitude = formatNumber(latitude);
      let formattedLongitude = formatNumber(longitude);
  
      let result = {
        town,
        latitude: formattedLatitude,
        longitude: formattedLongitude
      };
  
      console.log(result);
    }
  
    function formatNumber(number) {
      return number.toFixed(2);
    }
  }
  
  // Example usage

  
  createObjectsFromTable([
    'Plovdiv | 136.45 | 812.575'
  ]);
  