import React, { useState } from 'react'

export const GifExpertApp = () => {

    // const categories = ['One Puch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Puch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () => {
        setCategories( [...categories, 'Akame ga kill'] );
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>

            <button onClick={ handleAdd }>Agregar</button>

            <ol>
                { 
                    categories.map( category => {
                        return <li key={ category } > { category } </li>
                    })
                }
            </ol>
        </>
    )
}
