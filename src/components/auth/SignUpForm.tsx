"use client"

import {FormProvider, useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import SubmitButton from "../form/SubmitButton";
import InputText from "../form/InputText";

type FormData = {
    firstname: string,
    surname: string,
    dni: number,
    email: string,
    password: string,
    passwordconfirm: string,
    phonenumber: number
}

const schema = yup.object({
    firstname: yup.string().required(),
    surname: yup.string().required(),
    dni: yup.number().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    passwordconfirm: yup.string().required(),
    phonenumber: yup.number().required()
}).required()

const SignUpForm = () => {
    const methods = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const {handleSubmit} = methods;

    const onSubmit = (data: FormData) => {
        console.log(JSON.stringify(data));
    }

    return <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Crear cuenta</label>
                <div className="flex flex-row">
                    <InputText label={""} 
                        fieldname={"firstname"} 
                        type={"text"} 
                        placeholder="Nombre"/>
                    <InputText label={""} 
                        fieldname={"surname"} 
                        type={"text"} 
                        placeholder="Apellido"/>
                </div>
                <div className="flex flex-row">
                    <InputText label={""} 
                        fieldname={"dni"} 
                        type={"text"} 
                        placeholder="DNI"/>
                    <InputText label={""} 
                        fieldname={"email"} 
                        type={"text"} 
                        placeholder="Correo electrónico"/>
                </div>
                <div className="flex flex-row">
                        <InputText label={""} 
                            fieldname={"password"} 
                            type={"password"} 
                            placeholder="Contraseña"/>
                        <InputText label={""} 
                            fieldname={"passwordconfirm"} 
                            type={"password"} 
                            placeholder="Confirmar contraseña"/>
                </div>
                <div className="flex flex-row">
                    <InputText label={""} 
                            fieldname={"phonenumber"} 
                            type={"text"} 
                            placeholder="Teléfono"/>
                    <SubmitButton label={"Crear cuenta"} 
                            onSubmit={onSubmit}
                            styles=""/>
                </div>
            </form>
        </FormProvider>
}
export default SignUpForm