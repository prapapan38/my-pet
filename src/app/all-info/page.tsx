'use client'
import React, { useState } from 'react'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CheckIcon from '@mui/icons-material/Check'
import { useFormData } from '@/context/formDataContext'
import InfoItem from '../components/InfoItem'
import {
    Alert,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material'
import { useRouter } from 'next/navigation'

export default function AllInfo() {
    const router = useRouter()

    const { petFormData, customerFormData } = useFormData()
    const [open, setOpen] = useState(false)

    const sendEmail = async () => {
        setOpen(true)
        // const response = await fetch('/api/sendEmail', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ petFormData, customerFormData }),
        // })
        // const data = await response.json()
        // localStorage.removeItem('customerFormData')
        // localStorage.removeItem('petFormData')
        // if (response.ok) {
        //     setOpen(true)
        // } else {
        //     console.error('Email sending error:', data.error)
        // }
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ py: 4 }}>
                <div className="flex flex-row justify-between mb-4">
                    <Typography variant="h6" fontWeight={800}>
                        All Info
                    </Typography>

                    <Button variant="contained" href="/customer">
                        Back
                    </Button>
                </div>

                <Divider textAlign="left">
                    <Typography component="div" className="font-extrabold mb-4">
                        Pet Form Data
                    </Typography>
                </Divider>

                <InfoItem label="Name" value={petFormData.name} />
                <InfoItem label="Type" value={petFormData.type} />
                <InfoItem label="Weight" value={petFormData.weight + ' kg'} />
                <InfoItem label="Age" value={petFormData.age + ' Years'} />
                <InfoItem label="Note" value={petFormData.note} />

                <Divider textAlign="left">
                    <Typography component="div" className="font-extrabold my-4">
                        Customer Form Data
                    </Typography>
                </Divider>
                <InfoItem label="Name" value={customerFormData.name} />
                <InfoItem label="Tel" value={customerFormData.tel} />
                <InfoItem label="Email" value={customerFormData.email} />
                <InfoItem label="Address" value={customerFormData.address} />

                <div className=" mt-4 space-y-4">
                    <Button
                        variant="outlined"
                        type="submit"
                        fullWidth
                        onClick={() => router.push('/pet')}
                    >
                        Home
                    </Button>
                    <Button
                        variant="contained"
                        type="submit"
                        fullWidth
                        onClick={sendEmail}
                    >
                        Sand Email
                    </Button>
                    <Dialog open={open} onClose={() => setOpen(false)}>
                        <div className=" flex flex-col items-center">
                            <DialogTitle>Email Sent Successfully</DialogTitle>
                            <CheckIcon
                                color="success"
                                style={{ fontSize: 50 }}
                            />
                        </div>

                        <DialogActions>
                            <Button
                                onClick={() => setOpen(false)}
                                color="primary"
                                autoFocus
                            >
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Container>
        </React.Fragment>
    )
}
