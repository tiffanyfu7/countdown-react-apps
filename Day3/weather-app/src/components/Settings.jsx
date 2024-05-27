import React from 'react'
import { FormControl } from '@chakra-ui/react'
import { InputLabel, NativeSelect } from '@mui/material';


const Settings = ({ settings, setSettings, units, setUnits }) => {
    
    console.log(units);

    return (
      <div className='pop-up'>
        <div className="toolbar">
          <button className="exit-button"
            onClick={() => setSettings(!settings)}> x
          </button>
        </div>
        <h3>Settings</h3>
        <FormControl>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Set Units
            </InputLabel>
            <NativeSelect
                defaultValue={"imperial"}
                inputProps={{
                    name: 'unit',
                    id: 'uncontrolled-native',
                }}
                onChange={(event) => setUnits(event.target.value)}
            >
                <option value={"imperial"}>Farenheit</option>
                <option value={"metric"}>Celcius</option>
                <option value={"standard"}>Kelvin</option>
            </NativeSelect>
        </FormControl>
      </div>
  )
}

export default Settings