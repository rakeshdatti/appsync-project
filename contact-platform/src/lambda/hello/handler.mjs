let contacts=[]


const handlers={
   hello: async(args)=>{
      return {message: `Hello from day2`, input: args};
   },

   createContact: async(args)=>{
      if(!args.name || !args.phone){
         throw new Error("Name and phone are required")
      }
      const contact={
         id: contacts.length + 1,
         name: args.name,
         phone: args.phone,
         email: args.email || null
      }
      contacts.push(contact)
      return contact
   },

   getContacts: async(args) =>{
      return contacts;
   }
}

export const handler=async(event)=>{
   const fieldName=event.info?.fieldName || event.fieldName
   const args=event.arguments || event.args
   const fn=handlers[fieldName]
   if(!fn){
      throw new Error(`No handler for field: ${fieldName}`)
   }
   return await fn(args)
}