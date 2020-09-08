import React from 'react'
import { TableContainer, Paper, Table, TableRow, TableCell, makeStyles, TextField, RadioGroup, Radio, FormControlLabel, Button
        } from '@material-ui/core'


export default function AddData() {

    const classes = useStyles()
    const [value, setValue] = React.useState('movie')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className={classes.container} >
            <h2 className={classes.h2} > Upload the data to the server
            </h2>

            <div>
                <RadioGroup row aria-label="type" name="type1" value={value} onChange={handleChange}>
                    <FormControlLabel value="movie" control={<Radio />} label="Movie" />
                    <FormControlLabel value="serie" control={<Radio />} label="Serie" />
                </RadioGroup>
            </div>

            <TableContainer className={classes.tableContainer} component={Paper}>
                <form>
                    <Table size='small' lassName={classes.table} aria-label="simple table">
                        <TableRow >
                            <TableCell className={classes.boldText}>Movie Title</TableCell>
                            <TableCell align="right">
                                <TextField
                                    variant='filled'
                                    required
                                    name="title"
                                    label="Movie Title"
                                    fullWidth
                                    autoComplete="title"
                                />
                            </TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.boldText}>Release Year</TableCell>
                            <TableCell>
                                <TextField
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
                            <TableCell className={classes.boldText}>Movie ID</TableCell>
                            <TableCell>
                                <TextField
                                    variant='filled'
                                    required
                                    id="movie-id"
                                    name="movie-id"
                                    label="Movie ID"
                                    fullWidth
                                    autoComplete="movie-id"
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.boldText}>Movie Image</TableCell>
                            <TableCell>
                                <TextField
                                    variant='filled'
                                    required
                                    id="movie-image"
                                    name="movie-image"
                                    label="Movie Image"
                                    fullWidth
                                    autoComplete="movie-image"
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.boldText}>Genres</TableCell>
                            <TableCell>
                                <TextField
                                    variant='filled'
                                    required
                                    id="genres"
                                    name="genres"
                                    label="Genres"
                                    fullWidth
                                    autoComplete="genres"
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.boldText}>Category</TableCell>
                            <TableCell>
                                <TextField
                                    variant='filled'
                                    required
                                    id="category"
                                    name="category"
                                    label="Category"
                                    fullWidth
                                    autoComplete="category"
                                />
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className={classes.boldText} > Description</TableCell>
                            <TableCell>
                                <TextField
                                    fullWidth
                                    id="outlined-multiline-static"
                                    label="Description"
                                    multiline
                                    rows={4}
                                    defaultValue="Description is option"
                                    variant="outlined"
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Button className={classes.submit}
                                    type="submit"
                                    fullWidth
                                    variant='contained'
                                    color='primary' >
                                    Submit
                                </Button>
                            </TableCell>
                        </TableRow>

                    </Table>
                </form>
            </TableContainer>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    container: {
        marginBottom: theme.spacing(16),
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
        margin: theme.spacing(3, 0, 2)
    }
}))