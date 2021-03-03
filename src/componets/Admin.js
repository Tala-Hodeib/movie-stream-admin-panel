import React from 'react'
import {
    withStyles,
    TableContainer, Paper, Table, TableRow, TableCell, makeStyles, TextField, RadioGroup, Radio, FormControlLabel, Button, InputBase, InputLabel, FormControl, NativeSelect, Select, Box
} from '@material-ui/core'
import './AddData.module.css'
import { uploadMovies } from '../api'
import { findAllInRenderedTree } from 'react-dom/test-utils'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import './AddData.module.css'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from './logo.png';





class Admin extends React.Component {
    state = {
        type: 'movie',
        title: '',
        year: '',
        // movie_id: '',
        image: '',
        genres: '',
        // category: '',
        description: ''
    }

    handleChangeType = (e) => {
        this.setState({
            type: e.target.value
        })
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        const data  = this.state
        e.preventDefault()
        try {
            const response = await uploadMovies(data)
            alert(response.message)
            console.log(response)
        } catch (error) {
            alert(error)
        }
          
       
            

    }

    
    render() {
        const { classes } = this.props
        const darkTheme = createMuiTheme({
            palette: {
              type: 'dark',
            },
          });
          
          
        return (
           <>
           <div className={classes.outwards}>
        
            <div className={classes.container}>
            <div className={classes.logo}>  
           <img src={logo} alt='website logo'/>
            </div>
                {/* <h2 className={classes.h2} > Upload the data to the server</h2> */}
                <TableContainer  className={classes.tableContainer} component={Paper}>
                    <form onSubmit={this.handleSubmit}>
                        <Table size='small' lassName={classes.table} aria-label="simple table">
                            <TableRow  >
                                <TableCell className={classes.boldText}>Type</TableCell>
                                <TableCell>
                                    <div>
                                        <RadioGroup row aria-label="type" name="type" value={this.state.type} onChange={this.handleChangeType}>
                                            <FormControlLabel value="movie" control={<Radio />} label="Movie" />
                                            <FormControlLabel value="serie" control={<Radio />} label="Serie" />
                                        </RadioGroup>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell className={classes.boldText}>Title</TableCell>
                                <TableCell align="right">
                                    <TextField
                                        onChange={this.handleChange}
                                        variant='filled'
                                        required
                                        name="title"
                                        id="title"
                                        type="text"
                                        label="Title"
                                        fullWidth
                                        autoComplete="title"
                                    />
                                </TableCell>

                            </TableRow>
                            <TableRow>
                                <TableCell className={classes.boldText}>Release Year</TableCell>
                                <TableCell>
                                    <TextField type="text"
                                        onChange={this.handleChange}
                                        variant='filled'
                                        required
                                        id="year"
                                        name="year"
                                        label="Release Year"
                                        fullWidth
                                        autoComplete="release-year"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                {/* <TableCell className={classes.boldText}>Movie ID</TableCell> */}
                                {/* <TableCell>
                                    <TextField type="text"
                                        onChange={this.handleChange}
                                        variant='filled'
                                        required
                                        id="movie_id"
                                        name="movie_id"
                                        label="Movie ID"
                                        fullWidth
                                        autoComplete="movie_id"
                                    />
                                </TableCell> */}
                            </TableRow>
                            <TableRow>
                                <TableCell className={classes.boldText}>Image</TableCell>
                                <TableCell>
                                    <input type="file"
                                        onChange={this.handleChange}
                                        variant='filled'
                                        required
                                        id="image"
                                        name="image"
                                        label="Image"
                                        fullWidth
                                        autoComplete="image"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className={classes.boldText}>Genres</TableCell>
                                <TableCell>
                                <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Genre</InputLabel>
        <Select
          native
        //   onChange={handleChange}
          inputProps={{
          }}
        >
          <option aria-label="None" value="" />
          <option>Horror</option>
          <option>Romantic</option>
          <option>Action</option>
          <option>Sci-Fi</option>
          <option>Superheroes</option>
          <option>Sitcom</option>
          <option>Drama</option>
          <option>Animated</option>
          <option>Investigation</option>
          <option>Documentaries</option>
        </Select>
      </FormControl>
                                     {/* type="text" */}
                                        {/* onChange={this.handleChange}
                                        variant='filled'
                                        required
                                        id="genres"
                                        name="genres"
                                        label="Genres"
                                        fullWidth
                                        autoComplete="genres"
                                    />  */}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                {/* <TableCell className={classes.boldText}>Category</TableCell> */}
                                {/* <TableCell>
                                    <TextField type="text"
                                        onChange={this.handleChange}
                                        variant='filled'
                                        required
                                        id="category"
                                        name="category"
                                        label="Category"
                                        fullWidth
                                        autoComplete="category"
                                    />
                                </TableCell> */}
                            </TableRow>

                            <TableRow>
                                <TableCell className={classes.boldText} > Description</TableCell>
                                <TableCell>
                                    <TextField type="text"
                                        onChange={this.handleChange}
                                        fullWidth
                                        id="outlined-multiline-static"
                                        label="Description"
                                        required
                                        name="description"
                                        multiline
                                        rows={4}
                                        // defaultValue="Description is option"
                                        variant="outlined"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Button
                                        className= {classes.submit}
                                        type="submit"
                                        fullWidth
                                        variant='contained'
                                        color='primary' 
                                        >Submit
                                </Button>
                                </TableCell>
                            </TableRow>

                        </Table>
                    </form>
                </TableContainer>
            </div>
            </div>
    </>
        );
    }
}

const styles = {
    Adminlogo1: {
        marginRight: '200',
    },
    outwards: {
        position: 'absolute',
        backgroundColor: '#1b262c',
        height: "100%",
        width: '100%',
    },
    container: {
        height: "100%",
        marginBottom: 16,
        marginTop: 60,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    tableContainer: {
        maxWidth: 800,
    },
    table: {
        minWidth: 650,
        // maxWidth: 'md'
    },
    boldText: {
        fontWeight: 'bold'
    },
    submit: {
        margin: (3, 0, 2)
    }
    
}
export default withStyles(styles)(Admin);