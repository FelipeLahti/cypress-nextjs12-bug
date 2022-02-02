import { useRandomHook } from "./useRandomHook"

export const Button = () => {
    const value = useRandomHook()
    return <>
        {value}
    </>
}