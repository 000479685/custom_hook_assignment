import { useState, useEffect } from "react";
export function useLogger(formData)
{
    const scope = formData.get("scope")
    const message = formData.get("message")
    const type = formData.get("type")

    switch(type)
    {
        case "error":
            console.error();
            break;
        case "warn":
            console.warn();
            break;
        case "log":
            console.log();
            break;
        case "debug":
            console.debug();
            break;
        default:
            console.error("error, invalid console input")
    }
}
