"use server"

import { LoginDataType } from '@/components/authentication/entrySchemaTypes';
import axios from 'axios';

const url = process.env.DATA_SOURCE_URL as string

export async function loginUserRequest(userDetails: LoginDataType) {
    try {

            const {data} = await axios.post(`${url}/api/auth`, userDetails, {
                headers: {
                    "Content-Type":"application/json"
                }
              }
            )
            return data;
            

    } catch (e) {
        throw Error('somthing went wrong please reload page')        
    }

}



