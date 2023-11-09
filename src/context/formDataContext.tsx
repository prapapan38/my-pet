'use client'
import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactElement,
} from 'react'

interface PetFormData {
    name: string
    type: string
    weight: string
    age: string
    note: string
}

interface CustomerFormData {
    name: string
    tel: string
    address: string
    email: string
}

const initialPetData: PetFormData = {
    name: '',
    type: '',
    weight: '',
    age: '',
    note: '',
}

const initialCustomerData: CustomerFormData = {
    name: '',
    tel: '',
    address: '',
    email: '',
}

const FormDataContext = createContext<{
    petFormData: PetFormData
    setPetFormData: (data: PetFormData) => void
    customerFormData: CustomerFormData
    setCustomerFormData: (data: CustomerFormData) => void
}>({
    petFormData: initialPetData,
    setPetFormData: () => {},
    customerFormData: initialCustomerData,
    setCustomerFormData: () => {},
})

export const useFormData = () => useContext(FormDataContext)

export const FormDataProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}): ReactElement => {
    const [petFormData, setPetFormData] = useState<PetFormData>(initialPetData)
    const [customerFormData, setCustomerFormData] =
        useState<CustomerFormData>(initialCustomerData)

    useEffect(() => {
        const savedPetFormData = localStorage.getItem('petFormData')
        const savedCustomerFormData = localStorage.getItem('customerFormData')

        if (savedPetFormData) {
            setPetFormData(JSON.parse(savedPetFormData))
        }
        if (savedCustomerFormData) {
            setCustomerFormData(JSON.parse(savedCustomerFormData))
        }
    }, [])

    return (
        <FormDataContext.Provider
            value={{
                petFormData,
                setPetFormData,
                customerFormData,
                setCustomerFormData,
            }}
        >
            {children}
        </FormDataContext.Provider>
    )
}

export default FormDataProvider
