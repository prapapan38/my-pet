'use client'
import React from 'react'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Unstable_Grid2'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { styled } from '@mui/material/styles'

export default function Pet() {
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    })

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ py: 4 }}>
                <Typography variant="h6" mb={2} fontWeight={800}>
                    Pet Form
                </Typography>
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
                                id="type"
                                label="Type"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid xs={12}>
                            <TextField
                                label="Weight"
                                id="weight"
                                type="number"
                                variant="outlined"
                                fullWidth
                                required
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            kg
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>

                        <Grid xs={6}>
                            <TextField
                                label="Age"
                                id="age"
                                variant="outlined"
                                fullWidth
                                required
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            Years
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid xs={6}>
                            <TextField
                                label="Age"
                                id="age"
                                variant="outlined"
                                fullWidth
                                required
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            Month
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid xs={12}>
                            <TextField
                                id="note"
                                label="Note"
                                multiline
                                variant="outlined"
                                fullWidth
                                required
                                rows={3}
                            />
                        </Grid>
                        <Grid xs={12}>
                            <Button
                                component="label"
                                variant="contained"
                                fullWidth
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload File
                                <VisuallyHiddenInput type="file" />
                            </Button>
                        </Grid>
                        <Grid xs={6}>
                            <Button variant="outlined" fullWidth>
                                Save
                            </Button>
                        </Grid>
                        <Grid xs={6}>
                            <Button variant="contained" href="/own" fullWidth>
                                Next
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </React.Fragment>
    )
}
