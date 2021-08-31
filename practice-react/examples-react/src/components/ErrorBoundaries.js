import { ErrorBoundary } from "react-error-boundary";
import { useState } from "react";

// const ErrorBound = ErrorBoundary

function ErrorFallback({error}){
    return(
        <div>
            <p>Something went wrong, this is my way to deal with it</p>
            <pre>{error.message}</pre>
        </div>
    )
}

const Bomb = () =>{
    throw new Error('***BOOOOOOM***')
}

const ErrorBoundaries = () =>{
    const [explote, setExplote] = useState(false)
    
    return(
        <div>
            <div>
                <button 
                    onClick={() => setExplote(true)}
                    disabled={Boolean(explote)}>CLICK ME</button>
            </div>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <div>{explote ? <Bomb /> : 'Push the button, please'}</div>
            </ErrorBoundary>
        </div>
    )
}

export default ErrorBoundaries;