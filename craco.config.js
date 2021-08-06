// Since create react app is incompatible with css 8 and tailwindcss uses css 8, we need to install another library to make it working
// which is craco and hence we need to remove the below scripts in package.json 
//"start": "react-scripts start",
//"build": "react-scripts build",
//"test": "react-scripts test",
// and replace with craco start/build/test
// also this config file is used by craco so we need this file
module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  }