import React, { useState } from 'react' 
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Digimon']);

    return (
        <div>
            <h1 className="animate__animated animate__flipInX animate__delay-1s">Los GIFS de Danito</h1>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            

            <ol>
                {
                    categories.map (category => 
                         <GifGrid 
                         key={ category }
                         category={ category }
                         />
                    )
                }
            </ol>
        </div>
    )
                };

export default GifExpertApp;