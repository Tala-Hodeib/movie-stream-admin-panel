import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import {
    withStyles,
    Avatar,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    Box,
} from '@material-ui/core'

import { adminLogin } from '../api'
import { Router, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Dashboard from './Dashboard'

class SignIn extends React.Component {
    state = {
        email: '',
        password: '',
        isLogined: false,
        err: ''
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async () => {
        const { email, password } = this.state
        try {
            const success = await adminLogin(email, password)
            localStorage.setItem("token", email);
            this.setState({ isLogined: true })
            this.props.history.push('/')

        } catch (err) {
            const errMessage = err.message
            alert(err)
            this.setState({ err: errMessage })
            // return;
        }
    }

    render() {
        const { email, password, isLogined } = this.state
        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs" >
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar} />
                    <Typography component="h1" variant="h5" >
                        Singn in
                    </Typography>
                    <form className={classes.form} onSubmit={this.handleSubmit} >
                        <TextField onChange={this.handleChange}
                            value={email}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus />

                        <TextField onChange={this.handleChange}
                            value={password}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            autoComplete="password" />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
                            Signin
                        </Button>
                    </form>
                </div>
                <Box mt={8} >
                    <CopyRight />
                </Box>
            </Container>
        )
    }
}

const CopyRight = () => (
    <Typography  >
        {'Copyright ©'}
        {new Date().getFullYear()}
    </Typography>
)

const styles = theme => (
    {
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // fix IE issue
            marginTop: theme.spacing(1),

        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        }
    })

export default withStyles(styles)(withRouter(SignIn))