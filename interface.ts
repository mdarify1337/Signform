interface UserForm 
{
    onSignIn:  
    (
        username: string, 
        password: string
    ) 
        => void;
    onSignUp: 
    (
        email: string, 
        username: string,
        password: string
    ) 
        => void;
}
