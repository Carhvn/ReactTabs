interface RequestStatusProps { 
    error: string | null;
    loading: boolean;
}

export default function RequestStatus({error, loading}: RequestStatusProps) { 
    if (loading) { 
        return (
            <p>Loading...</p>
        )
    } if (error) { 
        return (
            <p>{error}</p>
        )
    }

    return null
}