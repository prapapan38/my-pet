'use client'
import React, { useEffect } from 'react'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { CustomerFormData } from '@/types/register'
import { useFormData } from '@/context/formDataContext'

export default function Customer() {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
    } = useForm<CustomerFormData>()

    const { setCustomerFormData } = useFormData()

    useEffect(() => {
        const customerFormData = localStorage.getItem('customerFormData')
        if (customerFormData) {
            const parsedData = JSON.parse(customerFormData)
            Object.keys(parsedData).forEach((key) => {
                setValue(key as keyof CustomerFormData, parsedData[key])
            })
        }
    }, [setValue])

    const onSubmit: SubmitHandler<CustomerFormData> = (data) => {
        setCustomerFormData(data)
        router.push('/all-info')
    }

    const onSave = () => {
        const data = getValues()
        localStorage.setItem('customerFormData', JSON.stringify(data))
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ py: 4 }}>
                <div className="flex flex-row justify-between mb-4">
                    <Typography variant="h6" fontWeight={800}>
                        Customer Form
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => router.push('/pet')}
                    >
                        Back
                    </Button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                {...register('name', {
                                    required: 'Name is required',
                                })}
                                error={!!errors.name}
                                helperText={errors.name?.message || ''}
                                label="Name"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                {...register('tel', {
                                    required: 'Tel is required',
                                    maxLength: {
                                        value: 10,
                                        message:
                                            'Tel must be 10 characters long',
                                    },
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: 'Tel must be 10 digits',
                                    },
                                })}
                                error={!!errors.tel}
                                helperText={errors.tel?.message || ''}
                                label="Tel"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message:
                                            'Entered value does not match email format',
                                    },
                                })}
                                error={!!errors.email}
                                helperText={errors.email?.message || ''}
                                label="Email"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                {...register('address', {
                                    required: 'Address is required',
                                })}
                                error={!!errors.address}
                                helperText={errors.address?.message || ''}
                                label="Address"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                onClick={onSave}
                                variant="outlined"
                                fullWidth
                            >
                                Save draft
                            </Button>
                        </Grid>

                        <Grid item xs={12}>
                            <Button variant="contained" type="submit" fullWidth>
                                Next
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </React.Fragment>
    )
}
