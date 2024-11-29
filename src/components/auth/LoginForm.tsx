"use client"

import {FormProvider, useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Link from "next/link";
import SubmitButton from "../form/SubmitButton";
import InputText from "../form/InputText";

type FormData = {
    username: string;
    password: string;
}

const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required()
}).required()

const LoginForm = () => {
    const methods = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const {handleSubmit} = methods;

    const onSubmit = (data: FormData) => {
        console.log(JSON.stringify(data));
    }

    return <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputText label={"¡Hola! Ingresá tu e-mail"} 
                    fieldname={"username"}
                    type="text"
                    placeholder="Correo electrónico"/>
                <InputText label={"Ingresá tu contraseña"} 
                    fieldname={"password"}
                    type="password"
                    placeholder="Contraseña"/>
                <div>
                <SubmitButton label={"Continuar"} 
                        onSubmit={onSubmit}
                        styles="mt-4"/>
                </div>
                <div>
                    <Link href='/signup'>Crear Cuenta</Link>
                </div>
            </form>
        </FormProvider>
}
export default LoginForm