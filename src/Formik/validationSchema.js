import * as Yup from 'yup'

export const contactValidationSchema = Yup.object({
    name: Yup.string().trim().min(6, 'Minimo 6 caracteres').max(12, 'Maximo 10 caracteres').required('Este campo Requirido'),
    email: Yup.string().trim().required('Campo Requerido').email('Debe ingresar un email valido'),
    phone: Yup.number().required('Campo Requerido').integer('Solo numeros enteros'),
    message: Yup.string().trim().required('Campo Requerido')
})

export const registerValidationSchema = Yup.object({
    name: Yup.string().trim().required('Este campo es requerido'),
    lastName: Yup.string().trim().required('Campo Requerido'),
    email: Yup.string().email('Introduzca un Email Valido').required('Este campo es requerido'),
    repassword: Yup.string().oneOf([Yup.ref('password')], ' Las contraseñas no coinciden').required('Campo Requerido')
})

export const loginValidationSchema = Yup.object({
    username: Yup.string().trim().required('Este campo es requerido'),
    password: Yup.string().min(6, 'Minimo 6 caracteres').max(12, 'Maximo 12 caracteres').required('Este campo es requerido'),
})