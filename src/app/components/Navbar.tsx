'use client'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import PetsIcon from '@mui/icons-material/Pets'
import Link from 'next/link'

function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className="h-16 justify-center">
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        <PetsIcon
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                mr: 2,
                            }}
                        />
                        <Typography
                            variant="h4"
                            noWrap
                            component="a"
                            href="/pet"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 600,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            PETS-INFO
                        </Typography>

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'flex', md: 'none' },
                            }}
                        ></Box>

                        <PetsIcon
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                mr: 2,
                            }}
                        />

                        <Typography
                            variant="h4"
                            noWrap
                            component="a"
                            href="/pet"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 600,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            PETS-INFO
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}
export default NavBar
