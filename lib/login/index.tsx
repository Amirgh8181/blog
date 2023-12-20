"use server"

import { LoginDataType } from '@/components/authentication/entrySchemaTypes';
import axios from 'axios';

const url = process.env.CLIENT_SOURCE_URL as string

export async function loginUserRequest(userDetails: LoginDataType) {
    try {
            console.log(userDetails);
            
            const data = await axios.post(`${url}/api/auth/login`, userDetails, {
                headers: {
                    "Content-Type":"application/json"
                }
              }
            )
            console.log(data.data);
            //return data;         
    } catch (e) {
        throw Error('somthing went wrong please reload page')        
    }

}



