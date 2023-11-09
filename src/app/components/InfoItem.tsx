import React from 'react'

interface InfoItemProps {
    label: string
    value: string | number
}

const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => (
    <div className="flex flex-row justify-between">
        <div className=" font-semibold ">{label}:</div>
        <div>{value}</div>
    </div>
)

export default InfoItem
