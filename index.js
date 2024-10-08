const fs = require('fs');
const path = require('path');

// Load all JSON files into an object
const loadJsonFiles = (directory) => {
  const files = fs.readdirSync(directory);
  const dataObject = {};

  files.forEach((file) => {
    if (file.endsWith('.json')) {
      const filePath = path.join(directory, file);
      const fileData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      dataObject[fileData.id] = fileData; // Use `id` as the key, adjust as needed
    }
  });

  return dataObject;
};

// Search function to find JSON data by a given property
const findDataByProperty = (dataObject, property, value) => {
  return Object.values(dataObject).find((item) => item[property] === value);
};

// Load JSON files from the 'data' directory
const dataDirectory = path.join(__dirname, 'cache');
const jsonData = loadJsonFiles(dataDirectory);

// Example search and load response
const searchResult = findDataByProperty(jsonData, 'email', 'jane@example.com');
console.log(searchResult);
