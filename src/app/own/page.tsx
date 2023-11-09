'use client'
import React from 'react'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Unstable_Grid2'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

export default function Own() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ py: 4 }}>
                <div className="flex flex-row justify-between">
                    <Grid xs={6} mb={2}>
                        <Typography variant="h6" fontWeight={800}>
                            Own Form
                        </Typography>
                    </Grid>

                    <Grid xs={6}>
                        <Button variant="contained" href="/pet">
                            Back
                        </Button>
                    </Grid>
                </div>

                <form>
                    <Grid container spacing={3}>
                        <Grid xs={12}>
                            <TextField
                                id="name"
                                label="Name"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </Grid>

                        <Grid xs={12}>
                            <TextField
                                label="Tel"
                                id="tel"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </Grid>

                        <Grid xs={12}>
                            <TextField
                                label="Email"
                                type="email"
                                autoComplete="current-email"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </Grid>

                        <Grid xs={12}>
                            <TextField
                                label="Address"
                                type="address"
                                autoComplete="current-email"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </Grid>

                        <Grid xs={6}>
                            <Button variant="outlined" fullWidth>
                                Save
                            </Button>
                        </Grid>
                        <Grid xs={6}>
                            <Button
                                variant="contained"
                                href="/all-info"
                                fullWidth
                            >
                                Next
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </React.Fragment>
    )
}
