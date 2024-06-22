import { api } from '../services/api';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextData {
    signIn: ({ username, password }: SignInProps) => Promise<void>;
    user: User | null;
    signOut: () => void;
    showToast: boolean;
    showToastTimer: ({ value, type }: ShowToastProps) => Promise<void>;
    ToastText: string;
    type: string;
}

interface SignInProps {
    username: string;
    password: string;
}

interface User {
    IdUsuario: string,
    NomeUsuario: string,
    ExpiracaoToken: string,
    ExpiracaoRefreshToken: string
}

interface ShowToastProps {
    value: string;
    type: string;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [data, setData] = useState<{ user: User | null; token: string | null }>({ user: null, token: null });
    const [showToast, setShowToast] = useState(false);
    const [type, setType] = useState('');
    const [ToastText, setToastText] = useState('');

    async function showToastTimer({ value, type }: ShowToastProps) {
        setToastText(value);
        setShowToast(true);
        setType(type);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    }

    async function signIn({ username, password }: SignInProps) {
        try {
            const data = {
                username,
                password,
                aplicacao: "string",
                tempoExpiracao: 0,
                utilizacaoUnica: true
            }
            const response = await api.post('/api/Autenticacao/Login', { data });
            console.log(response);
            const { IdUsuario, token, NomeUsuario, ExpiracaoToken, ExpiracaoRefreshToken } = response.data;
            const user = {
                IdUsuario,
                NomeUsuario,
                ExpiracaoToken,
                ExpiracaoRefreshToken
            }
            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
            localStorage.setItem("@rocketnotes:token", token);
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({ user, token });
        } catch (error: any) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('Não foi possível entrar');
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@rocketnotes:token");
        localStorage.removeItem("@rocketnotes:user");
        setData({ user: null, token: null });
    }

    useEffect(() => {
        const token = localStorage.getItem("@rocketnotes:token");
        const user = localStorage.getItem("@rocketnotes:user");
        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({ user: JSON.parse(user), token });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ signIn, user: data.user, signOut, showToast, showToastTimer, ToastText, type }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export { AuthProvider, useAuth };
