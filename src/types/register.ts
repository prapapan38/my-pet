export interface PetFormData {
    name: string
    type: string
    weight: string
    age: string
    note: string
    files: FileList | null // Use FileList or null for when no files are selected
}

export interface CustomerFormData {
    name: string
    tel: string
    address: string
    email: string
}
