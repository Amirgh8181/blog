"use server"

import { SignUpDataType } from "@/components/authentication/entrySchemaTypes";
import axios from "axios";




const url = process.env.DATA_SOURCE_URL as string

export async function signUpUser(userDetails: SignUpDataType) {
    try {
        const {data} = await axios.post(`${url}/api/users`, userDetails, {
            headers: {
                "Content-Type":"application/json"
            }
          }
        )
        return data;

    } catch (e) {
        throw Error("somthing went wrong please reload page")
    }

}
