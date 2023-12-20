import NextAuth from "next-auth"
import  CredentialsProvider  from "next-auth/providers/credentials"

const url = process.env.CLIENT_SOURCE_URL as string


const handler = NextAuth({
  session:{
    strategy:"jwt"
  },
    providers:[
        CredentialsProvider({
            credentials: {
              email: {},
              password: {}
            },
            async authorize(credentials, req) {
              const credentialDetail={email:credentials?.email as string,password:credentials?.password as string}

              const request  = await fetch(`${url}/api/auth/login`, {
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body:JSON.stringify(credentialDetail)
            })
            

            //console.log(returnValue);
            
            console.log(request);
            console.log(request.ok);

             if (request.ok) {
               return request as any
             }
            console.log(req);
            return null;
              
            }
          })
    ],
    pages:{
      signIn:"/auth/Login"
    },
})

export { handler as GET, handler as POST }