

function useLogger()
{
    console.log('App refreshed') 

    const handleSubmit = (event) =>
    {
        event.preventDefault();

        const scope = event.target.scope.value
        const message = event.target.message.value
        const type = event.target.type.value
        
        const date = new Date()

        switch(type)
        {
            case "error":
                console.error(`[${scope}] [${date.toDateString()}] ${message}`);
                break;
            case "warn":
                console.warn(`[${scope}] [${date.toDateString()}] ${message}`);
                break;
            case "log":
                console.log(`[${scope}] [${date.toDateString()}] ${message}`);
                break;
            case "debug":
                console.debug(`[${scope}] [${date.toDateString()}] ${message}`);
                break;
            default:
                console.error("error, invalid console input")
        }    
    }

    const formProps =
    {        
        onSubmit: handleSubmit
    }

    return formProps
}

export default useLogger