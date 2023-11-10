'use client'
import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'

import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { PetFormData } from '@/types/register'
import { useFormData } from '@/context/formDataContext'

const Pet: React.FC = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        control,
        watch,
        formState: { errors },
    } = useForm<PetFormData>()

    const { setPetFormData } = useFormData()

    const [file, setFile] = useState<File | null>()
    const [fileName, setFileName] = useState<string>('')

    useEffect(() => {
        const petFormData = localStorage.getItem('petFormData')
        if (petFormData) {
            const parsedData = JSON.parse(petFormData)
            Object.keys(parsedData).forEach((key) => {
                setValue(key as keyof PetFormData, parsedData[key])
            })
            setFileName(parsedData.fileName)
        }
    }, [])

    const onSubmit: SubmitHandler<PetFormData> = (data) => {
        if (file) {
            setPetFormData({ ...data, file: file })
        } else {
            setPetFormData(data)
        }
        router.push('/customer')
    }

    const onSave = async () => {
        const data = getValues()
        if (file) {
            const base64File = await toBase64(file)
            localStorage.setItem(
                'petFormData',
                JSON.stringify({
                    ...data,
                    file: base64File,
                    fileName: file.name,
                })
            )
        } else {
            localStorage.setItem('petFormData', JSON.stringify(data))
        }
    }

    const toBase64 = (file: File | null) =>
        new Promise<string>((resolve, reject) => {
            if (!file) return
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result as string)
            reader.onerror = (error) => reject(error)
        })

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        const maxFileSize = 170 * 1024

        if (file) {
            if (file.size > maxFileSize) {
                alert('File size should be 170 KB or less.')
                setFile(undefined)
                setFileName('')
            } else {
                setFile(file)
                setFileName(file.name)
            }
        }
    }

    const currentFile = watch('file')

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ py: 4 }}>
                <Typography variant="h6" mb={4} fontWeight={800}>
                    Pet Form
                </Typography>
                <form
                    encType="multipart/form-data"
                    method="post"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Grid container gap={2}>
                        <Grid xs={12}>
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
                        <Grid xs={12}>
                            <TextField
                                {...register('type', {
                                    required: 'Type is required',
                                })}
                                error={!!errors.type}
                                helperText={
                                    errors.type ? errors.type.message : ''
                                }
                                label="Type"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12}>
                            <TextField
                                {...register('weight', {
                                    required: 'Weight is required',
                                })}
                                error={!!errors.weight}
                                helperText={
                                    errors.weight ? errors.weight.message : ''
                                }
                                label="Weight"
                                type="number"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            kg
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12}>
                            <TextField
                                {...register('age', {
                                    required: 'Age is required',
                                })}
                                error={!!errors.age}
                                helperText={
                                    errors.age ? errors.age.message : ''
                                }
                                label="Age"
                                type="number"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            Years
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12}>
                            <TextField
                                {...register('note', {
                                    required: 'Note is required',
                                })}
                                error={!!errors.note}
                                helperText={
                                    errors.note ? errors.note.message : ''
                                }
                                label="Note"
                                multiline
                                rows={3}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>

                        <Grid xs={12}>
                            <Button variant="contained" component="label">
                                Upload File
                                <input
                                    {...register('file')}
                                    type="file"
                                    onChange={handleFileChange}
                                    hidden
                                />
                            </Button>
                            <Typography
                                variant="caption"
                                display="block"
                                gutterBottom
                            >
                                {fileName && `Selected file: ${fileName}`}
                            </Typography>
                            <Typography
                                variant="caption"
                                color="error"
                                display="block"
                            >
                                (File size should be 170 KB or less.)
                            </Typography>
                        </Grid>
                        <Grid xs={12}>
                            <Button
                                onClick={onSave}
                                variant="outlined"
                                fullWidth
                            >
                                Save draft
                            </Button>
                        </Grid>
                        <Grid xs={12}>
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

export default Pet
