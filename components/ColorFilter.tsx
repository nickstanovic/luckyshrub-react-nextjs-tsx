import {FC} from "react"

interface ColorFilterProps {
    colorFilter: {
        green: boolean;
        red: boolean;
        white: boolean;
    };
    handleColorFilterChange: (color: 'green' | 'red' | 'white') => void;
}


const ColorFilter: FC<ColorFilterProps> = ({colorFilter, handleColorFilterChange}) => (
    <div className="p-6">
        <h2 className="text-2xl lg:text-3xl text-white">Plant Color Filter:</h2>
        <input type="checkbox" id="green" checked={colorFilter.green}
               onChange={() => handleColorFilterChange('green')}/>
        <label htmlFor="green">Green</label>&emsp;

        <input type="checkbox" id="red" checked={colorFilter.red} onChange={() => handleColorFilterChange('red')}/>
        <label htmlFor="red" className="text-red-600">Red</label>&emsp;

        <input type="checkbox" id="white" checked={colorFilter.white}
               onChange={() => handleColorFilterChange('white')}/>
        <label htmlFor="white" className="text-white">White</label>
    </div>
)

export default ColorFilter
