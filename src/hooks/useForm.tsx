import { FormEvent } from "react";

export type IRef = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement|  null; 


interface Iresponse {
    [key:string]: {
        value: string;
        valid: boolean;
    }
}

interface IuseFormProps {
    register: (ref: IRef) => void,
    getResponse: () => Iresponse,
    onSubmit:  (callback: (data:Iresponse) => void) => (event?: FormEvent ) => void 
}


const useForm = ():IuseFormProps => {
    const inpustrefs: IRef[] = [];
    const register = (ref: IRef) => {
        inpustrefs.push(ref);
    }

    const getResponse=():Iresponse => {
        return inpustrefs.reduce((acc, ref) => {
            if (ref) {
                return {
                    ...acc,
                    [ref.name]: {
                        value: ref.value,
                        valid: ref.validity.valid
                    }
                }
            }
            return acc;
        }, {});
    }


    const onSubmit = (callback: (data: Iresponse) => void) => {
        return (event?: FormEvent)  => {
            event && event.preventDefault();
            callback(getResponse());
        }
    }


    return {register, getResponse, onSubmit};

}

export default useForm;


