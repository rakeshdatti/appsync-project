export const handler=async (event) => {
    for(const record of event.Records){
        const body=JSON.parse(record.body);
        console.log("Message Received",body);

        if(body.shouldFail==true){
            console.error("intentional error");
            throw new Error("processing failed");
        }
        
        console.log("Proccessed successfully ",body.orderId);
        
    }
}
