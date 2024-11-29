import { useFormContext } from "react-hook-form"

type InputTextProps = {
    label: string
    fieldname: string
    placeholder?: string
    styles?: string
    type: 'text' | 'password'
}

const InputText = ({label, fieldname, type, placeholder, styles}: InputTextProps) => {
    const {register, formState: {errors}} = useFormContext();

    return <div className={`flex flex-col ${styles ?? ''}`}>
        <label>{label}</label>
        <input 
            {...register(fieldname)}
            className=""
            type={type} placeholder={placeholder ?? ''}/>
        {errors && errors[fieldname] && 
            <div className="text-red-600">Este campo es obligatorio</div>}
    </div>
}

export default InputText