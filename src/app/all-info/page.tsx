'use client'
import React from 'react'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Unstable_Grid2'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'

export default function AllInfo() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ py: 4 }}>
                <div className="flex flex-row justify-between">
                    <Grid xs={6} mb={4}>
                        <Typography variant="h6" fontWeight={800}>
                            All Info
                        </Typography>
                    </Grid>

                    <Grid xs={6}>
                        <Button variant="contained" href="/own">
                            Back
                        </Button>
                    </Grid>
                </div>
                {/*Pet form */}
                <Divider textAlign="center">
                    <div className=" font-extrabold mb-2"> Pet Form</div>
                </Divider>
                <div className="flex flex-row justify-between">
                    <div className=" font-semibold">Name : </div>
                    <div>Tata</div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className=" font-semibold">Type : </div>
                    <div>Dog</div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className=" font-semibold">Weight : </div>
                    <div>12 kg.</div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className=" font-semibold">Age : </div>
                    <div>5 Years.</div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className=" font-semibold">Note : </div>
                    <div>no tail</div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className=" font-semibold">File : </div>
                    <div>File</div>
                </div>

                {/*Own form */}

                <Divider textAlign="center">
                    <div className=" font-extrabold mb-2"> Own Form</div>
                </Divider>
                <div className="flex flex-row justify-between">
                    <div className=" font-semibold">Name : </div>
                    <div>Tan</div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className=" font-semibold">Tel : </div>
                    <div>09xxxxxx</div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className=" font-semibold">Email : </div>
                    <div>catty@gmail.com</div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className=" font-semibold">Address : </div>
                    <div>123 bangkok thailand 10200</div>
                </div>

                <Grid container spacing={3} mt={4}>
                    <Grid xs={6}>
                        <Button variant="outlined" fullWidth>
                            SUBMIT
                        </Button>
                    </Grid>
                    <Grid xs={6}>
                        <Button variant="contained" href="/own" fullWidth>
                            SEND TO MAIL
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}
