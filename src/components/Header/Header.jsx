import React from 'react'
import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core'
import categories from '../../data/category'
import "./Header.css"

const Header = ({category, setCategory, word, setWord}) => {

    const darkTheme = createTheme({
        palette: {
          type: 'dark',
          primary: {
              main: "#fff"
          }
        },
      });

    return (<div className="header">
                <span className="title">{word ? word : "Word Hunt"}</span>
                <div className="inputs">
                    <ThemeProvider theme={darkTheme}>
                        <TextField 
                            label="Select a word" 
                            className="search"
                            value={word}
                            onChange={(e) => setWord(e.target.value)}
                        />
                        <TextField
                            className="select"
                            select
                            label="Language"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            helperText="Please select your currency"
                            >
                            {categories.map((option)=>(
                                <MenuItem key={option.label} value={option.label}>
                                    {option.value}
                                </MenuItem>
                            ))
                            }
                        </TextField>
                    </ThemeProvider>
                </div>
            </div>)
}

export default Header