'use client'

import {FC, useEffect, useState} from "react"
import Plant from "@/components/Plant"
import Search from "@/components/Search"
import {greenShrubs, PlantData, redShrubs, whiteShrubs} from "@/data/plantData"

const Products: FC = () => {
    const [searchText, setSearchText] = useState('')
    const [filteredGreenShrubs, setFilteredGreenShrubs] = useState<PlantData[]>([])
    const [filteredRedShrubs, setFilteredRedShrubs] = useState<PlantData[]>([])
    const [filteredWhiteShrubs, setFilteredWhiteShrubs] = useState<PlantData[]>([])

    useEffect(() => {
        setFilteredGreenShrubs(greenShrubs.filter(shrub => shrub.name.toLowerCase().includes(searchText.toLowerCase())))
        setFilteredRedShrubs(redShrubs.filter(shrub => shrub.name.toLowerCase().includes(searchText.toLowerCase())))
        setFilteredWhiteShrubs(whiteShrubs.filter(shrub => shrub.name.toLowerCase().includes(searchText.toLowerCase())))
    }, [searchText])

    return (
        <div className="text-center">
            <main>
                <h1 className="text-5xl p-8">Products</h1>
                <Search onSearch={setSearchText}/>
                <h2 className="text-3xl p-10">Green Shrubs</h2>
                <>
                    <section className="plant-grid">
                        {filteredGreenShrubs.map((shrub) => (
                            <Plant {...shrub} key={shrub.src}/>
                        ))}
                    </section>

                    <h2 className="text-red-600 text-3xl p-10">Red Shrubs</h2>
                    <section className="text-red-600 plant-grid">
                        {filteredRedShrubs.map((shrub) => (
                            <Plant {...shrub} key={shrub.src}/>
                        ))}
                    </section>

                    <h2 className="text-white text-3xl p-10">White Shrubs</h2>
                    <section className="text-white plant-grid">
                        {filteredWhiteShrubs.map((shrub) => (
                            <Plant {...shrub} key={shrub.src}/>
                        ))}
                    </section>
                </>
            </main>
        </div>
    )
}

export default Products
