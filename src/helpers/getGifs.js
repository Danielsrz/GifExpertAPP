import react from 'react';   
    
export const getGifs = async( category ) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=6&api_key=ciiKUCtl8Gto2O39J6TFxffWl8Gsv7xP`
        const resp = await fetch ( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        return gifs;
    }
