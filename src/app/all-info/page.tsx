'use client'
import React, { useEffect, useState } from 'react'
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
import emailjs from 'emailjs-com'

export default function AllInfo() {
    const router = useRouter()

    const { petFormData, customerFormData } = useFormData()
    const [open, setOpen] = useState(false)

    const toBase64 = (file: File | null) =>
        new Promise<string>((resolve, reject) => {
            if (!file) return
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result as string)
            reader.onerror = (error) => reject(error)
        })

    const sendEmail = async () => {
        const base64File = await toBase64(petFormData.file)

        const templateParams = {
            to_name: customerFormData.name,
            pet_name: petFormData.name,
            pet_type: petFormData.type,
            weight: petFormData.weight,
            age: petFormData.age,
            note: petFormData.note,
            customer_tel: customerFormData.tel,
            customer_address: customerFormData.address,
            customer_email: customerFormData.email,
            reply_to: customerFormData.email,
            file: base64File,
        }

        console.log('templateParams', JSON.stringify(templateParams))
        emailjs
            .send(
                'service_z6e145m',
                'template_ayalrad',
                templateParams,
                '3sGKUOA3QdA0Z3f6c'
            )
            .then(
                (result) => {
                    console.log(result.text)
                    setOpen(true)
                },
                (error) => {
                    console.log(error.text)
                }
            )
    }

    const handleClearSave = () => {
        localStorage.removeItem('customerFormData')
        localStorage.removeItem('petFormData')
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
                        color="warning"
                        variant="contained"
                        fullWidth
                        onClick={handleClearSave}
                    >
                        Clear Save
                    </Button>
                    <Button
                        variant="outlined"
                        fullWidth
                        onClick={() => router.push('/pet')}
                    >
                        Home
                    </Button>
                    <Button variant="contained" fullWidth onClick={sendEmail}>
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
