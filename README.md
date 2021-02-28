<p align="center">
    <img width="280" height="280" src="./public/solar-system.png" alt="logo"/>
</p>

# About
NASA has a ["picture of the day"](https://apod.nasa.gov/apod/astropix.html) webpage. But the problem is to view the image up close you need to click the image to open a new window/tab.

My version takes this step away by letting you view it up close by simply hovering over the image.

This app uses the NASA API so in order to run it locally you need to generate your own API key.

## Demo
[cool-pictures-of-space](https://cool-pictures-of-space.netlify.app/)

## Installation

```bash
git clone https://github.com/benji011/cool-pictures-of-space
cd cool-pictures-of-space
mv .env.example .env.development.local
yarn add
```

## Add your own API key

Step 1: Go to the [NASA API webpage](https://api.nasa.gov/) and Generate API Key by filling up your details

Step 2. Open `.env.development.local` and then replace `yourapikey` with the key you just obtained.

```bash
REACT_APP_API_KEY=yourapikey
```

Step 3. Run the project with:

```bash
yarn start
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
