"use server"

import { SignUpDataType } from "@/components/authentication/entrySchemaTypes";
import axios from "axios";




const url = process.env.CLIENT_SOURCE_URL as string

export async function signUpUser(userDetails: SignUpDataType) {
        console.log(userDetails);
        
        const {data} = await axios.post(`${url}/api/auth/signUp`, userDetails, {
            headers: {
                "Content-Type":"application/json"
            }
          }
        )
        console.log(data); 
        return data;

}
