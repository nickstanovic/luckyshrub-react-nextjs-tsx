'use client'

import {FC, useEffect, useState} from "react"
import Plant from "@/components/Plant"
import Search from "@/components/Search"
import ColorFilter from "@/components/ColorFilter"
import plants, {PlantData} from "@/data/plantData"

type ColorFilterState = {
    green: boolean;
    red: boolean;
    white: boolean;
};

const Products: FC = () => {
    const [searchText, setSearchText] = useState('')
    const [colorFilter, setColorFilter] = useState<ColorFilterState>({
        green: true,
        red: true,
        white: true
    })
    const [filteredPlants, setFilteredPlants] = useState<PlantData[]>([])

    useEffect(() => {
        setFilteredPlants(plants.filter(plant =>
            plant.name.toLowerCase().includes(searchText.toLowerCase()) &&
            colorFilter[plant.color]
        ))
    }, [searchText, colorFilter])

    const handleColorFilterChange = (color: keyof ColorFilterState) => {
        setColorFilter(prevState => ({ ...prevState, [color]: !prevState[color] }));
    }

    return (
        <div className="text-center">
            <main>
                <h1 className="text-5xl p-8">Products</h1>
                <Search onSearch={setSearchText}/>
                <ColorFilter colorFilter={colorFilter} handleColorFilterChange={handleColorFilterChange} />
                <section className="plant-grid">
                    {filteredPlants.map((plant) => (
                        <Plant {...plant} key={plant.src}/>
                    ))}
                </section>
            </main>
        </div>
    )
}

export default Products;
