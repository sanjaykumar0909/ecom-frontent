import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function useAuthError() {
    const navigate = useNavigate();
    const user= useAuthContext()
    const handleError = (error: unknown) => {
        let err = error as AxiosError;
        // @ts-ignore
        if (((err.response?.data?.error as string).toLowerCase() === 'expired refresh token') ||
        // @ts-ignore
            (err.response?.data?.error as string).toLowerCase() === 'access token and refresh token are missing') {
            user.setUser('')
            user.setJwt('')
            navigate('/login', {state: 'redirect'});
        } else {
            // Handle other errors or log them
            console.error('Unhandled error:', error);
        }
    };

    return handleError;
}