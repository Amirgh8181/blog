import ContactUsForm from "@/components/contactUsForm"
import { cookies } from 'next/headers'
const ContactUs = () => {
  //const cookieStore = cookies()
  // const handleSetCookie = (data: any) => {
  //   cookieStore.delete('userauth')
  //   cookieStore.set('userauth', JSON.stringify(data))
  // }


  return (
        <ContactUsForm />
  )
}

export default ContactUs